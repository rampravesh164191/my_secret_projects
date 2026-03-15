
const requiredBookFields = (req, res, next)=>{
    const {title, author} = req.body;
    if(!title || !author){
        return res.status(400).json({error: "Incomplete data"})
    }
    next();
}

module.exports = {requiredBookFields}