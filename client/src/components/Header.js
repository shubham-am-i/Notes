import { useState } from 'react'
// local imports
import { Typography, TextField } from '@mui/material'
import Wrapper from '../styles/Header'

const Header = () => {
  const date = new Date()

  const handleSearch = () => {}

  return (
    <Wrapper>
      <Typography variant='h5'>React Notes</Typography>

      <TextField id='outlined-basic' label='Search...' variant='outlined' className='search' />

      <span>{date.toDateString()}</span>
    </Wrapper>
  )
}
export default Header
