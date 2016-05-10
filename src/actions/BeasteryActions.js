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

const postData = (type, data) => {
  return {
    type,
    data
  }
}

export const postBeasteryData = (url) => {
  return (dispatch) => {
    dispatch(request());

    return axios.post(url)
      .then(res => dispatch(postData(BEASTERY_SUCCESS, res.data)))
      .catch(res => dispatch(postData(BEASTERY_FAILURE)))
  }
}
