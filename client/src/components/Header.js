import { useState } from 'react'
// local imports
import { Typography, TextField } from '@mui/material'
import Wrapper from '../styles/Header'
import { Stack } from '@mui/system'

const Header = () => {
  const date = new Date()

  const handleSearch = () => {}
  const logo =
    'https://charitism-campaigns.s3.ap-south-1.amazonaws.com/09022427-f267-4b58-a9a9-e66cd88a1e8b.png'
  return (
    <Wrapper>
      <Stack direction='row' style={{ alignItems: 'center' }}>
        <img src={logo} className='logo' alt='logo' />
        <Typography variant='h5'>React Notes</Typography>
      </Stack>

      <input type='search' placeholder='Search...' className='search' />

      <span className='date'>{date.toDateString()}</span>
    </Wrapper>
  )
}
export default Header
