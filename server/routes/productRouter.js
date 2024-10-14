const express = require('express');
const model = require('../models/productModel');
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


router.post('/createProduct',auth,upload.single("product_image"),async (req,res)=>{
        
    const options = Object.keys(req.body);
    const optionMain = ["name", "user_id", "product_image", "price", "description"];
    const isMatch = options.every((option) => optionMain.includes(option) )

    if(!isMatch){
       return res.status(400).send({error:'You Provide Invalid Input'})
    }

    const roleNames = req.roles.map(role => role.roleName);
    const containsMerchant = roleNames.includes('merchant');
    if(!containsMerchant){
        return res.status(400).send({error:'Permission Denied'})
    }

    try{
        const public_id = mongoose.Types.ObjectId();
        const imageBuffer = req.file.buffer;

        const image = await new Promise((resolve) => {
            cloudinary.uploader.upload_stream({ 
                resource_type: 'image',
                width: 500,
                height: 500,
                crop: 'fill',
                overwrite: true,
                public_id:public_id,
                folder:`merchandise/productImage/${req.user.username}/`
                },(error,result)=>{
                    if (error) {
                        return res.status(500).json({ error: 'Failed to upload image to Cloudinary' });
                    }
                    return resolve({public_id:result.public_id,secure_url:result.secure_url})
                }).end(imageBuffer)
        })
            const product = await new model({...req.body,product_image:{public_id:image.public_id,url:image.secure_url}})
            await product.save()
            res.status(201).send(product)
        
    }
    catch(e){
        res.status(400).send({error:e.message})
    }

})

router.get('/getProduct/:id',auth,async (req,res)=>{
    try{
        const product = await model.findById(req.params.id)
        res.status(200).send(product)
    }
    catch(e){
        res.status(400).send(e)
    }
    
})

router.patch('/updateProduct',auth,async (req,res)=>{
    
    const options = Object.keys(req.body);
    const optionMain = ["name", "user_id", "product_image", "price", "description"];
    const isMatch = options.every((option) => optionMain.includes(option) )


    if(!isMatch){
       return res.status(400).send({error:'You Provide Invalid Input'})
    }  
    try{

    }
    catch(e){
        res.status(400).send(e)
    }

})

router.delete('/deleteProduct',auth,async (req,res)=>{
    try{

    }
    catch(e){
        res.status(400).send(e)
    }
})

module.exports = router;