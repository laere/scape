import axios from 'axios';

export const BEASTERY_REQUEST = 'BEASTERY_REQUEST';
export const BEASTERY_SUCCESS = 'BEASTERY_SUCCESS';
export const BEASTERY_FAILURE = 'BEASTERY_FAILURE';
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

const request = () => {
  return {
    type: BEASTERY_REQUEST
  }
}

const receive = (type, data) => {
  return {
    type,
    data
  }
}

export const fetchBeasteryData = (url) => {
  return (dispatch) => {
    dispatch(request());

    return axios.get(url)
      .then(res => dispatch(receive(BEASTERY_SUCCESS, res.data)))
      .catch(res => dispatch(receive(BEASTERY_FAILURE)))
  }
}
