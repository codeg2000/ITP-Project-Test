const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    Return_ID:{
        type:String,
        required:true
    },
    Return_Date:{
        type:String,
        required:true
    },
    Return_ItemName:{
        type:String,
        required:true
    },
    Customer_Name:{
        type:String,
        required:true
    },
    Customer_ContactNo:{
        type:String,
        required:true
    },
    Return_Reason:{
        type:String,
        required:true
    }


})

module.exports = mongoose.model('Return',postSchema);