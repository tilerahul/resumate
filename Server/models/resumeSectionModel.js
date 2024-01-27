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

const educationSchema = new mongoose.Schema({
    college : {type:String, require:true},
    degree : {type:String, require:true},
    completionDate : {type:Date},
    CGPA : {type:String},
    description : {type:String},
});

const experienceSchema = new mongoose.Schema({
    company : {type:String, require:true},
    jobTitle : {type:String, require:true},
    startDate:{type:Date},
    completionDate : {type:Date},
    description : {type:String},
});

const skillSchema = new mongoose.Schema({
    name : {type:String, require:true}
});

const projectSchema = new mongoose.Schema({
    name : {type:String, require:true},
    startDate:{type:Date},
    completionDate : {type:Date},
    description : {type:String, require:true},
});

const achievementSchema = new mongoose.Schema({
    title : {type:String, require:true},
    description : {type:String},
});

const certificationSchema = new mongoose.Schema({
    title : {type:String, require:true},
    description : {type:String},
});

const langaugeSchema = new mongoose.Schema({
    name : {type:String, require:true},
});

const BasicDetails = new mongoose.model("BasicDetails", basicDetailSchema);
const Education = new mongoose.model('Education', educationSchema);
const Experience = new mongoose.model('Experience', experienceSchema);
const Skill = new mongoose.model('Skill', skillSchema);
const Project = new mongoose.model('Project', projectSchema);
const Achievement = new mongoose.model('Achievement', achievementSchema);
const Certificate = new mongoose.model('Certificate', certificationSchema);
const Langauge = new mongoose.model('Langauge', langaugeSchema);

module.exports = {BasicDetails, Education, Experience, Skill, Project, Achievement, Certificate, Langauge};