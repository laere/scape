import * as actions from '../actions/GEActions';
import { combineReducers } from 'redux';

const initialState = {
  data: [],
  isFetching: false,
  receivedAt: null
}

const graphState = {
  data: [],
  isFetching: false,
  receivedAt: null
}

export const items = (state = initialState , action) => {
  switch(action.type) {
    case actions.GE_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actions.GE_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.data),
        isFetching: false,
        receivedAt: new Date().toLocaleString()
      }
    case actions.GE_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state;
  }
}

export const graph = (state = graphState , action) => {
  switch(action.type) {
    case actions.GE_GRAPH_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actions.GE_GRAPH_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.data),
        isFetching: false,
        receivedAt: new Date().toLocaleString()
      }
    case actions.GE_GRAPH_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state;
  }
}

export const input = (state = '', action) => {
  switch(action.type) {
    case actions.GE_INPUT:
      return action.text;
    default:
      return state;
  }
}

export const grandExchange = combineReducers({
  items,
  graph,
  input
});
