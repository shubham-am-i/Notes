import React, { useReducer, useContext } from 'react'
import axios from 'axios'
import reducer from './reducer'

const initialState = {
  isLoading: false,
  showAlert: false,
  alertType: '',
  alertText: '',
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

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: 'CLEAR_ALERT' })
    }, 3000)
  }

  const createNote = async (note) => {
    try {
      await axios.post('/api/v1/notes', note, config)
      dispatch({ type: 'CREATE_NOTE_SUCCESS' })
    } catch (error) {
      dispatch({ type: 'DISPLAY_ALERT', payload: { msg: error.payload.data.msg } })
    }
    clearAlert()
  }

  const getNotes = async () => {
    dispatch({ type: 'GET_NOTES_BEGIN' })
    try {
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
  return (
    <AppContext.Provider
      value={{
        ...state,
        getNotes,
        createNote,
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
