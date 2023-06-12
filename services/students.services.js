
const createStudent = async (req, res, next) => {
    res.json({ type: "createStudent" })
}

const getAllStudents = async (req, res, next) => {
    res.json({ type: "getAllStudents" })
}

const getStudentById = async (req, res, next) => {
    res.json({ type: "getStudentById" })
}

const updateStudent = async (req, res, next) => {
    res.json({ type: "updateStudent" })
}

const deleteStudent = async (req, res, next) => {
    res.json({ type: "deleteStudent" })
}

export default { createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent }