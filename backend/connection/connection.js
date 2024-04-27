const mongoose=require('mongoose');
const connectToMongo=()=>{
    return mongoose.connect("mongodb://localhost:27017/Chatbot").then(()=>{
        console.log("Connected to MongoDB sucessfully");
    }).catch(()=>{
        console.log("Failed to connect to MongoDB");
    });
}

module.exports=connectToMongo;