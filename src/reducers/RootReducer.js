import { combineReducers } from 'redux';
import { streams } from './StreamsReducer';
import { beastery } from './BeasteryReducer';
import { scores } from './HiscoresReducer';
import { grandExchange } from './GEReducer';

const rootReducer = combineReducers({
  streams,
  beastery,
  scores,
  grandExchange,
});

export default rootReducer;
