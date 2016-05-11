import axios from 'axios';

export const GE_REQUEST = 'GE_REQUEST';
export const GE_SUCCESS = 'GE_SUCCESS';
export const GE_FAILURE = 'GE_FAILURE';
export const GE_INPUT = 'GE_INPUT';

export const setInput = (text) => {
  return {
    type: GE_INPUT,
    text
  }
}

const request = () => {
  return {
    type: GE_REQUEST
  }
}

const receive = (type, data) => {
  return {
    type,
    data
  }
}

export const fetchGrandExchangeData = (text) => {
  return (dispatch) => {
    dispatch(request());
    console.log(text);
    return axios.get(text)
      .then(res => dispatch(receive(GE_SUCCESS, res.data)))
      .catch(res => dispatch(receive(GE_FAILURE)))
  }
}
