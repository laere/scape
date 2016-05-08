import { combineReducers } from 'redux';
import { streamsData } from './StreamsReducer';
import { beastery } from './BeasteryReducer';
import { geData } from './GEReducer';
import { hiscoresData } from './HiscoresReducer';

const rootReducer = combineReducers({
  streamsData,
  beastery,
  geData,
  hiscoresData,
});

export default rootReducer;
