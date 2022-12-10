import { useState } from 'react'
import { VscPinned } from 'react-icons/vsc'
import { RxDrawingPinFilled } from 'react-icons/rx'
import { Button, Box, Stack, InputBase, Input } from '@mui/material'
// local import
import Wrapper from '../styles/CreateNote'
import { useAppContext } from '../context/appContext'
import { useTheme } from '../context/themeContext'

// initial local state values
const initialValues = {
  title: '',
  body: '',
  pinned: false,
}

const CreateNote = () => {
  const [values, setValues] = useState(initialValues)
  const { createNote } = useAppContext()
  const { mode } = useTheme()

  // handle pinned note
  const handlePinned = (e) => {
    setValues({ ...values, pinned: !values.pinned })
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  // handle form input
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
      <form onSubmit={handleSubmit} className={`form ${mode}`}>
        <Stack direction='row'>
          <Input
            name='title'
            placeholder='Title'
            multiline
            disableUnderline={true}
            fullWidth
            className='input'
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

        <Input
          name='body'
          placeholder='Take a note...'
          disableUnderline={true}
          multiline
          className='input'
          value={values.body}
          onChange={handleChange}
        />

        <Box className='button-container'>
          <Button type='submit' className='button'>
            Create Note
          </Button>
        </Box>
      </form>
    </Wrapper>
  )
}
export default CreateNote
