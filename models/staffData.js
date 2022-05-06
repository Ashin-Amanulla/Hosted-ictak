const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
 
  name: {
      type:String,
      required:true
  },
  designation: {
      type:String,
      required:true
  },
  employee_code:{
      type:String,
      required:true
  },
  grade:{
      type:String,
      
  },
  division: {
      type:String,
      
  },
  zone: {
    type:String,
    
},
  photo: {
      type:String,
      
  },
  details: {
      type:String,
      
  },
  mail: {
      type:String,
      
  },
  linkedIn: {
      type:String,
      
  },
  facebook: {
      type:String,
  },
  instagram: {
      type:String,
  },
  others: {
      type:String,
  },
  status: {
      type:String,
      
  },
  index: {
    type: Number
}
 
});

var STAFFDATA = mongoose.model('AssociateList', StaffSchema);

module.exports = STAFFDATA;