const basicDetailController = (req, res) =>{
    try {
        
    } catch (error) {
        res.status(404).json({
            success : false,
            messsage : "Internal Server Error"
        })
    }
}


const educationController = (req, res) =>{
    try {
        const {college, degree, completionDate, CGPA, description} = req.body;

        if(!college || !degree){
            return res.status(404).json({
                success : false,
                messsage : "Please fill details properly !!"
            })
        }

        res.status(200).json({
            success : true,
            messsage : "Education details added successfully"
        })
    } catch (error) {
        res.status(404).json({
            success : false,
            messsage : "Internal Server Error"
        })
    }
}


const experienceController = (req, res) =>{
    try {
        const {company, jobTitle, startDate, completionDate, description} = req.body;

        if(!company || !jobTitle){
            return res.status(404).json({
                success : false,
                messsage : "Please fill details properly !!"
            })
        }

        res.status(200).json({
            success : true,
            messsage : "Experience details added successfully"
        })
    } catch (error) {
        res.status(404).json({
            success : false,
            messsage : "Internal Server Error"
        })
    }
}


const skillController = (req, res) =>{
    try {
        const {name} = req.body;

        if(!name){
            return res.status(404).json({
                success : false,
                messsage : "Please fill details properly !!"
            })
        }

        res.status(200).json({
            success : true,
            messsage : "skill added save successfully"
        })
    } catch (error) {
        res.status(404).json({
            success : false,
            messsage : "Internal Server Error"
        })
    }
}


const projectController = (req, res) =>{
    try {
        const {name, startDate, completionDate, description} = req.body;

        if(!name || !description){
            return res.status(404).json({
                success : false,
                messsage : "Please fill details properly !!"
            })
        }

        res.status(200).json({
            success : true,
            messsage : "Project details added successfully"
        })
    } catch (error) {
        res.status(404).json({
            success : false,
            messsage : "Internal Server Error"
        })
    }
}


const achievementController = (req, res) =>{
    try {
        const {title, description} = req.body;

        if(!title){
            return res.status(404).json({
                success : false,
                messsage : "Please fill details properly !!"
            })
        }

        res.status(200).json({
            success : true,
            messsage : "Achievement details added successfully"
        })
    } catch (error) {
        res.status(404).json({
            success : false,
            messsage : "Internal Server Error"
        })
    }
}


const certificationController = (req, res) =>{
    try {
        const {title, description} = req.body;

        if(!title){
            return res.status(404).json({
                success : false,
                messsage : "Please fill details properly !!"
            })
        }

        res.status(200).json({
            success : true,
            messsage : "Certificate details added successfully"
        })
    } catch (error) {
        res.status(404).json({
            success : false,
            messsage : "Internal Server Error"
        })
    }
}


const langaugeController = (req, res) =>{
    try {
        const {name} = req.body;

        if(!name){
            return res.status(404).json({
                success : false,
                messsage : "Please fill details properly !!"
            })
        }

        res.status(200).json({
            success : true,
            messsage : "Languages added successfully"
        })
    } catch (error) {
        res.status(404).json({
            success : false,
            messsage : "Internal Server Error"
        })
    }
}

module.exports = {basicDetailController, educationController, experienceController, 
    skillController, projectController, achievementController, certificationController, 
    langaugeController
};
