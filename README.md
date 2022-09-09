
# Countries of the World API 🌍
Ever wondered what side of the street people drive on in Brazil? Now you can get that interesting fact along with may others using Countries of the World API. 

Countries of the World is an API that serves social and geographical information about all of the countries in the world.

<br>Try it out here: [Live Site](https://countries-of-the-world-api-production.up.railway.app/) ✨
###
![Demo Image Gif](https://github.com/tdo95/countries-of-the-world-api/blob/main/countries-demo-small.gif)

## About the API
All relevant information about the API such as countries available, endpints, and api properties can be found in the [documentation](https://countries-of-the-world-api-production.up.railway.app/#API).

Some countires may not have all property data. Unavailable data properties are represented by an empty value. e.g. empty string values are `''`, empty array values are `[]`.

## How it's made  🏗
**Tech Used:** HTML, CSS, JavaScript, Node, Express, [Axios](https://www.npmjs.com/package/axios), [Cheerio](https://www.npmjs.com/package/cheerio)

Data contained in the Countries of the World API was scraped from [Wikipedia](https://en.wikipedia.org/wiki/List_of_sovereign_states) using the Axios and Cheerio modules. Data retained is stored in a file on server and used to serve information via the API endpoints.

## Features 📱
- Two Enpoints: string match, entire api collection
- Ten data properties: `capital`, `wikiLink`, `flag`, `gini`, `gdp`, `population`, `drivingSide`, `currency`, `countryName`, `officialLanguages`

## Lessons Learned 🎖
- How to use logic to traverse webpages with inconsistent document structures
- Remove accent marks from text using the `normalize()` and `replace()` methods
- Scrapping across sites without standardized document structures is difficult and ineffienct, should look into how to approach this effectively

## Future Improvements 📊
- Add ISO and sign to currency property
- Incoorporate pre-existing data in the [world-countries](https://www.npmjs.com/package/world-countries) database
- refractor `fillInData()` function into smaller parts for readability
- clean up inputs for GDP and Population
