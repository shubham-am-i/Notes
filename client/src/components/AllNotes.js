import React, { useEffect } from 'react'
import { VscPinned } from 'react-icons/vsc'
import { RxDrawingPinFilled } from 'react-icons/rx'
import { Box, Paper, Stack, Typography } from '@mui/material'
import { useAppContext } from '../context/appContext'
import Wrapper from '../styles/AllNotes'
import EditNote from './EditNote'
import PageBtnContainer from './PageBtnContainer'
import Loading from './Loading'
import Alert from './Alert'

const AllNotes = () => {
  const [open, setOpen] = React.useState(false)
  const {
    getNotes,
    editNote,
    notes,
    totalNotes,
    setEditNote,
    clearValues,
    numOfPages,
    page,
    search,
    isLoading,
    showAlert,
  } = useAppContext()

  const handleOpen = (id) => {
    setEditNote(id)
    setOpen(true)
  }
  const handleClose = (e) => {
    if (e.target.textContent === 'Save Changes') {
      editNote()
      setOpen(false)
    }
    if (e.target.parentElement.nodeName === 'DIV') return
    clearValues()
    setOpen(false)
  }

  useEffect(() => {
    getNotes()
    // eslint-disable-next-line
  }, [page, search])

  if (totalNotes === 0) {
    return (
      <Wrapper>
        <Typography variant='h5'>No Notes to display...</Typography>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Typography variant='body1' className='heading-title'>
        Notes
      </Typography>
      {isLoading ? (
        <Loading center />
      ) : (
        <Stack className='notes-container'>
          {notes.map((note, index) => (
            <Paper key={index} className='paper' onClick={() => handleOpen(note._id)}>
              <Box className='pin-box'>
                {note.pinned ? <RxDrawingPinFilled size={20} /> : <VscPinned size={20} />}
              </Box>
              <Typography variant='subtitle2' component='h6' className='title'>
                {!note.title && !note.body ? 'Empty Note' : note.title}
              </Typography>
              <p className='body'>{note.body}</p>
            </Paper>
          ))}
        </Stack>
      )}

      {open && (
        <aside className='modal-container' onClick={handleClose}>
          <div className='modal'>
            <EditNote handleClose={handleClose} />
          </div>
        </aside>
      )}
      {showAlert && <Alert />}
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  )
}
export default AllNotes
