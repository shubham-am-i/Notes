import React, { useReducer, useContext } from 'react'
import axios from 'axios'
import reducer from './reducer'

const initialState = {
  isLoading: false,
  showAlert: false,
  alertType: '',
  alertText: '',
  isEditing: false,
  editNoteId: '',
  title: '',
  body: '',
  pinned: false,
  notes: [],
  totalNotes: 0,
}

// config headers for post request
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const displayAlert = () => {
    dispatch({ type: 'DISPLAY_ALERT' })
    clearAlert()
  }

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: 'CLEAR_ALERT' })
    }, 3000)
  }

  const createNote = async (note) => {
    try {
      const response = await axios.post('/api/v1/notes', note, config)
      dispatch({ type: 'CREATE_NOTE_SUCCESS' })
      getNotes()
    } catch (error) {
      dispatch({ type: 'DISPLAY_ALERT', payload: { msg: error.response.data.msg } })
    }
    clearAlert()
  }

  const getNotes = async () => {
    try {
      dispatch({ type: 'GET_NOTES_BEGIN' })
      const { data } = await axios.get('/api/v1/notes')
      const { notes, totalNotes } = data
      dispatch({
        type: 'GET_NOTES_SUCCESS',
        payload: {
          notes,
          totalNotes,
        },
      })
    } catch (error) {
      console.log(error)
    }
    clearAlert()
  }

  const setEditNote = (id) => {
    dispatch({ type: 'SET_EDIT_NOTE', payload: { id } })
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        getNotes,
        createNote,
        displayAlert,
        setEditNote,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}
export { AppProvider, useAppContext }
