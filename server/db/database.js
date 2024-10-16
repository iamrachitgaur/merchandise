const mongoose = require('mongoose');
const validator = require('validator')

// mongoose.set('strictQuery', true);

const connectionURL = process.env.MONGODB_URL;
// const connectionURL = "mongodb+srv://angularDatabase:angularDatabase@angulardatabase.vcicwrb.mongodb.net/merchandise?retryWrites=true&w=majority"

const database = mongoose.connect(connectionURL,{useNewUrlParser:true},(error)=>{
    if(error){
       return console.log(error)
    }
    console.log('Database is up NOW!')
})

module.exports = database