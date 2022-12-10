import { Container } from '@mui/material'
import { Fragment } from 'react'
import AllNotes from './components/AllNotes'
import CreateNote from './components/CreateNote'
import Header from './components/Header'
import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './context/themeContext'

function App() {
  const { mode } = useTheme()
  return (
    <div className={`${mode}`} style={{ minHeight: '100vh' }}>
      <Header />
      <Container className={`App`}>
        <ThemeSelector />
        <CreateNote />
        <AllNotes />
      </Container>
    </div>
  )
}

export default App
