const mongoose = require('mongoose');


// Blog Schema

const Blog = mongoose.model('Content',{
    heading:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
});

module.exports = {Blog}