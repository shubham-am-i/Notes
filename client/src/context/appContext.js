import React, { useReducer, useContext } from 'react'
import axios from 'axios'
import reducer from './reducer'

// get values from local storage
const notes = localStorage.getItem('notes')
const totalNotes = localStorage.getItem('totalNotes')
const numOfPages = localStorage.getItem('numOfPages')

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
  notes: notes ? JSON.parse(notes) : [],
  totalNotes: totalNotes,
  page: 1,
  numOfPages: numOfPages,
  search: '',
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
    }, 4000)
  }

  const clearValues = () => {
    dispatch({ type: 'CLEAR_VALUES' })
  }

  const handleChange = ({ name, value }) => {
    dispatch({ type: 'HANDLE_CHANGE', payload: { name, value } })
  }

  const setNotesToLocalStorage = ({ notes, totalNotes, numOfPages }) => {
    localStorage.setItem('notes', JSON.stringify(notes))
    localStorage.setItem('totalNotes', totalNotes)
    localStorage.setItem('numOfPages', numOfPages)
  }

  const createNote = async (note) => {
    try {
      await axios.post('/api/v1/notes', note, config)
      dispatch({ type: 'CREATE_NOTE_SUCCESS' })
      getNotes()
    } catch (error) {
      dispatch({ type: 'DISPLAY_ALERT', payload: { msg: error.response.data.msg } })
    }
    clearAlert()
  }

  const getNotes = async () => {
    const { page, search } = state

    let url = `/api/v1/notes?page=${page}`
    if (search) url += `&search=${search}`
    try {
      dispatch({ type: 'GET_NOTES_BEGIN' })
      const { data } = await axios.get(url)
      const { notes, totalNotes, numOfPages } = data
      dispatch({
        type: 'GET_NOTES_SUCCESS',
        payload: {
          notes,
          totalNotes,
          numOfPages,
        },
      })
      setNotesToLocalStorage({ notes, totalNotes, numOfPages })
    } catch (error) {
      console.log(error)
    }
    clearAlert()
  }

  const setEditNote = (id) => {
    dispatch({ type: 'SET_EDIT_NOTE', payload: { id } })
  }

  const editNote = async () => {
    try {
      const { title, body, pinned, editNoteId } = state
      await axios.patch(
        `/api/v1/notes/${editNoteId}`,
        {
          title,
          body,
          pinned,
        },
        config
      )
      getNotes()
      dispatch({ type: 'EDIT_NOTE_SUCCESS' })
    } catch (error) {
      dispatch({
        type: 'EDIT_NOTE_ERROR',
        payload: { msg: error.response.data.msg },
      })
    }
    clearValues()
    clearAlert()
  }

  const deleteNote = async () => {
    const { editNoteId } = state
    try {
      await axios.delete(`/api/v1/notes/${editNoteId}`, config)
      dispatch({ type: 'DELETE_NOTE_SUCCESS' })
      getNotes()
    } catch (error) {
      dispatch({ type: 'DELETE_NOTE_ERROR', payload: { msg: error.response.data.msg } })
    }
    clearAlert()
  }

  const changePage = (page) => {
    dispatch({ type: 'CHANGE_PAGE', payload: { page } })
    getNotes()
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        getNotes,
        createNote,
        displayAlert,
        setEditNote,
        handleChange,
        clearValues,
        editNote,
        deleteNote,
        changePage,
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
