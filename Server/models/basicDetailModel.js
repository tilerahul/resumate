const mongoose = require("mongoose");
const User = require('./userModel');

const basicDetailSchema = new mongoose.Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User',
    },
    lastName : {
        type : String,
        require : true,
    },
    
    email : {
        type : String,
        require : true,
    },
    phone : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
    isAdmin : {
        type : Boolean,
        default : false,
    },
    joinedAt : {
        type : Date,
        default : new Date.now(),
    }
})

const BasicDetails = new mongoose.model("BasicDetails", basicDetailSchema);
module.exports = BasicDetails;