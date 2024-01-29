const mongoose = require("mongoose");

const basicDetailSchema = new mongoose.Schema({
    address : {type : String},
    Objective : {type : String, require:true},
    website : [{
        name :{
            type : String,
            require:true
        },
        url : {
            type : String, 
            require:true
        }
    }], 
})

module.exports = new mongoose.model('BasicDetails', basicDetailSchema);