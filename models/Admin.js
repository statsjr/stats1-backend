const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,  "Please provide a Username"],
        unique: [true, "Username already Exist"],
        },
      email: {
        type: String,
        required: [true,  "Please provide an Email"],
        unique: [true, "Email already Exist"],
        },
      password: {
        type: String,
        required: [true,  "Please provide a password"],
        unique: false,
        },
});

module.exports = mongoose.model.Admins|| mongoose.model("Admins", AdminSchema);
