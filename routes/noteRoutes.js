import express from 'express'
const router = express.Router()
// import controllers
import { createNote, getAllNotes, updateNote } from '../controllers/notesController.js'

router.route('/').get(getAllNotes).post(createNote)
router.route('/:id').patch(updateNote)

export default router
