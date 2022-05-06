const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
       
    },
    category: {
        type: String,
       
    },
    sub: {
        type: String,
    },
    image: {
        type: String,
        
    },
    details: {
        type: String,
        
    },
    duration_months: {
        type: String,
        
    },
    duration_internship: {
        type: String,
        
    },
    mode: {
        type: String,
        
    },
    fees: {
        type: String,
        
    },
    brochure: {
        type: String,
        
    },
    course_certificate: {
        type: String,
        
    },
    internship_certificate: {
        type: String,
        
    },
    placement_list: {
        type: String,
        
    },
    objectives: {
        type: String,
        
    },
    highlights: {
        type: String,
        
    },
    test: {
        type: String,
        
    },
    eligibility: {
        type: String,
        
    },
    agenda: {
        type: String,
        required: true
    },
    fee_detail: {
        type: String,
        required: true
    },
    start_date: {
        type: String,
    },
    end_date: {
        type: String,
    },
    status: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
    },
    showboxArray: [{ sbImages: String }],
    index: {
        type: Number
    }

});

var COURSEDATA = mongoose.model('CourseList', CourseSchema);

module.exports = COURSEDATA;