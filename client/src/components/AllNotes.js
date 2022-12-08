import { useEffect } from 'react'
import { VscPinned } from 'react-icons/vsc'
import { RxDrawingPinFilled } from 'react-icons/rx'
import { Paper, Stack } from '@mui/material'
import { useAppContext } from '../context/appContext'
import Loading from './Loading'
import Wrapper from '../styles/AllNotes'

const AllNotes = () => {
  const { getNotes, isLoading, notes } = useAppContext()

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <Wrapper>
      {isLoading && <Loading center />}
      <h4>Pinned</h4>
      <Stack className='notes-container'>
        {notes.map((note) => (
          <Paper className='paper'>
            {note.pinned ? <RxDrawingPinFilled size={20} /> : <VscPinned size={20} />}
            <h2>{note.title}</h2>
            <p>{note.body}</p>
          </Paper>
        ))}
      </Stack>
    </Wrapper>
  )
}
export default AllNotes
