import express from 'express'
const router = express.Router()
// import controllers
import { createNote } from '../controllers/notesController.js'

router.route('/').post(createNote)

export default router
