const User = require("../models/userModel");
const jwt = require('jsonwebtoken');

const home = (req, res) =>{
    try {
        res.status(200).send("<h1>This is the resumate home</h1>");
    } catch (error) {
        res.status(404).json({msg:"Page not found"});
    }
}
const login = async (req, res) =>{
    try {
        const {email, password} = req.body;

        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(404).json({
                success : false,
                message : 'User not found or please register first',
            })
        }
        if(password !== userExist.password){
            return res.status(404).json({
                success : false,
                message : 'Invalid Credentials',
            })
        }
        const token = await jwt.sign({
            userId : userExist._id.toString(),
            isAdmin : userExist.isAdmin,
        },
        process.env.JWT_SECRET_KEY, {
            expiresIn : '1h'
        })
        return res.status(200).json({
            success : true,
            message : 'Login Successful',
            token 
        })

    } catch (error) {
        res.status(404).json({message:"Page not found"});
    }
}

const register = async (req, res) =>{
    try {
        const {firstName, lastName, email, phone, password} = req.body;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({
                success : false,
                message : 'Email already exist',
            })
        }
        const userCreated = await User.create({firstName, lastName, email, phone, password});

        return res.status(404).json({
            success : true,
            message : 'Registration Successful',
            userId : userCreated._id.toString(),
        })
    } catch (error) {
        res.status(404).json({message:"Page not found"});
    }
}

module.exports = {home, register, login};