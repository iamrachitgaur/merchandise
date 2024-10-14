const mongoose = require('mongoose');
const collectionName = 'product';

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  user_id: [{
    id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    }
  }],
  product_image: {
    public_id:{type:String,required:true},
    url:{type:String,required:true}
},
  price: { 
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
},{
  timestamps:true
});

const model = mongoose.model(collectionName,schema);

module.exports = model;
