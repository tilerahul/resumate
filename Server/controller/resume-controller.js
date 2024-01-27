const Resume = require('../models/resumeModel');

const resumeController = (req, res) =>{
    try {
        
    } catch (error) {
        res.status(404).json({
            success : false,
            messsage : "Internal Server Error"
        })
    }
}

module.exports = resumeController;