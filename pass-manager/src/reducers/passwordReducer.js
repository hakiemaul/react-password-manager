const initialState = {
  passwords: [],
  validation: {
    capital: false,
    lowercase: false,
    special: false,
    numerical: false,
    minlength: false
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PASSWORDS':
      return { ...state, passwords: action.payload }
    case 'CHECK_INPUT':
      let input = action.payload
      let valid = {...state.validation}
      if (/[A-Z]/.test(input)) valid.capital = true
      if (/[a-z]/.test(input)) valid.lowercase = true
      if (/[!@#\$%\^\&*\)\(+=._-]/.test(input)) valid.special = true
      if (/[0-9]/.test(input)) valid.numerical = true
      if (/[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}/.test(input)) valid.minlength = true
      return { ...state, validation: valid }
    default:

  }
  return state
}