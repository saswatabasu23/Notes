const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/NotesApp")
.then(()=>{
    console.log("connection established")
}).catch((err)=>{
    console.log(`Error is : ${err}`)
})