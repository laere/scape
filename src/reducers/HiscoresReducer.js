import * as actions from '../actions/HiscoresActions';
import { combineReducers } from 'react-redux';

const initialState = {
  data: [],
  isFetching: false,
  receivedAt: null
}

export const hiscores = (state = initialState , action) => {
  switch(action.type) {
    case actions.HISCORES_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actions.HISCORES_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.data),
        isFetching: false,
        receivedAt: new Date().toLocaleString()
      }
    case actions.HISCORES_FAILURE:
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
    case actions.HISCORES_INPUT:
      return action.text;
    default:
      return state;
  }
}

const scores = combineReducers({
  hiscores,
  input
})

export default scores;
