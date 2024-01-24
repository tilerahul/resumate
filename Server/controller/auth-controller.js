const home = (req, res) =>{
    try {
        res.status(200).send("<h1>This is the home</h1>");
    } catch (error) {
        res.status(404).json({msg:"Page not found"});
    }
}
const login = (req, res) =>{
    try {
        res.status(200).send("<h1>This is the home</h1>");
    } catch (error) {
        res.status(404).json({msg:"Page not found"});
    }
}
const register = (req, res) =>{
    try {
        res.status(200).send("<h1>This is the home</h1>");
    } catch (error) {
        res.status(404).json({msg:"Page not found"});
    }
}

module.exports = {home, register, login};