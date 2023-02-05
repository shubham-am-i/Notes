import {useState, useMemo} from 'react'
// local imports
import {Typography} from '@mui/material'
import Wrapper from '../styles/Header'
import {Stack} from '@mui/system'
import {useAppContext} from '../context/appContext'
import {useTheme} from '../context/themeContext'

const Header = () => {
    const [localSearch, setLocalSearch] = useState('')
    const {handleChange} = useAppContext() // access context value
    const {color} = useTheme()
    const date = new Date()

    const logo =
        'https://charitism-campaigns.s3.ap-south-1.amazonaws.com/09022427-f267-4b58-a9a9-e66cd88a1e8b.png'

    // using debouncing, we are preventing function call on every keystroke
    const debounce = () => {
        let timeoutID
        return (e) => {
            setLocalSearch(e.target.value)
            clearTimeout(timeoutID)
            timeoutID = setTimeout(() => {
                handleChange({name: e.target.name, value: e.target.value})
            }, 1000)
        }
    }
    // Using useMemo() function is running only once
    // eslint-disable-next-line
    const optimizedDebounce = useMemo(() => debounce(), [])
    return (
        <Wrapper style={{backgroundColor: color}}>
            <Stack direction='row' style={{alignItems: 'center'}}>
                <img src='favicon.png' className='logo' alt='logo' />
                <Typography variant='h5' className='main-heading'>
                    React Notes
                </Typography>
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
