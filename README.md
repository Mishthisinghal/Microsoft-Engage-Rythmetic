# Rythmetic - Face Recognition Web Application
## Submission for Microsoft Engage 2022 🌟

<p align="center">
<a href="https://unite-apurva.herokuapp.com/landing">
<img src="public/img/logoo.png" alt="Unite-logo"/>
</a><br>
  <a href="https://microsoft-engage-rythmetic.herokuapp.com/">View Deployed Website</a>
    ·
    <a href="">View Demo Video</a>
    ·
    <a href="https://www.figma.com/file/6ms4jHHEhMiatrPmth9TBP/Untitled?node-id=0%3A1">View Design Document</a>
</p>

## Features and Interfaces

## Tech stack

<p align="left">
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> </a>
	<a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" /> </a>
	<a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40" /> </a>
	<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /> </a>
	<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /> </a>
	<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" /> </a>
	<a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" /> </a>
<a href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a>  <a href="https://www.figma.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a>
</p>

- Node.js
- Express
- MongoDB
- Handlebars
- Bootstrap
- HTML5
- CSS3
- JavaScript
- Git
- Heroku
- Figma

## Points to remember while testing the app

1. Allow **permissions** for camera and mic
2. In case any **user is not broadcasted** it is probably due to server overload, **REFRESH** the window to solve this. 
3. Make sure the **URL** is starting with https
4. During face recognition, remember that the confidence score of the api is low therefore similar faces may be considered same.

## Getting Started
1. `git clone https://github.com/Apurva-tech/unite.git` 
2. `cd ./unite`
3. Install node dependencies 
   - `npm install`
4. Replace firebase API keys with your configurations
5. Create a `.env` file 
   - Add relevant credentials
   - `cp .env.example .env` 
5. `npm run dev`
6. The app is now running at http://localhost:3030/landing 
