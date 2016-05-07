export const SET_INPUT = 'SET_INPUT';
export const CLEAR_INPUT  = 'CLEAR_INPUT';

export const setInput = (text) => {
  return {
    type: SET_INPUT,
    text
  }
}

export const clearInput = () => {
  return {
    type: CLEAR_INPUT,
    payload: ''
  }
}
