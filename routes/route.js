import express from 'express'
import { getStudents, createStudent} from '../operations/user.js'

const router = express.Router()

router.get('/students', getStudents)
router.post('/student', createStudent)

export default router