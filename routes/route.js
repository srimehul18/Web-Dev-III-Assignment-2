import express from 'express'
import { getStudents } from '../operations/user.js'

const router = express.Router()

router.get('/students', getStudents)

export default router