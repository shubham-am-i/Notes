import mongoose from 'mongoose'

const NoteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            unique: true,
            maxlength: 100,
            required: true,
        },
        body: String,
        pinned: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true}
)

const Note = mongoose.model('Note', NoteSchema)

export default Note
