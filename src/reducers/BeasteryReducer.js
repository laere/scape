import * as actions from '../actions/BeasterActions';


export const beasteryData = (state, action) => {
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

//Combine all reducers in here, and put that into a root combine function
