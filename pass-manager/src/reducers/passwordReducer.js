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
      if (/[A-Z]/.test(input)) {
        valid.capital = true
      } else valid.capital = false
      if (/[a-z]/.test(input)) {
        valid.lowercase = true
      } else valid.lowercase = false
      if (/[!@#\$%\^\&*\)\(+=._-]/.test(input)) {
        valid.special = true
      } else valid.special = false
      if (/[0-9]/.test(input)) {
        valid.numerical = true
      } else valid.numerical = false
      if (/[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}/.test(input)) {
        valid.minlength = true
      } else valid.minlength = false
      return { ...state, validation: valid }
    default:

  }
  return state
}