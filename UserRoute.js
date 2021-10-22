const express = require("express")
const Route = express.Router();
const UserModel = require("./Models/userModel")
const bcrypt = require("bcryptjs")





Route.post('/login', async(req,res) =>{
    const { username, password } = req.body;

  const extUser = await UserModel.findOne({ username: username });
    console.log("aca")
  if (!extUser) {
    res.status(400).send({ message: "User does not exist" });
    console.log('jfjf')
  } else {
    const isMatch = password == "password1" && username == "Fabric"

    if (!isMatch) {
      res.status(400).send({ message: "Email or Password is wrong" });
    } else if (isMatch) {
      res.status(200).send({ message: "Login Succesfull", user: extUser });
    }
  }
})
Route.get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const user = await UserModel.findOne({username:id});
      res.status(200).send({message:"user Found", user})
    } catch (error) {
      res.status(400).send({ message: "user not found" });
    }
});


  


module.exports =  Route;