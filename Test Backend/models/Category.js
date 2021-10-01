const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    CategoryName : {
        type : String,
        required: true
    },
    Description : {
        type : String,
        required: true
    }

    
})

module.exports = mongoose.model('Category',postSchema);