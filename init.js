const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() =>{
    console.log("connection is successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [ // we store it in the form of array data is too big
    { 
    from : "neha",
    to : "priya",
    msg: "send me your exam sheets",
    created_at : new Date()
  },
  {
    from : "mohit",
    to : "deepak",
    msg: "teach me Js callbacks",
    created_at : new Date()
  },
  {
    from : "john",
    to : "aman",
    msg: "give me tips about exam",
    created_at : new Date()
  },
  {
    from : "alok",
    to : "neeta",
    msg: "can you send me your js texts",
    created_at : new Date()
  },
  {
    from : "kunal",
    to : "neha",
    msg: "are you coming?",
    created_at : new Date()
  }
];

Chat.insertMany(allChats);