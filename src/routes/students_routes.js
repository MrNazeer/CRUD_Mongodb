const express = require("express");
const router = express.Router();
const studentModel = require("../models/student_model")
const {
  addStudent,
  getStudents,
  getOneStudent,
  delStudent,
  updateStudent
} = require("../controllers/students_controllers");



async function getStudentRecord(req, res, next) {
  console.log(req.params.id, "----------------------");
  let student;
  try {
    student = await studentModel.findOne({_id : req.params.id})
    console.log(student, "----------------");
    if (student == null) {
      return res.status(404).json({"msg":"Cant Find the Student"})      
    }
    
  } catch (error) {

    res.status(404).json({"msg":error.message})
    
  }
  
  res.student = student;
  next()

}


router.get("/get_students", getStudents);

router.get("/getstudent/:id", getOneStudent);

router.post("/add_student", addStudent);

router.delete("/del_student/:id", getStudentRecord, delStudent);

router.patch("/update_student/:id", updateStudent );

module.exports = router;
