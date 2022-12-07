const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'DISPLAY_ALERT': {
      break
    }

    default:
      throw new Error(`no such action : ${type}`)
  }
}

export default reducer
