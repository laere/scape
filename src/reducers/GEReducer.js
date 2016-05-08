import * as actions from '../actions/GEActions';

const initialState = {
  data: null,
  isFetching: false,
  receivedAt: null
}

export const grandExchange = (state = initialState , action) => {
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
