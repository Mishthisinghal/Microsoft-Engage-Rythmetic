const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const { body, validationResult } = require("express-validator");
const { Stream } = require('stream');
require('dotenv').config();
// const store = require('store2');
// var looksSame = require('looks-same');
// var img;
// var name;

const mongouri = process.env.DATABASE;
mongoose.connect(mongouri, { useNewUrlParser: "true", })
mongoose.connection.on("error", err => {
    console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
})

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: '50mb',
    extended: true
}));
const port = process.env.PORT || 3000;


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required: true
    },

})

const Register = new mongoose.model('Register', userSchema);
const public_path = path.join(__dirname, 'public');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(public_path));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('register')
})

// Register page
app.get('/register', (req, res) => {
    res.render('register')
})
app.post('/register', async (req, res) => {
    try {
        if (req.body.name && req.body.email && req.body.password) {
            email = req.body.email;
            let usermail = await Register.findOne({ email: email });

            if (usermail) {
                return res.render('register', { msg: 'Error: Email already registered.Please login' })
            } else if (req.body.password === "zero") {
                return res.render('register', { msg: 'Error: No Face Detected. Please Try Again' })
            } else if (req.body.password === "many") {
                return res.render('register', { msg: 'Error: Mutiple Faces Detected. Please Try Again' })
            }
            else {

                const userinfo = new Register({
                    name: req.body.name,
                    email: req.body.email,
                    img: req.body.password
                })

                const registered = userinfo.save();
                res.status(200).render('login');

            }

        }
        else {
            res.render('register', { msg: 'Error: Please capture your image.' })
        }

    } catch (error) {
        res.status(400).send(error);
    }

})

// Login Page
app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login',async (req,res)=>{
    try{
        if(req.body.email){
            const email = req.body.email;
            const usermail = await Register.findOne({ email: email }) 

            if(usermail){
                res.status(200).render('verify',{username:usermail.name,imgurl:usermail.img});

            }else{
                res.render('login',{ msg: 'Error: Invalid Email' }) 
            }
        }
        else{
            res.render('login',{ msg: 'Please fill in all the details.' })
        }

    }
    catch (error) {

        res.status(400).send(error);
    }
})

// Verification Page
app.get('/verify', (req, res) => {
    res.render('verify')
})

app.post('/verify', async (req, res) => {
    try {

        if (req.body.password) {
            if(req.body.password==="zero"){
                res.render('verify', { msg: 'Error: No Face Detected.' }) 
            }else if(req.body.password==="many"){
                res.render('verify', { msg: 'Error: Multiple Faces Detected.' })  
            }else if(req.body.password==="unknown"){
                res.render('verify', { msg: 'Error: Face Not Registered. Try Again.' })
            }else if(req.body.password==="abc"){
                res.render('verify',{msg: 'Error: Wait for complete verification.'})
            }else{
                res.render('index');
            } 
           
        } else {
            res.render('verify', { msg: 'Error: Please verify your account first.' })
        }
    } catch (error) {

        res.status(400).send(error);
    }

})

// Mood detection Page
app.get('/mood', (req, res) => {
    res.render('mood')
})

app.post('/mood', (req, res) => {
    const mood=req.body.moodtype;
    res.render('filter',{moodtype:mood});
})

// Ecommerce Page
app.get('/ecomm', (req, res) => {
    res.render('ecomm')
})

// Index Page
app.get('/index', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`server listening on ${port}`);
});

