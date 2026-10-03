import express from 'express'
import { getStudents, createStudent, updateStudent, deleteStudent} from '../operations/user.js'

const router = express.Router()

router.get('/students', getStudents)
router.post('/student', createStudent)
router.put('/students/:id', updateStudent)
router.delete('/students/:id', deleteStudent)
export default router