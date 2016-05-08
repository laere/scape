import * as actions from '../actions/StreamsActions';

const initialState = {
  data: null,
  isFetching: false,
  receivedAt: null
}

export const streams = (state = initialState , action) => {
  switch(action.type) {
    case actions.STREAMS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actions.STREAMS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
        receivedAt: new Date().toLocaleString()
      }
    case actions.STREAMS_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state;
  }
}
