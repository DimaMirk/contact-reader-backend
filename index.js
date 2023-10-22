
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

let express = require('express')

const contactsRouter = require('./routes/api/contacts')

let app = express()
app.use(cors())
app.use(express.json())
app.use('/api/contacts', contactsRouter)

app.use((req,res) => {
   res.status(404).json({message:'Not found'})
})

app.use((err, req, res, next) => {
   const { status = 500, message = 'Server error' } = err
   res.status(status).json({message}) 
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
