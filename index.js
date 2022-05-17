const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const { body, validationResult } = require("express-validator");
const { Stream } = require('stream');
const store = require('store2');
var looksSame = require('looks-same');
var img;
var name;
// var Rembrandt = require('rembrandt/build/browser')

const url = 'mongodb://127.0.0.1:27017/facerec'
mongoose.connect(url, { useNewUrlParser: "true", })
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
    res.render('initial')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/initial', (req, res) => {
    res.render('initial')
})

app.post('/initial',async (req,res)=>{
    try{
        if(req.body.email){
            const email = req.body.email;
            const usermail = await Register.findOne({ email: email }) 

            if(usermail){
                res.status(200).render('login',{username:usermail.name,imgurl:usermail.img});

            }else{
                res.render('initial',{ msg: 'Invalid Email' }) 
            }
        }
        else{
            res.render('initial',{ msg: 'Please fill in all the details.' })
        }

    }
    catch (error) {

        res.status(400).send(error);
    }
})
app.post('/login', async (req, res) => {
    console.log("made post request");
    try {
        console.log("inside try block");

        if (req.body.password) {
            if(req.body.password==="zero"){
                res.render('login', { msg: 'No Face Detected' }) 
            }else if(req.body.password==="many"){
                res.render('login', { msg: 'Multiple Faces Detected' })  
            }else if(req.body.password==="unknown"){
                res.render('login', { msg: 'Face Not Registered. Try Again' })
            }else if(req.body.password==="abc"){
                res.render('login',{msg: 'Wait for complete detection'})
            }else{
                res.render('index');
            }
             console.log(req.body.password);   
           
        } else {
            res.render('login', { msg: 'Please capture the image.' })
        }
    } catch (error) {

        res.status(400).send(error);
    }

})

app.get('/register', (req, res) => {
    res.render('register')
})
app.post('/register', async (req, res) => {
    // console.log(imgurl);
    try {
        if (req.body.name && req.body.email && req.body.password) {
            email = req.body.email;
            let usermail = await Register.findOne({ email: email });

            // console.log(req.body.password);
            if (usermail) {
                return res.render('register', { msg: 'Email already registered.Please login' })
            } else if (req.body.password === "zero") {
                return res.render('register', { msg: 'No Face Detected. Please Try Again' })
            } else if (req.body.password === "many") {
                return res.render('register', { msg: 'Mutiple Faces Detected. Please Try Again' })
            }
            else {
                // console.log(req.body.password);
                const userinfo = new Register({
                    name: req.body.name,
                    email: req.body.email,
                    img: req.body.password
                })

                const registered = userinfo.save();
                res.status(200).render('index');

            }

        }
        else {
            res.render('register', { msg: 'Please fill in all the details' })
        }

    } catch (error) {
        res.status(400).send(error);
    }

})


app.get('/index', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`server listening on ${port}`);
});

