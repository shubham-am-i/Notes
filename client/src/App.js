import { Container } from '@mui/material'
import AllNotes from './components/AllNotes'
import CreateNote from './components/CreateNote'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Container className='App'>
        <CreateNote />
        <AllNotes />
      </Container>
    </>
  )
}

export default App
