const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({

    empid:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },

    lastname:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    nicNo:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    dob:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true
    },

    jobTitle:{
        type:String,
        required:true
    },

    joinedDate:{
        type:String,
        required:true
    }





});

module.exports = mongoose.model('Employee',employeeSchema)