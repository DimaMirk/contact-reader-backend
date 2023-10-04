const fs = require('fs/promises')
let users = require('./users')
let {nanoid} = require('nanoid')
let path = require('path')
const cors = require('cors')


let express = require('express')

const contactsRouter = require('./routes/api/contacts')

let app = express()
app.use(cors())
app.use(express.json())
app.use('/api/books', contactsRouter)


app.use((err,req,res,next) => {
   res.status(500).json({message:err.message}) 
})

app.listen(3001)

// fs.readFile("./db/contacts.json")
//     .then((data) => {console.log(data.toString())})
// fs.readFile('./db/contacts.json',(error,data)=>{console.log(data)})





// contacts.js

/*
 * Розкоментуй і запиши значення
 * const contactsPath = ;
 */

