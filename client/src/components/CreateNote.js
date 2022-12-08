import { useState } from 'react'
import { VscPinned } from 'react-icons/vsc'
import { RxDrawingPinFilled } from 'react-icons/rx'
import { Button, Form, Box, Input, Stack, FormControl } from '@mui/material'
import axios from 'axios'
// local import
import Alert from './Alert'
import Wrapper from '../styles/CreateNote'
import { useAppContext } from '../context/appContext'

const CreateNote = ({ modal, handleClose }) => {
  const { createNote, showAlert, handleChange, title, body, pinned, isEditing } = useAppContext()

  const handlePinned = (e) => {
    // handle pinned note
    const name = 'pinned'
    const value = !pinned
    handleChange({ name, value })
  }

  const handleNoteInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isEditing) {
      handleClose()
      return
    }
    createNote()
  }
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ boxShadow: 3 }} className={`form form-${modal}`}>
          <Stack direction='row'>
            <Input
              name='title'
              placeholder='Title'
              disableUnderline={true}
              fullWidth
              value={title}
              onChange={handleNoteInput}
            />

            <Box className='pin-box'>
              {pinned ? (
                <RxDrawingPinFilled size={20} name='pinned' onClick={handlePinned} />
              ) : (
                <VscPinned size={20} name='pinned' onClick={handlePinned} />
              )}
            </Box>
          </Stack>
          <Input
            name='body'
            placeholder='Take a note...'
            disableUnderline={true}
            multiline
            value={body}
            onChange={handleNoteInput}
          />

          <Box className='button-container'>
            <Button type='submit'>{isEditing && modal ? 'Save Changes' : 'Create Note'}</Button>
          </Box>
          {showAlert && <Alert />}
        </FormControl>
      </form>
    </Wrapper>
  )
}
export default CreateNote
