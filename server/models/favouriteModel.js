const mongoose = require('mongoose');
const collectionName = 'favourite';

const schema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    products:[{
        product_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'product',
            required: true,
            unique: true
        }
    }]
})

const model = mongoose.model(collectionName,schema);

module.exports = model;
