import {memo} from 'react'
import moment from 'moment'
import {VscPinned} from 'react-icons/vsc'
import {RxDrawingPinFilled} from 'react-icons/rx'
import {MdDelete} from 'react-icons/md'
import {Button, Box, Input, Stack} from '@mui/material'
// local import
import Wrapper from '../styles/CreateNote'
import {useAppContext} from '../context/appContext'

const EditNote = () => {
    const {deleteNote, handleChange, title, body, pinned, updatedAt} = useAppContext()

    // handle pinned note
    // input is directly updated on context state using handleChange()
    const handlePinned = (e) => {
        const name = 'pinned'
        const value = !pinned
        handleChange({name, value})
    }

    const handleNoteInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        handleChange({name, value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Wrapper>
            <form className='form form-modal' onSubmit={handleSubmit}>
                <span className='date'>edited - {moment(updatedAt).format('MMM Do, h:mm a')}</span>
                <Stack direction='row'>
                    <Input
                        name='title'
                        placeholder='Title'
                        disableUnderline={true}
                        multiline
                        fullWidth
                        style={{marginBottom: '10px'}}
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
                    <div>
                        <Button type='submit'>Save Changes</Button>
                    </div>
                    <span>
                        <MdDelete size={20} className='delete-icon' onClick={deleteNote} />
                    </span>
                </Box>
            </form>
        </Wrapper>
    )
}
export default memo(EditNote)
