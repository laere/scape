import * as actions from '../actions/BeasteryActions';
import { combineReducers } from 'redux';

const initialState = {
  data: [],
  isFetching: false,
  receivedAt: null,
  currentBeastId: null
}

export const beast = (state = initialState , action) => {
  switch(action.type) {
    case actions.BEASTERY_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actions.BEASTERY_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.data),
        isFetching: false,
        receivedAt: new Date().toLocaleString()
      }
    case actions.BEASTERY_FAILURE:
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
    case actions.BEASTERY_INPUT:
      return action.text;
    default:
      return state;
  }
}

export const beastery = combineReducers({
  beast,
  input,
})
