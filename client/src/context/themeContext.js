import { createContext, useContext, useReducer } from 'react'

const initialState = {
  color: 'lightgrey',
  mode: 'light',
}
export const ThemeContext = createContext()
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState)

  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color })
  }

  const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode })
  }

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

const themeReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CHANGE_COLOR':
      return { ...state, color: payload }

    case 'CHANGE_MODE':
      return { ...state, mode: payload }
  }
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
