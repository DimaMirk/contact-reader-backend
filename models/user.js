const { Schema, model } = require('mongoose')

const { handleMongooseError } = require('../helpers')
const Joi = require('joi')

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const userSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true,
        match: emailRegexp,
        unique:true
    },
    password: {
        type: String,
        required: true,
        minlength:6
    },
    token: {
        type: String,
       default:'' 
    },
    avatarURL: {
        type: String,
        required:true
    }
}, { versionKey: false, timestamps: true })

userSchema.post('save', handleMongooseError);


let registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().required(),
})
let loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().required(),
})

const schemas = {
    registerSchema,
    loginSchema
}

const User = model('user', userSchema);

module.exports = {
    User,
    schemas
};