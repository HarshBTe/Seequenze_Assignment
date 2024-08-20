const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(

    "mongodb+srv://harshdubey:HarshD36%40@cluster0.gy1d4yp.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0"
    
)

// API to Get Sorted List of Users
app.get("/", (req, res) => {
  
    UserModel.find({})
      .then(tasks => res.json(tasks))
      .catch(err =>
        res.json(err)
    )

})

app.get("/getUser/:id", (req, res) => {
  
 const id = req.params.id;

 UserModel.findById({_id:id})
 .then(tasks => res.json(tasks))
 .catch(err =>
   res.json(err)
)

})

app.put("/updateUser/:id", (req, res) => {
  
    const id = req.params.id;
   
    UserModel.findByIdAndUpdate({_id:id}, {TaskName: req.body.TaskName, TaskDescription: req.body.TaskDescription})
    .then(tasks => res.json(tasks))
    .catch(err =>
      res.json(err)
   )
   
   })

   app.delete("/deleteUser/:id", (req, res) => {
  
    const id = req.params.id;
   
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err =>
      res.json(err)
   )
   
   })



// API to Create New User
app.post("/createUser", (req, res) => {
   UserModel.create(req.body)
   .then(tasks => res.json(tasks))
   .catch(err => res.json(err))


})



app.listen(3002, ()=> {
    console.log("Server is Running")
})