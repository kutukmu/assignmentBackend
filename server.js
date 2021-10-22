const express = require("express");
const  config = require("./config");
const mongoose = require("mongoose");
const  UserRoute = require('./UserRoute')
const { MONGODB_URL, JWT_SECRET } = config;
const UserModel = require('./Models/userModel')
const cors = require("cors")

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

const db = mongoose.connection;

db.once('open', async function() {
     
  
 
    // a document instance
    var user1 = new UserModel({ username: 'Fabric', password: 'password1', currentTime: new Date () });
 
    await user1.save()
     
});

if(!db){
    console.log("Db not connected")
}else{
    console.log("Db Connected")
}
const app = express();
app.use(express.json());
app.use(cors())
app.use("/api/user", UserRoute);


app.listen(5000, () => console.log("started"));