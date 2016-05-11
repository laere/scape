import * as actions from '../actions/GEActions';

const initialState = {
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
        data: action.data,
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

export const input = (state = '', action) => {
  switch(action.type) {
    case actions.HISCORES_INPUT:
      return action.text;
    default:
      return state;
  }
}

export const grandExchange = combineReducers({
  items,
  input
});
