import axios from 'axios';

export const GE_REQUEST = 'GE_REQUEST';
export const GE_SUCCESS = 'GE_SUCCESS';
export const GE_FAILURE = 'GE_FAILURE';
export const GE_INPUT = 'GE_INPUT';

export const GE_GRAPH_REQUEST = 'GE_GRAPH_REQUEST';
export const GE_GRAPH_SUCCESS = 'GE_GRAPH_SUCCESS';
export const GE_GRAPH_FAILURE = 'GE_GRAPH_FAILURE';

export const setInput = (text) => {
  return {
    type: GE_INPUT,
    text
  }
}

const request = (type) => {
  return {
    type
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
    dispatch(request(GE_REQUEST));
    console.log(text);
    return axios.get('/grandexchange/' + text)
      .then(res => dispatch(receive(GE_SUCCESS, res.data)))
      .catch(res => dispatch(receive(GE_FAILURE)))
  }
}

export const fetchGrandExchangeGraphData = (id) => {
  return (dispatch) => {
    dispatch(request(GE_GRAPH_REQUEST));
    console.log(id);
    return axios.get('/grandexchange/item/' + id)
      .then(res => dispatch(receive(GE_GRAPH_SUCCESS, res.data)))
      .catch(res => dispatch(receive(GE_GRAPH_FAILURE)))
  }
}
