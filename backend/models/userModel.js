const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
    email: {
        type: String
    }, 
    password: {
        type: String
    }
})

const UserModel = Mongoose.model("users", userSchema);

module.exports = UserModel