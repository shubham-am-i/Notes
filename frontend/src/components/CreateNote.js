import { useState } from 'react'
import { VscPinned } from 'react-icons/vsc'
import { RxDrawingPinFilled } from 'react-icons/rx'
import {
  Button,
  FormControl,
  Box,
  Input,
  TextField,
  Stack,
} from '@mui/material'
// local import
import Wrapper from '../styles/CreateNote'

// initial local state
const initialState = {
  title: '',
  body: '',
  pinned: false,
}
const CreateNote = () => {
  const [values, setValues] = useState(initialState)

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
  }
  return (
    <Wrapper>
      <FormControl
        sx={{ boxShadow: 3 }}
        className='form'
        onSubmit={handleSubmit}
      >
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
          <Button type='button'>Create Note</Button>
        </Box>
      </FormControl>
    </Wrapper>
  )
}
export default CreateNote
