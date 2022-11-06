const { ObjectID } = require("bson");
const studentModel = require("../models/student_model");

// GET

const getStudents = async (req, res) => {
  try {
    const data = await studentModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ONE Student

const getOneStudent = async (req, res) => {
    console.log("called..................");
  try {
    const data = await studentModel.findById(ObjectID(req.params.id));
    res.json(data)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// POST

const addStudent = async (req, res) => {
  console.log(req.body);
  const student = new studentModel(req.body);

  try {
    await student.save();
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
};

//DELETE
const delStudent =  async (req,res) =>{

  console.log(req.params.id);

  
  try {
    await res.student.remove();
    res.status(200).json({"msg":`Deleted ${res.student.name} Successfully`})
    
  } catch (error) {
    res.send(error)
  }

}


// Update

const updateStudent = async (req, res) =>{

  if (!req.body) {
    return res.status(400).json({"msg":"Data cant be empty"})    
  }
  const id = req.params.id;

  studentModel.findByIdAndUpdate(id, req.body)
    .then(data => {
      console.log(data,"++++++++++++++");
      if (!data) {
        res.status(404).send({
          message: `Cannot update  with id=${id}. Maybe id was not found!`
        });
      } else res.send({ message: "id was updated successfully.",data:data });
    })

    .catch(err => {
      res.status(500).send({
        message: "Error updating  with id=" + id
      });
    });


}





module.exports.addStudent = addStudent;
module.exports.getStudents = getStudents;
module.exports.getOneStudent = getOneStudent;
module.exports.delStudent = delStudent;
module.exports.updateStudent = updateStudent;


