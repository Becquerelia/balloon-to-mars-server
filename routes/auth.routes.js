//! VARIABLES & REQUIRES:

const router = require("express").Router();
const UserModel = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//! ROUTES:

//ROUTE FOR SIGNUP:
router.post("/signup", async (req, res, next)=>{
    const {username, email, password, city, country} = req.body
    //CHECK IF ALL FIELDS ARE FILL:
    if (!username || !email || !password || !city || !country) {
        res.status(400).json({errorMessage: "Please fill all fields to continue"})
        return;
    }
    //CHECK IF PASSWORD MEETS THE REQUIREMENTS:
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    if (!passwordRegex.test(password)){
        res.status(400).json({errorMessage: "Your password must contain at least a number, a special character, upper and lower cases and 8-15 characters"})
        return;        
    }
    
    try{
        //CHECK IF EMAIL ALREADY EXISTS:
        const foundUserEmail = await UserModel.findOne({email});
        if (foundUserEmail) {
            res.status(400).json({errorMessage: "This email is already registered"});
            return;
        }
        //CHECK IF USERNAME ALREADY EXISTS:
        const foundUserName = await UserModel.findOne({username});
        if (foundUserName) {
            res.status(400).json({errorMessage: "This username is already in use. Please, choose another one."});
            return;
        }
        //ENCRYPT PASSWORD:
        const salt = await bcrypt.genSalt(11);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        //CREATE USER:
        await UserModel.create({
            username,
            email,
            password: hashedPassword,
            city,
            country            
        })

        res.status(201).json()
    }
    catch (err){
        next(err)
    }
})

//ROUTE FOR LOGIN:
router.post("/login", async (req, res, next)=>{
    const {email, password} = req.body

    //CHECK IF ALL FIELDS ARE FILL:
    if (!email || !password) {
        res.status(400).json({errorMessage: "Please fill all fields to continue"})
        return;
    }
    
    try{
        //CHECK IF THE EMAIL IS ALREADY REGISTERED AND FIND USER:
        const foundUser = await UserModel.findOne({email});
        if (!foundUser){
            res.status(401).json({errorMessage: "There's no user registered with that email address"});
            return;
        }
        //CHECK CORRECT PASSWORD:
        const correctPassword = await bcrypt.compare(password, foundUser.password);
        if (!correctPassword) {
            res.status(401).json({errorMessage: "Password incorrect"});
            return;            
        }

        //CREATE AND SEND TOKKEN:

        const payload = {
            _id: foundUser._id,
            email: foundUser.email,
            username: foundUser.username,
            role: foundUser.role 
        }

        const authToken = jwt.sign(
            payload,
            process.env.TOKEN_SECRET,
            {algorithm: "HS256", expiresIn: "3h"}
        )

        res.status(200).json({authToken})
    }
    catch(err){
        next(err)
    }
})

module.exports = router;