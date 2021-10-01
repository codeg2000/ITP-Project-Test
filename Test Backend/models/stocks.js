const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({

    Stock_ID : {
        type : String,
        required : true
    },
    
    Stock_Name : {
        type : String,
        required : true
    },

    Stock_Quantity : {
        type : String,
        required : true
    },

    Supplier_Name : {
        type : String,
        required : true
    },

    Supplier_Email : {
        type : String,
        required : true
    },

    Supplier_ContactNo : {
        type : String,
        required : true
    }


});

module.exports = mongoose.model("Stock",stockSchema);