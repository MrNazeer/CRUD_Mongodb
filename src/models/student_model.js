const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        standard:{
            type: String,
            required:true,
        },
        phoneNumber:{
            type: String,
            required:true,
        },
        gmail:{
            type: String,
            required:true,
        },
        schoolName:{
            type: String,
            required:true,
        },
        age:{
            type: String,
            required:true,
        },
        address:{
            type: String,
            required:true,
        }
    }
);

module.exports = mongoose.model("Student", studentSchema);