import express from "express";
import studentsServices from "../services/students.services.js";
const studentsRouter = express.Router();


studentsRouter.post("/", studentsServices.createStudent)
studentsRouter.get("/", studentsServices.getAllStudents)
studentsRouter.get("/:id", studentsServices.getStudentById)
studentsRouter.put("/:id", studentsServices.updateStudent)
studentsRouter.delete("/:id", studentsServices.deleteStudent)


export default studentsRouter