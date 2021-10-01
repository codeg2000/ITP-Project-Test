const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    ItemName : {
        type : String,
        required: true
    },
    BrandName : {
        type : String,
        required: true
    },

    Category : {
        type : String,
        required: true

    },
    
    QualityAssurance : {
        type : String,
        required: true
    },

    UnitPrice : {
        type : String,
        required: true
    },

    UnitProfit : {
        type : String,
        required: true
    }
})

module.exports = mongoose.model('item',postSchema);