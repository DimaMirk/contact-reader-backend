// const contacts = require('./index')
// const argv = require('yargs').argv;


// const invokeAction = async ({ action, id,name, email, phone }) => {
//     switch (action) {
//         case 'read':
//             await contacts.listContacts()
//                 .then((data)=>{console.log(data)})
//             break
//         case 'contactById':
//             await contacts.getContactById(id)
//                 .then((data) => { console.log(data) })
//             break
//         case 'deletecontactById':
//             await contacts.removeContact(id)
//                  .then((data) => { console.log(data) })
//             break
//         case 'addContact':
//             await contacts.addContact(name, email, phone)
//              .then((data) => { console.log(data) })
//             break
//     }
// }

// invokeAction({ action: 'read' })
// invokeAction({ action: 'contactById', id: 'e6ywwRe4jcqxXfCZOj_1e' })
// invokeAction({action:'deletecontactById', id:'e6ywwRe4jcqxXfCZOj_1e'})
// invokeAction({action:'addContact',name:'Dmytro Myruk',email:"dima@gmail.com",phone:'3393'})

// console.log(argv)
// invokeAction(argv)