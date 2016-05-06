import { combineReducers } from 'redux';
import { twitchData } from './TwitchReducer';
import { beasteryData } from './BeasteryReducer';

const rootReducer = combineReducers({
  twitchData,
  beasteryData,
});

export default rootReducer;
