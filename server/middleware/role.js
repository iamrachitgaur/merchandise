const jwt = require('jsonwebtoken');
const model = require('../models/userModel')
const role = async (req,res,next)=>{

    try{
        const token = req.header('Authorization').replace('Bearer ','');
        if(!role){
           return req.status(403)
        }
        const decode = jwt.verify(token,'merchandise')
        const user = await model.findOne({userId:decode._id})
        
        if(!user){
            throw new Error()
        }
        req.roles = user.roles
        next()
    }
    catch(e){
        res.status(400).send('role is Invalid')
    }

}

module.exports = role