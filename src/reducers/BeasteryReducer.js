import * as actions from '../actions/BeasteryActions';

const initialState = {
  data: null,
  isFetching: false,
  receivedAt: null
}

export const beasteryData = (state = initialState, action) => {
  switch(action.type) {
    case actions.REQUEST:
      return state;
    case actions.SUCCESS:
      return state;
    case actions.FAILURE:
      return state;
    default:
      return state;
  }
}
