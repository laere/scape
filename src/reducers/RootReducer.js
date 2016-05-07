import { combineReducers } from 'redux';
import { streamsData } from './StreamsReducer';
import { beastery } from './BeasteryReducer';

const rootReducer = combineReducers({
  streamsData,
  beastery,
});

export default rootReducer;
