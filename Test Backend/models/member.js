const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    memberid : {
        type : String,
        required: true
    },
    name : {
        type : String,
        required: true
    },
    address : {
        type : String,
        required: true
    },
    phone : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true      
    },  
    pwd : {
        type: String,
        required: true     
    },
    mtype : {
        type : String,
        required: true
    },
});

module.exports = mongoose.model('Member',postSchema);

