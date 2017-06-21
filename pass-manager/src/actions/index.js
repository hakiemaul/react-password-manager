export const getPasswords = (data) => {
  return {
    type: 'GET_PASSWORDS',
    payload: data
  }
}

export const checkInput = (input) => {
  return {
    type: 'CHECK_INPUT',
    payload: input
  }
}