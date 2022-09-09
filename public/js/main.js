
let searchbox = document.querySelector('input');
let searchResults = document.querySelector('.searchResults');

searchbox.addEventListener('input', async (e) => {
    console.log(e.target.value)
    let text = e.target.value;
    let res = await fetch(`https://countries-of-the-world-api-production.up.railway.app/api/${text}`);
    let data = await res.json()
    console.log(data)

    let cardsHtml = data.map(obj => `<div class="countryCard">
                                        <img src="${obj.flag}" alt="flag">
                                        <p class="countryName">${obj.countryName}</p>
                                        <p class="keyValue"><span>Capital: </span>${obj.capital}</p>
                                        <p class="keyValue"><span>GDP: </span>${obj.gdp.pppTotal}</p>
                                        <p class="keyValue"><span>Driving Side: </span>${obj.drivingSide}</p>
                                        <a href="${obj.wikiLink}">${obj.wikiLink}</a></div>`)
                                        .join('');
    
    searchResults.innerHTML = cardsHtml;

})