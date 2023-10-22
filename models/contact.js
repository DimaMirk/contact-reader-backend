const { Schema, model } = require('mongoose')

const {handleMongooseError} = require('../helpers')

const contactSchema = new Schema({
    name: {
        type: String,
        required:true,
    },
    email: String,
    phone: String,
    operator: {
        type: String,
        default:'Vodafone'
    }
}, { versionKey: false, timestamps: true })


contactSchema.post('save', handleMongooseError)

const Contact = model('contact', contactSchema);

module.exports = Contact;