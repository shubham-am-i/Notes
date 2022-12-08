const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'DISPLAY_ALERT':
      const { msg } = payload
      return {
        ...state,
        showAlert: true,
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

    case 'CREATE_NOTE_SUCCESS': {
      return {
        ...state,
        showAlert: true,
        alertType: 'success',
        alertText: 'New Note Created!',
      }
    }

    case 'GET_NOTES_BEGIN': {
      return { ...state, isLoading: true }
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

    default:
      throw new Error(`no such action : ${type}`)
  }
}

export default reducer
