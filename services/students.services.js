import { createStudent, deleteStudent, findStudentByID, findStudents, updateStudent } from "../models/students.models.js"

const _createStudent = async (req, res, next) => {
    try {
        const student = await createStudent(req.body);
        res.status(200).json({ status: "Student created successfully", students: student })
    } catch (error) {
        console.log("Error..", error)
    }
}

const _getAllStudents = async (req, res, next) => {
    try {
        const students = await findStudents();
        res.status(200).json({ status: "Students returned successfully", students: students })
    } catch (error) {
        console.log("Error..", error)
    }
}

const _getStudentById = async (req, res, next) => {   
    try {
        const student = await findStudentByID(req.params.id);
        res.status(200).json({ status: "Student returned successfully", student: student })
    } catch (error) {
        console.log("Error..", error)
    }
}

const _updateStudent = async (req, res, next) => {
    try {
        const result = await updateStudent(req.params.id, req.body)
        res.status(200).json({ status: "Student updated successfully", student: result })
    } catch (error) {
        console.log("Error..", error)
    }
}

const _deleteStudent = async (req, res, next) => {
    try {
        const student = await deleteStudent(req.params.id);
        res.status(200).json({ status: "Student deleted successfully", student: student })
    } catch (error) {
        console.log("Error..", error)
    }
}

export default { _createStudent, _getAllStudents, _getStudentById, _updateStudent, _deleteStudent }