import { useState } from 'react'
import { VscPinned } from 'react-icons/vsc'
import { RxDrawingPinFilled } from 'react-icons/rx'
import { Button, Form, Box, Input, Stack, FormControl, InputBase } from '@mui/material'
// local import
import Alert from './Alert'
import Wrapper from '../styles/CreateNote'
import { useAppContext } from '../context/appContext'

const initialValues = {
  title: '',
  body: '',
  pinned: false,
}

const CreateNote = () => {
  const [values, setValues] = useState(initialValues)
  const { createNote, showAlert } = useAppContext()

  const handlePinned = (e) => {
    // handle pinned note
    setValues({ ...values, pinned: !values.pinned })
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const note = {
      title: values.title,
      body: values.body,
      pinned: values.pinned,
    }
    createNote(note)
    setValues(initialValues)
  }
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className='form'>
        {/* <FormControl sx={{ boxShadow: 3 }} className='form'> */}
        <Stack direction='row'>
          <InputBase
            name='title'
            placeholder='Title'
            // disableunderline
            multiline
            fullWidth
            value={values.title}
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
        <InputBase
          name='body'
          placeholder='Take a note...'
          // disableunderline
          multiline
          value={values.body}
          onChange={handleChange}
        />

        <Box className='button-container'>
          <Button type='submit'>Create Note</Button>
        </Box>
        {/* </FormControl> */}
      </form>
      {showAlert && <Alert />}
    </Wrapper>
  )
}
export default CreateNote
