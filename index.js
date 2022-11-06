const studentRouter = require("./src/routes/students_routes")
const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb+srv://nazeer:A39ooiY2j6hOCEHh@nodelearning.ks06m4w.mongodb.net/?retryWrites=true&w=majority";
const app = express();


app.use(express.json())

app.use("/students",studentRouter);



mongoose.connect(url);
const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error: "));

db.once("open", ()=>{
    console.log("connection success");
});


app.listen(5000,()=>{
    console.log("port is running on 5000");
})