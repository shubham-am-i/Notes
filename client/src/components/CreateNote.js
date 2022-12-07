import { useState } from 'react'
import { VscPinned } from 'react-icons/vsc'
import { RxDrawingPinFilled } from 'react-icons/rx'
import { Button, Form, Box, Input, Stack, FormControl } from '@mui/material'
import axios from 'axios'
// local import
import Alert from './Alert'
import Wrapper from '../styles/CreateNote'
import { useAppContext } from '../context/appContext'

const CreateNote = () => {
  const [values, setValues] = useState({
    title: '',
    body: '',
    pinned: false,
  })
  const { createNote, showAlert } = useAppContext()

  const handleChange = (e) => {
    // handle input values
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const handlePinned = (e) => {
    // handle pinned note
    setValues({ ...values, pinned: !values.pinned })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newNote = {
      title: values.title,
      body: values.body,
      pinned: values.pinned,
    }
    createNote(newNote)
  }
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ boxShadow: 3 }} className='form'>
          <Stack direction='row'>
            <Input
              name='title'
              placeholder='Title'
              disableUnderline={true}
              fullWidth
              onChange={handleChange}
            />

            <Box className='pin-box'>
              {values.pinned ? (
                <RxDrawingPinFilled size={20} onClick={handlePinned} />
              ) : (
                <VscPinned size={20} onClick={handlePinned} />
              )}
            </Box>
          </Stack>
          <Input
            name='body'
            placeholder='Take a note...'
            disableUnderline={true}
            multiline
            onChange={handleChange}
          />

          <Box className='button-container'>
            <Button type='submit'>Create Note</Button>
          </Box>
          {showAlert && <Alert />}
        </FormControl>
      </form>
    </Wrapper>
  )
}
export default CreateNote
