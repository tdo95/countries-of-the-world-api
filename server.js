const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');
const app = express();
const PORT = 8000;
const { countriesData } = require('./countries-data.js')

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////// ROUTES

//GET REQUEST: returns html for home page
app.get('/', (req,res) => {
    //__dirname tells the server where to go look for the HTML file
    res.sendFile(__dirname + '/index.html')
});

//GET REQUEST: returns entires that match query string, returns an array of objects that match
app.get('/api/:name', (req, res) => {
    let matchingCountries = [];
    const queryText = req.params.name.toLowerCase();
    for (let name in countriesData) {
        if (name.includes(queryText)) matchingCountries.push(countriesData[name]);
    }
    res.json(matchingCountries);
});

//GET REQUEST: returns entire api
app.get('/api', (req, res) => {
    res.json(countriesData);
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server now running on port ${PORT}`)
})



///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////// WEB SCRAPER
//stores list countries w/ thier data for API
const countries = {};

//UNCOMMENT FUNCTION TO SCAPE WIKIPEDIA FOR COUNTRIES DATA
/* NOTE: Nodemon automatically restarts the server everytime a new file is created. 
Be sure to kill the server as soon as file creation is complete then comment out the function to prevent server from continuously restarting and recreating the file */

// scrapeData();

async function scrapeData() {
    let done = await buildCountriesList();
    let data = await fillInData(); 
    writeDataIntoFile()
    console.log('SCRAPING COMPLETE!')
}

//build out initial list of all countries (soverign nations and other states only, no territories)
async function buildCountriesList() {
    let countriesListURL = `https://en.wikipedia.org/wiki/List_of_sovereign_states`;

    try {
        //axois gets html data from a website
        let res = await axios(countriesListURL);
        const html = res.data;
        //cheerio allows us to parse through html pick out elements
        const $ = cheerio.load(html);
        //get elements with country name and link and add obj to global countries list
        $('table.sortable td b a', html).each(function() {
            //grab text from id, TODO: format text to remove extra details??
            let countryName = $(this).attr('title');
            //remove any accent marks from name and make lowercase
            // See: https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
            const normalizedCountryName = countryName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
            const wikiLink = `https://en.wikipedia.org${$(this).attr('href')}`
            //build initial object
            countries[normalizedCountryName] = {
                countryName,
                wikiLink,
                officialLanguages: [],
                population: '',
                gdp: {},
                gini: '',
                currency: '',
                drivingSide: '',
                capital: '',
            };
        })
    } catch (error) {
        console.log(error);
    } 
}

//Fill in data for each country like gdp, capital, etc
async function fillInData() {
    console.log('Filling in data...........')
    
    try {
        //go through each country and load wiki page to fill in data
        for (let name in countries) {
            let country = countries[name]
            let res = await axios(country.wikiLink);
            const html = res.data;
            const $ = cheerio.load(html);
        
            //iterate over each data cell's headings in table on wiki page and pull information
            $('table.infobox.ib-country.vcard tr th', html).each(function() {
                let heading = $(this).text();
                //GET CAPITAL
                if (heading.includes('Capital')) { 
                    //NOTE: Switzerland and Nauru are special cases, they dont have an official capital
                    if (name === 'Switzerland' || name === 'Nauru') country.capital = '';
                    else {
                        let city = $(this).next().find('a').first().text();
                        country.capital = city;
                    }
                }
                //GET OFFICAL LANGUAGES
                /* NOTE: for some reason entering 'official language' on some entries does not work and returns false. Might have somthing to do with the inner text of the element which appears as 'official&nbsp;language' in the inspector. It renders regularly with a space inbetween when printed - I have no idea whats going on with this, but since no other headings include language, im safe to use it as an identifier for offical languages. */
                else if (heading.includes('Official') && !heading.includes('script')) { 
                    const nextElement = $(this).next();
                    let langList = nextElement.find('li');
                    //checks for no offical language
                    if (nextElement.text().includes('None') || nextElement.text().includes('National languages')) country['officialLanguages'] = [];
                    //checks for languages listed using li tags (in list format)
                    else if(langList.length) {
                        country['officialLanguages'] = langList.map((i, el) => {
                           let aTags = $(el).children('a');
                           if (aTags.length) return aTags.text();
                           else return $(el).text();
                        }).toArray();
                    }
                    //checks for languages included in non-list format, could include more than one
                    else{
                        let aTags = nextElement.children('a');
                        if (aTags.length) {
                            country['officialLanguages'] = aTags.map((i, el) => $(el).text()).toArray();
                        } else country['officialLanguages'] = [nextElement.text()]
                    } 
                }
                //GET POPULATION SIZE
                else if (heading.includes('Population')) {
                    let population = $(this).parent().next().children('td').first().text();
                    country['population'] = population.split('[')[0].trim().split('(')[0].trim();

                }
                //GET GDP (PPP)
                else if (heading.includes('GDP') && heading.includes('PPP')) {
                    let text = $(this).parent().next().children('td').text();
                    //removes text in brackets and text in parentheseis
                    let cleanedGDP = text.split('[')[0].trim().split('(')[0].trim()
                    if (cleanedGDP === 'Unknown') country['gdp'] = {};
                    else country['gdp'] = {pppTotal: `${cleanedGDP}`};
                }
                //GET CURRENCY
                else if (heading.includes('Currency')) {
                   const firstCurrency = $(this).next().find('a').first().text();
                   //NOTE: Kiribati is the only country whos currency is not in an a tag - should think of a work around for this in the future, but for now am defining an exception
                   if (name === 'Kiribati') country['currency'] = 'Australian dollar'
                   else country['currency'] = firstCurrency;
                }
                //GET GINI
                else if (heading.includes('Gini')) {
                    let gini = $(this).next().text().split('[')[0].trim();
                    country['gini'] = gini;
                }
                //GET DRIVING SIDE
                else if (heading.includes('Driving')) {
                    let side = $(this).next().text().split('[')[0].trim();
                    country['drivingSide'] = side;
                }
            });

            //GET FLAG IMAGE LINK
            let flagImg = $('td.infobox-image div div:first-child img', html);
            country.flag = "https:" + flagImg.attr('src');

            //Check values for each property OR check completion
            console.log(country.countryName, '--->', 'done');
        }
        
    } catch (error) {
        console.log(error);
    }
}

function writeDataIntoFile() {
    fs.writeFile('countries-data.js', `exports.countriesData = ` + JSON.stringify(countries, null, 2),
    (err) => {
        if (err) console.log(err);
        else console.log('File Creation Successful!');
    });
}