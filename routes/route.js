import express from 'express'
import { getStudents, createStudent, updateStudent} from '../operations/user.js'

const router = express.Router()

router.get('/students', getStudents)
router.post('/student', createStudent)
router.put('/students/:id', updateStudent)
export default router