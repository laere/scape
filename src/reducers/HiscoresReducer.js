import * as actions from '../actions/HiscoresActions';

const initialState = {
  data: null,
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
        data: action.data,
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
