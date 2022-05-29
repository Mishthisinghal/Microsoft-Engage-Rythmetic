# Rythmetic - Face Recognition Web Application
## Submission for Microsoft Engage 2022 🌟

<p align="center">
<a href="https://unite-apurva.herokuapp.com/landing">
<img src="public/img/logoo.png" alt="Unite-logo"/>
</a><br>
  <a href="https://microsoft-engage-rythmetic.herokuapp.com/">View Deployed Website</a>
    ·
    <a href="https://drive.google.com/file/d/1Ej3sAk3JounjvKlgbeRqhuj-sNMTqByp/view">View Demo Video</a>
    ·
    <a href="https://www.figma.com/file/6ms4jHHEhMiatrPmth9TBP/Untitled?node-id=0%3A1">View Design Document</a>
</p>

## Features and Interfaces

1. Register Page
   - Seamless registration page which asks for basic details of the user and registers new users using face detection and generates a unique passcode automatically
   - <img width="857" alt="register" src="https://user-images.githubusercontent.com/79502029/170853399-c15aa64b-8e6f-4ddc-926b-3d982395efbc.png">

    - when no face is detected, it will display an error message
    - <img width="855" alt="noface" src="https://user-images.githubusercontent.com/79502029/170853531-da5d3113-cdd1-4464-957d-f700fdecb11d.png">

     - When multiple faces are detected, it will display an error message
     - <img width="855" alt="multipleface" src="https://user-images.githubusercontent.com/79502029/170853547-c4d1555d-5e98-4e4a-a923-36953503d453.png">

      - When a single face is detected clearly, it will allow the user to sign up successfully
      - <img width="850" alt="oneface" src="https://user-images.githubusercontent.com/79502029/170853597-d05b57ec-670c-45df-b588-bd67d913bf68.png">
      
2. Login Page
   - When the user clicks the sign up button, he/she will be directed to the login page where the user needs to enter the registered email id
   - <img width="852" alt="login" src="https://user-images.githubusercontent.com/79502029/170853760-5f2e2583-1c5d-47c6-8f67-f031afebe6d7.png">

    - If the user tries to login by entering an unregisterted email id, it will display an error message
    - <img width="857" alt="invalidemail" src="https://user-images.githubusercontent.com/79502029/170853807-bf4cbd96-bd8d-4e19-a2e8-956914c5d32e.png">

3. Verification Page
   - When the user enters the registered email id and clicks on the Next button, he/she will be directed to the verification page.
   - As soon as the user is verified, the username will be displayed on the screen and will be allowed to login successfully.
   - <img width="852" alt="verify" src="https://user-images.githubusercontent.com/79502029/170853918-6b3c28bf-7ad6-4618-b039-4b98761c78c0.png">

    - If the user is not verified, it will display 'unknown' and user will not be allowed to login.
    - <img width="856" alt="unknownverify" src="https://user-images.githubusercontent.com/79502029/170853941-bb5059f1-2aff-4341-82ff-d1aca2fc605f.png">

4. Home Page
   - As soon as the user login successfully, it will direct to the home page.
   - Here the user can play different songs, move to the next or the previous track and increase or decrease the volume as well.
   - <img width="853" alt="home" src="https://user-images.githubusercontent.com/79502029/170854119-2b0ede17-9816-437b-94ec-f09ce7031415.png">

   - The navbar has a search option also. As soon as the user clicks the search button the songs will get filtered according to the search value.
   - <img width="856" alt="search" src="https://user-images.githubusercontent.com/79502029/170854124-6dc2e8cf-7af1-4b0e-a4b5-b45de3cf0310.png">

5. Mood Detection 
   - The navbar of the homepage has a 'My Mood' option which directs the user to mood detection page where the user needs to capture their image to detect the mood.
   - <img width="856" alt="mood" src="https://user-images.githubusercontent.com/79502029/170854175-b15813d0-467c-4db4-b50a-2920e141993c.png">

    - As soon as the mood is detected, it will be displayed on the screen and user will be allowed to proceed.
    - <img width="852" alt="moodfound" src="https://user-images.githubusercontent.com/79502029/170854196-5fec92fd-0aa5-41b3-b6fb-0738c21a8123.png">

     - When the user clicks on the 'Apply' button, songs get filtered according to the detected mood.
     - <img width="856" alt="filtered" src="https://user-images.githubusercontent.com/79502029/170854217-bf983476-76b5-431f-b802-51773ae90923.png">

6. Ecommerce Page
   - The navbar of the homepage has a 'Shop Now' option which directs the user to a basic ecommerce webpage which has music related products.
   - <img width="852" alt="ecomm" src="https://user-images.githubusercontent.com/79502029/170854588-29534ab1-b141-42ca-8ecf-3649c9ba43fa.png">

   - The user can add the products to the cart as well as remove the products from the cart. The cart can be viewed by clicking on the bag icon in the navbar of the ecommerce page.   
    - The quantity can be increased or decreased and the total amount gets updated automatically as the products are removed or the quantity gets changed.
    - <img width="854" alt="cart" src="https://user-images.githubusercontent.com/79502029/170854600-94b464d4-d6b0-4bd4-9cf5-0dd231a43698.png">

7. Logout
   - The navbar of the homepage has a logout icon which directs the user back to the login page.

Also the website has a favicon icon to enhance its UI and increase its authenticity.
<img width="206" alt="faviconicon" src="https://user-images.githubusercontent.com/79502029/170854581-e7af8f73-e14e-4945-8d96-245f536414a1.png">

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

### Prerequisites

Have NodeJS and MongoDB installed on your machine.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Mishthisinghal/Microsoft-Engage-Rythmetic.git
   ```
2. ```sh
   cd ./Microsoft-Engage-Rythmetic
   ```
3. Install node dependencies 
   ```sh
   npm install
   ```
4. Create a new .env file in root directory.
5. Gain Mongo connection string from Mongo DB and paste in .env as DATABASE
    ```sh
    DATABASE=mongodb+srv://mongodb_connection_string
    ```
6. Start the server
   ```sh
   npm run start
   ```
7. The app is now running at http://localhost:3000/

## Useful Links

- [Deployed Website](https://microsoft-engage-rythmetic.herokuapp.com/)
- [Demo Video](https://drive.google.com/file/d/1Ej3sAk3JounjvKlgbeRqhuj-sNMTqByp/view)
- [Design Document](https://www.figma.com/file/6ms4jHHEhMiatrPmth9TBP/Untitled?node-id=0%3A1)

## Need help?

Feel free to contact me on [LinkedIn](https://www.linkedin.com/in/mishthi-singhal-97a688201/) 

[![Instagram](https://img.shields.io/badge/Instagram-follow-purple.svg?logo=instagram&logoColor=white)](https://www.instagram.com/mishthisinghal/) [![Twitter](https://img.shields.io/badge/Twitter-follow-blue.svg?logo=twitter&logoColor=white)](https://twitter.com/mishthi_singhal)

---------
