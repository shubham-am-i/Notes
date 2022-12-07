import { Container } from '@mui/material'
import CreateNote from './components/CreateNote'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Container className='App'>
        <CreateNote />
      </Container>
    </>
  )
}

export default App
