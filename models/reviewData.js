const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    reviewer_code:{
        type:String
    },
    course: {
        type: String,
    },
    photo: {
        type: String,
    },
    testimonial: {
        type: String,
    },
    place:{
        type:String
    },
    designation: {
        type: String,
    },
    company: {
        type: String,
    },
    rating:{
        type:Number
    }


});

var REVIEWDATA = mongoose.model('ReviewList', ReviewSchema);

module.exports = REVIEWDATA;