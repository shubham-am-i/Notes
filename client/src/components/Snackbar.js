import * as React from 'react'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { useAppContext } from '../context/appContext'

export default function Snackbar() {
  const [open, setOpen] = React.useState(false)
  const { alertText } = useAppContext()

  if (handleClick) setOpen(true)
  const handleClick = () => {}

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const action = (
    <React.Fragment>
      <Button color='secondary' size='small' onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
        <CloseIcon fontSize='small' />
      </IconButton>
    </React.Fragment>
  )

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={alertText}
        action={action}
      />
    </div>
  )
}
