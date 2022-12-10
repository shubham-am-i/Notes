import { useState, useMemo } from 'react'
// local imports
import { Typography } from '@mui/material'
import Wrapper from '../styles/Header'
import { Stack } from '@mui/system'
import { useAppContext } from '../context/appContext'

const Header = () => {
  const [localSearch, setLocalSearch] = useState('')
  const { handleChange } = useAppContext()
  const date = new Date()

  const logo =
    'https://charitism-campaigns.s3.ap-south-1.amazonaws.com/09022427-f267-4b58-a9a9-e66cd88a1e8b.png'

  const debounce = () => {
    let timeoutID
    return (e) => {
      setLocalSearch(e.target.value)
      clearTimeout(timeoutID)
      timeoutID = setTimeout(() => {
        handleChange({ name: e.target.name, value: e.target.value })
      }, 1000)
    }
  }
  // eslint-disable-next-line
  const optimizedDebounce = useMemo(() => debounce(), [])
  return (
    <Wrapper>
      <Stack direction='row' style={{ alignItems: 'center' }}>
        <img src={logo} className='logo' alt='logo' />
        <Typography variant='h5'>React Notes</Typography>
      </Stack>

      <input
        name='search'
        type='search'
        placeholder='Search by title...'
        className='search'
        value={localSearch}
        onChange={optimizedDebounce}
      />

      <span className='date'>{date.toDateString()}</span>
    </Wrapper>
  )
}
export default Header
