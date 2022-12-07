import React, { useReducer, useContext } from 'react'
// import axios from 'axios'
import reducer from './reducer'

const initialState = {
  isLoading: false,
  showAlert: false,
  pinned: false,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = ({ name, value }) => {
    dispatch({ type: 'HANDLE_CHANGE', payload: { name, value } })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleChange,
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
