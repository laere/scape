import { combineReducers } from 'redux';
import { streams } from './StreamsReducer';
import { beastery } from './BeasteryReducer';
import { grandExchange } from './GEReducer';
import { hiscores } from './HiscoresReducer';

const rootReducer = combineReducers({
  streams,
  beastery,
  grandExchange,
  hiscores,
});

export default rootReducer;
