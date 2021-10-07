const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({


    nicNo:{
        type:String,
        required:true
    },
    
    fromDate:{
        type:String,
        required:true
    },
    toDate:{
        type:String,
        required:true
    },
    typeOfLeave:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    }

});

module.exports = mongoose.model('Leave',postSchema)