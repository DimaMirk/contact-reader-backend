
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

let express = require('express')

const contactsRouter = require('./routes/api/contacts')

let app = express()
app.use(cors())
app.use(express.json())
app.use('/api/contacts', contactsRouter)


app.use((err,req,res,next) => {
   res.status(500).json({message:err.message}) 
})

const {DB_HOST} = process.env


mongoose.connect(DB_HOST)
   .then(() => {
      app.listen(3001)
      console.log('connected')
   })
   .catch((err) => {
      console.llog(err.message)
      process.exit(1)
      
})


// fs.readFile("./db/contacts.json")
//     .then((data) => {console.log(data.toString())})
// fs.readFile('./db/contacts.json',(error,data)=>{console.log(data)})





// contacts.js

/*
 * Розкоментуй і запиши значення
 * const contactsPath = ;
 */

