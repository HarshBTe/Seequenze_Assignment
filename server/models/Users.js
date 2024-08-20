const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
     TaskName: String,
     TaskDescription: String
})

const UserModel = mongoose.model("tasks", UserSchema)
module.exports = UserModel