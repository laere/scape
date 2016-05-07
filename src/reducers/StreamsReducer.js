import * as actions from '../actions/DataFetching';

const initialState = {
  data: null,
  isFetching: false,
  receivedAt: null
}

export const streamsData = (state = initialState , action) => {
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
