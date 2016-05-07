import * as actions from '../actions/DataFetching';
import { SET_INPUT, CLEAR_INPUT } from '../actions/BeasteryActions';
import { combineReducers } from 'redux';

const initialState = {
  data: null,
  isFetching: false,
  receivedAt: null
}

export const beasteryData = (state = initialState , action) => {
  switch(action.type) {
    case actions.REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actions.SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
        receivedAt: new Date().toLocaleString()
      }
    case actions.FAILURE:
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
    case SET_INPUT:
      return action.text
    case CLEAR_INPUT:
      return action.payload
    default:
      return state;
  }
}

export const beastery = combineReducers({
  beasteryData,
  beasteryInput
})
