const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true,
        unique:1
    },
    password:{
        type:String,
        maxlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{
        type:Number,
        default: 0
    },
    image:String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }


})

// Schema는 mysql의 테이블같은 역할을 한다.

const User = mongoose.model('User', userSchema)

module.exports = { User }