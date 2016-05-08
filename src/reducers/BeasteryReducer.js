import * as actions from '../actions/BeasteryActions';
import { combineReducers } from 'redux';

const initialState = {
  data: null,
  isFetching: false,
  receivedAt: null,
  currentBeastId: null
}

export const beasteryData = (state = initialState , action) => {
  switch(action.type) {
    case actions.BEASTERY_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actions.BEASTERY_SUCCESS:
      return {
        ...state,
        data: action.data,
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

export const beasteryInput = (state = '', action) => {
  switch(action.type) {
    case actions.SET_INPUT:
      return action.text;
    case actions.CLEAR_INPUT:
      return action.payload;
    default:
      return state;
  }
}

export const beastery = combineReducers({
  beasteryData,
  beasteryInput
})
