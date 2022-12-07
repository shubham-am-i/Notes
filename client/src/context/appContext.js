import React, { useReducer, useContext } from 'react'
import axios from 'axios'
import reducer from './reducer'

const initialState = {
  isLoading: false,
  showAlert: false,
  alertType: '',
  alertText: '',
  pinned: false,
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
  const handleChange = ({ name, value }) => {
    dispatch({ type: 'HANDLE_CHANGE', payload: { name, value } })
  }

  const createNote = async (note) => {
    try {
      const { data } = await axios.post('/api/v1/notes', note, config)
      dispatch({ type: 'CREATE_NOTE_SUCCESS' })
    } catch (error) {
      dispatch({ type: 'DISPLAY_ALERT', payload: { msg: error.payload.data.msg } })
    }
    clearAlert()
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleChange,
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
