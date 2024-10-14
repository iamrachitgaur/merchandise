const mongoose = require('mongoose');
const collectionName = 'user';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const schema = mongoose.Schema({

    username:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){    
            if(validator.contains(value," ")){
                throw new Error('Username is invalid')
            }
        }
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        min:6
    },
    profileColor:{
        type:String,
        required:true,
        enum: ['#d7ecb1','#e6adeb','#ebc7ad','#c0b5ee'],
       default:'#d7ecb1' 
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }],
    roles: {
        type: [{
          roleName: {
            type: String,
            enum: ['customer', 'merchant'],
            default: 'customer' // Set default value for roleName
          }
        }],
        default: [{ roleName: 'customer' }] // Set default for the array itself
      },
    avatar:{
        public_id:{type:String},
        url:{type:String}
    }
    

},{
    timestamps:true
})

schema.statics.findByCredentials = async function(email,password){

    
    const user = await model.findOne({email})
    if(!user){
        throw new Error('The account you entered does not exist.')
    }

    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw new Error('Invalid credentials. Please try again.')
    }

    return user

    }

schema.methods.addUserRole = async function(addRole){
    const user = this
    user.roles.some((role)=>{
        if(role.roleName == addRole){
            throw new Error('you already have this role!!')
        }
    })
    user.roles = user.roles.concat({roleName:addRole})
    await user.save()
    return user

}

schema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id.toString()},process.env.JWT_SECRET)
    if(user.tokens.length >= 4){
        delete user.tokens[0]
     }
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

schema.pre('save',async function(next){
    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
        var color = ['#d7ecb1','#e6adeb','#ebc7ad','#c0b5ee']
        var random = Math.floor(Math.random() * color.length)
        user.profileColor = color[random]
    }
    next()
})

const model = mongoose.model(collectionName,schema);
module.exports = model;