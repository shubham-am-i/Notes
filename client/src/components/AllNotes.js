import React, { useEffect } from 'react'
import { VscPinned } from 'react-icons/vsc'
import { RxDrawingPinFilled } from 'react-icons/rx'
import { Paper, Stack, Typography, Button } from '@mui/material'
import { useAppContext } from '../context/appContext'
import Loading from './Loading'
import CreateNote from './CreateNote'
import Wrapper from '../styles/AllNotes'

const AllNotes = () => {
  const [open, setOpen] = React.useState(false)
  const { getNotes, isLoading, editNote, notes, totalNotes, setEditNote, clearValues } =
    useAppContext()
  const handleOpen = (id) => {
    setEditNote(id)
    setOpen(true)
  }
  const handleClose = (e) => {
    // console.dir(e.target.parentElement)
    // console.log(e.target.parentElement.nodeName)
    if (e.target.parentElement.textContent === 'Save Changes') {
      editNote()
      setOpen(false)
    }
    if (e.target.parentElement.nodeName === 'DIV') return
    clearValues()
    setOpen(false)
  }

  useEffect(() => {
    getNotes()
  }, [])

  if (totalNotes === 0) {
    return (
      <Wrapper>
        <Typography variant='h5'>No Notes to display...</Typography>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Typography variant='body1'>Notes</Typography>
      {isLoading && <Loading center />}
      <Stack className='notes-container'>
        {notes.map((note) => (
          <Paper className='paper' onClick={() => handleOpen(note._id)}>
            {note.pinned ? <RxDrawingPinFilled size={20} /> : <VscPinned size={20} />}
            <h2>{note.title}</h2>
            <p>{note.body}</p>
          </Paper>
        ))}
      </Stack>

      {open && (
        <aside className='modal-container' onClick={handleClose}>
          <div className='modal'>
            <CreateNote modal='modal' handleClose={handleClose} />
          </div>
        </aside>
      )}
    </Wrapper>
  )
}
export default AllNotes
