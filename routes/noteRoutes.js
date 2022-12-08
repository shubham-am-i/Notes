import express from 'express'
const router = express.Router()
// import controllers
import { createNote, getAllNotes } from '../controllers/notesController.js'

router.route('/').get(getAllNotes).post(createNote)

export default router
