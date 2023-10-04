// TODO: задокументувати кожну функцію
const e = require('express')
const fs = require('fs/promises')
let { nanoid } = require('nanoid')
let path = require('path')
let contactPath = path.join(__dirname, '/contacts.json')

async function listContacts() {
  // ...твій код. Повертає масив контактів.
    let data  = await fs.readFile(contactPath,'utf-8')
    return  JSON.parse(data)  
}

async function getContactById(contactId) {
    let contacts = listContacts()
        .then((data) => {
          let contact = data.filter((contact) => (contact.id == contactId))
          console.log(contact)
            return contact.length !==0 ? contact : null
        })
    return contacts
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

async function removeContact(contactId) {
    let contacts = listContacts()
        .then((data) => {
          let index = data.findIndex((contact) => (contact.id == contactId))
          
            let filteredContacts =  data.filter((contact) =>(contact.id !== contactId))
          fs.writeFile(contactPath, JSON.stringify(filteredContacts, null, 2))
          console.log()
            return data[index]
     })
    return contacts.length == 0 ? null : contacts
    // let filteredContacts = data.filter((contact) => (contact.id !== contactId))
   
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact({ name, email, phone }) {
    let contacts = listContacts()
      .then((data) => {
          
        let newContact = {
            id: nanoid(),
            email,
            phone,
            name
            }
            
            data.push(newContact)
            fs.writeFile(contactPath, JSON.stringify(data,null,2))
            return newContact
     })
     return contacts
  // ...твій код. Повертає об'єкт доданого контакту. 
}

async function updateContactById(id, body) {
       let contacts = listContacts()
         .then((data) => {
           let index = data.findIndex((contact) => (contact.id == id))
           if (index === -1) {
             return null
           }
           data[index] = { id, ...body };
           fs.writeFile(contactPath, JSON.stringify(data, null, 2))
           return data[index]
        })
    return contacts
}

module.exports = {listContacts,getContactById,removeContact,addContact,updateContactById}