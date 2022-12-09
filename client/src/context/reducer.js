const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'DISPLAY_ALERT':
      const { msg } = payload
      return {
        ...state,
        showAlert: true,
        alertType: 'danger',
        alertText: msg,
      }

    case 'CLEAR_ALERT': {
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: '',
      }
    }

    case 'CLEAR_VALUES': {
      const initialState = {
        title: '',
        body: '',
        pinned: false,
        editNoteId: '',
        isEditing: false,
      }
      return {
        ...state,
        ...initialState,
      }
    }

    case 'HANDLE_CHANGE': {
      const { name, value } = payload
      return {
        ...state,
        page: 1,
        [name]: value,
      }
    }

    case 'CREATE_NOTE_SUCCESS': {
      return {
        ...state,
        showAlert: true,
        alertType: 'success',
        alertText: 'New Note Created!',
      }
    }

    case 'GET_NOTES_BEGIN': {
      return { ...state, isLoading: false }
    }

    case 'GET_NOTES_SUCCESS': {
      const { notes, totalNotes } = payload
      return {
        ...state,
        isLoading: false,
        notes,
        totalNotes,
      }
    }

    case 'SET_EDIT_NOTE': {
      const note = state.notes.find((note) => note._id === payload.id)
      const { _id, title, body, pinned } = note
      return {
        ...state,
        isEditing: true,
        editNoteId: _id,
        title,
        body,
        pinned,
      }
    }

    case 'EDIT_NOTE_SUCCESS': {
      return {
        ...state,
        showAlert: true,
        alertType: 'success',
        alertText: 'Note Updated!',
      }
    }

    case 'EDIT_NOTE_ERROR': {
      const { msg } = payload
      return {
        ...state,
        showAlert: true,
        alertType: 'danger',
        alertText: msg,
      }
    }
    case 'DELETE_NOTE_SUCCESS': {
      return {
        ...state,
        showAlert: true,
        alertType: 'success',
        alertText: 'Note binned!',
      }
    }

    case 'DELETE_NOTE_ERROR': {
      const { msg } = payload
      return {
        ...state,
        showAlert: true,
        alertType: 'danger',
        alertText: msg,
      }
    }

    default:
      throw new Error(`no such action : ${type}`)
  }
}

export default reducer
