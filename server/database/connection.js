const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://saswatabasu:saswata23@cluster0.ng91g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connection established")
}).catch((err)=>{
    console.log(`Error is : ${err}`)
})