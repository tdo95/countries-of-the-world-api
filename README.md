<!-- This readme was adapated from a template created by Othneil Drew on Github. If you'd like to use this template visit: https://github.com/othneildrew/Best-README-Template -->
<a name="readme-top"></a>


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Issues][issues-shield]][issues-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->
<!-- [![MIT License][license-shield]][license-url] -->
<!-- [![LinkedIn][linkedin-shield]][linkedin-url] -->
<!-- [![Forks][forks-shield]][forks-url] -->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/tdo95/discolist">
    <img src="public/world-g37775118d_640.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Countries of the World API</h3>

  <p align="center">
    Get social and geographical information about all the sovereign countries in the world!
    <br />
    <a href="https://github.com/tdo95/countries-of-the-world-api"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://countries-of-the-world.cyclic.app/">View Demo</a>
    ·
    <a href="https://github.com/tdo95/countries-of-the-world-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/tdo95/countries-of-the-world-api/issues">Request Feature</a>
  </p>
</div>
<br />


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
      <li><a href="#features">Features</a></li>
        <li><a href="#how-its-made">How Its Made</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <!-- <li><a href="#prerequisites">Prerequisites</a></li> -->
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
      </ul>
    </li>
    <li>
        <a href="#optimizations">Optimizations</a>
        <ul>
         <li><a href="#future-improvements">Future Improvements</a></li>
         <li><a href="#lessons-learned">Lessons Learned</a></li>
        </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

[![Countries of the World Demo][product-screenshot]](https://countries-of-the-world.cyclic.app/)

Ever wondered what side of the street people drive on in Brazil? Now you can get that interesting fact along with may others using Countries of the World API. 

Countries of the World is an API that serves social and geographical information about all of the countries in the world.

### About The API

All relevant information about the API such as countries available, endpints, and api properties can be found in the [documentation](https://countries-of-the-world.cyclic.app/).

Some countires may not have all property data. Unavailable data properties are represented by an empty value. e.g. empty string values are `''`, empty array values are `[]`.

### Features
- **Two Endpoints:** country look up, entire api collection
- **Ten data properties:** `capital`, `wikiLink`, `flag`, `gini`, `gdp`, `population`, `drivingSide`, `currency`, `countryName`, `officialLanguages`
- **195 Countries**

### How Its Made

Data contained in the Countries of the World API was scraped from [Wikipedia](https://en.wikipedia.org/wiki/List_of_sovereign_states) using the Axios and Cheerio modules. Data retained is stored in a file on server and used to serve information via the API endpoints. The API is built with the following technologies:

 [![HTML][HTML5]][HTML5-url]
 [![CSS][CSS3]][CSS3-url]
 [![JavaScript][Javascript]][Javascript-url]
 [![Node][Node.js]][Node.js-url]
 [![Express][Express.js]][Express.js-url]
 [![Axios][Axios]][Axios-url]
 [![Cheerio][Cheerio]][Cheerio-url]
<br /><br />


<!-- GETTING STARTED -->
## Getting Started

If you would like to use the Countries of the World API, refer to the [documentation](https://countries-of-the-world.cyclic.app/) to get started. 

To get a local copy of the API up and running follow these simple example steps.

<!-- ### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ``` -->

### Installation

_Follow the steps below to set up the API locally._

1. Clone the repo
   ```sh
   git clone https://github.com/tdo95/countries-of-the-world-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. **Optional:** Uncomment the `scrapeData` function on line 50 within the `server.js` to re- build the database file used within the API
   ```js
   // RUN FUNCTION TO SCAPE WIKIPEDIA FOR COUNTRIES DATA
   
   scrapeData();
   ```

### Usage

1. To start the API server, run the following command
   ```sh
    npm run start  
   ```
   Alternatively, you can run with nodemon
   ```sh
    npm run dev  
   ```


<!-- OPTIMIZATIONS -->
## Optimizations

### Future Improvements

- Add ISO and sign to currency property
- Incoorporate pre-existing data in the [world-countries](https://www.npmjs.com/package/world-countries) database


### Lessons Learned

- How to use logic to traverse webpages with inconsistent document structures
- Remove accent marks from text using the `normalize()` and `replace()` methods
- Scrapping across sites without standardized document structures is difficult and ineffienct, should look into how to approach this effectively


<!-- ROADMAP -->
## Roadmap

- [x] Build scraping function for contries database
- [x] build out logic for each endpoint
- [ ] Refractor fillInData() function into smaller parts for readability
- [ ] Clean up inputs for GDP and Population

<!-- See the [open issues](https://github.com/tdo95/discolist/issues) for a list of proposed features (and known issues). -->


<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->


<!-- CONTACT -->
## Contact

### **Tee O.**
Portfolio: [www.github.com/tdo95](www.github.com/tdo95)
[![Email][email-shield]][email-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
<!-- ## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- Ready-Made Badges: https://github.com/Ileriayo/markdown-badges -->
[contributors-shield]: https://img.shields.io/github/contributors/tdo95/countries-of-the-world-api.svg?style=for-the-badge
[contributors-url]: https://github.com/tdo95/countries-of-the-world-api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tdo95/countries-of-the-world-api.svg?style=for-the-badge
[forks-url]: https://github.com/tdo95/countries-of-the-world-api/network/members
[stars-shield]: https://img.shields.io/github/stars/tdo95/countries-of-the-world-api.svg?style=for-the-badge
[stars-url]: https://github.com/tdo95/countries-of-the-world-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/tdo95/countries-of-the-world-api.svg?style=for-the-badge
[issues-url]: https://github.com/tdo95/countries-of-the-world-api/issues
[license-shield]: https://img.shields.io/github/license/tdo95/countries-of-the-world-api.svg?style=for-the-badge
[license-url]: https://github.com/tdo95/countries-of-the-world-api/blob/master/LICENSE.txt

<!-- SOCIALS BADGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/tee-o
[twitter-shield]: https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white
[twitter-url]: https://twitter.com/teeintech
[email-shield]: https://img.shields.io/badge/tdopress@gmail.com-000000?style=for-the-badge&logo=gmail&logoColor=white
[email-url]: mailto:tdopress@gmail.com

<!-- DEMO IMAGE -->
[product-screenshot]: /countries-demo.gif

<!-- LIBRARIES BADGES -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[HTML5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5
[JavaScript]: https://img.shields.io/badge/javascript-090909.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[Javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[CSS3]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[Node.js]: https://img.shields.io/badge/node.js-333333?style=for-the-badge&logo=node.js&logoColor=44883e
[Node.js-url]: https://nodejs.org/en/
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express.js-url]: https://expressjs.com/
[Axios]: https://img.shields.io/badge/axios-7c00e2.svg?style=for-the-badge&logo=axios&logoColor=white
[Axios-url]: https://axios-http.com/docs/intro
[Cheerio]: https://img.shields.io/badge/cheerio-000000.svg?style=for-the-badge&logo=cheerio&logoColor=white
[Cheerio-url]: https://cheerio.js.org/

<!-- EXTRAS -->
[Spotify-api]: https://img.shields.io/badge/Spotify%20API-000000?style=for-the-badge&logo=spotify&logoColor=1DB954
[Spotify-url]: https://developer.spotify.com/documentation/web-api/quick-start/ 

