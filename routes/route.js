import express from 'express'
import { getStudents, getStudentById, createStudent, updateStudent, deleteStudent} from '../operations/user.js'

const router = express.Router()

router.get('/students', getStudents)
router.get('/students/:id',getStudentById)
router.post('/student', createStudent)
router.put('/students/:id', updateStudent)
router.delete('/students/:id', deleteStudent)
export default router