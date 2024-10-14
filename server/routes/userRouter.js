const express = require('express');
const model = require('../models/userModel');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const mongoose = require('mongoose');
const cloudinary = require('../middleware/cloudinary');  
const multer = require('multer');
const router = express.Router();

const Storage = multer.memoryStorage();
const upload = multer({ 
    limits:{
        fileSize:1000000
    },
    Storage:Storage,
    fileFilter(req,file,callback){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            callback(new Error('please select an image'))
        }
        callback(undefined, true)
    }
 });


router.get('/getAuthStatus',async (req,res)=>{
    try{
        const token = req.header('Authorization')?req.header('Authorization').replace('Bearer ',''):null;
        if(!token){
          return res.status(200).send(false)
        }
        const decode = jwt.verify(token,'merchandise')
        const user = await model.findOne({_id:decode._id,'tokens.token':token})
        if(!user){
          return res.status(200).send(false)
        }
       res.status(200).send(true)

    }
    catch(e){
        res.status(400).send({error:e.message})
    }
})

router.post('/signup',async (req,res)=>{
    
    const options = Object.keys(req.body);
    const optionMain = ["username", "name", "email", "password"];
    const isMatch = options.every((option) => optionMain.includes(option) )


    if(!isMatch){
       return res.status(400).send({error:'You Provide Invalid Input'})
    }
    try{
        const user = await new model(req.body)
        const token = await user.generateAuthToken()
        await user.save()
        res.status(201).send({user,token})

    }
    catch(e){
        if(e.code == 11000){
           return res.status(400).send({error:'User Already Exists!!'})            
        }
        res.status(400).send({error:e.message})
    }
})

router.post('/signin',async (req,res)=>{
    try{

    const user = await model.findByCredentials(req.body.email,req.body.password)
    const token = await user.generateAuthToken()
    res.status(200).send({user,token})

    }
    catch(e){
        res.status(400).send({error:e.message})
    }
})

router.get('/getUser',auth,async (req,res)=>{
    res.status(200).send({user:req.user,token:req.token})
})

router.post('/addRole',auth,async (req,res)=>{
    if(req.body.roleName == null){
        return res.status(400).send({error:"Please Provide a Role"})
    }
    try{
        const updatedUser = await req.user.addUserRole(req.body.roleName)
        await updatedUser.save()
        res.status(201).send(updatedUser)
    }
    catch(e){
        res.status(400).send({error:e.message})
    }
})

router.post('/removeRole',auth,async (req,res)=>{
    if(req.body.roleName == null){
        return res.status(400).send({error:"Please Provide a Role"})
    }
    if(req.body.roleName == 'customer'){
        return res.status(400).send({error:"You Can not Remove this role"})
    }
    try{
        req.user.roles = req.user.roles.filter((role) => {
            return role.roleName != req.body.roleName
        })
        await req.user.save()
        res.send(req.user)        
    }
    catch(e){
        res.status(400).send({error:e.message})
    }
})

router.patch('/updateUser',auth,async (req,res)=>{
    
    const options = Object.keys(req.body);
    const optionMain = ["username", "name", "email", "password", "tokens", "avatar"];
    const isMatch = options.every((option) => optionMain.includes(option) )


    if(!isMatch){
       return res.status(400).send({error:'You Provide Invalid Input'})
    }
    try{ 
            options.every((option)=> req.user[option] = req.body[option] )
            await req.user.save()
            res.status(201).send({user:req.user,token:req.token})
    }catch(e){
            res.status(400).send({error:e.message})
    }
})

router.patch('/updateUserImage',auth,upload.single('avatar'),async (req,res)=>{
    try{
        const imageBuffer = req.file.buffer;

        const image = await new Promise((resolve) => {
            cloudinary.uploader.upload_stream({ 
                resource_type: 'image',
                width: 200,
                height: 200,
                crop: 'fill',
                overwrite: true,
                public_id:req.user._id,
                folder:`merchandise/userImage/${req.user.username}/`
                },(error,result)=>{
                    if (error) {
                        return res.status(500).json({ error: 'Failed to upload image to Cloudinary' });
                    }
                    return resolve({public_id:result.public_id,secure_url:result.secure_url})
                }).end(imageBuffer)
        })
        req.user.avatar = {public_id:image.public_id,url:image.secure_url}
        await req.user.save()
        res.status(201).send(req.user)
    }
    catch(e){
        res.status(400).send({error:e.message})
    }
})

router.patch('/removeUserImage',auth,async (req,res)=>{
    try{
        req.user.avatar = {}
        await req.user.save()
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.post('/logout',auth,async (req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.send()
    }
    catch(e){
        res.status(500).send({error:e.message})
    }
})

router.post('/logoutAll',auth,async (req,res)=>{
    try{
        req.user.tokens =[]
        await req.user.save()
        res.send()

    }
    catch(e){
        res.send(500).send({error:e.message})
    }

})

router.delete('/deleteUser',auth,async (req,res)=>{
    
    try{
     await req.user.remove()
     res.send(req.user)
    }
    catch(e){
        res.status(500).send({error:e.message})
    }
       
 })
 
module.exports = router