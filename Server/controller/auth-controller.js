const User = require("../models/userModel");

const home = (req, res) =>{
    try {
        res.status(200).send("<h1>This is the home</h1>");
    } catch (error) {
        res.status(404).json({msg:"Page not found"});
    }
}
const login = async (req, res) =>{
    try {
        const {email, password} = req.body;

        const userExist = await User.findOne({email});
        if(!userExist){
            res.status(404).json({
                success : false,
                message : 'User not found or please register first',
            })
        }
        if(password !== userExist.password){
            res.status(404).json({
                success : false,
                message : 'Invalid Credentials',
            })
        }
        res.status(200).json({
            success : true,
            message : 'Login Successful'
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
            res.status(400).json({
                success : false,
                message : 'Email already exist',
            })
        }
        const userCreated = await User.create({firstName, lastName, email, phone, password});

        res.status(404).json({
            success : true,
            message : 'Registration Successful',
            userId : userCreated._id.toString(),
        })
    } catch (error) {
        res.status(404).json({message:"Page not found"});
    }
}

module.exports = {home, register, login};