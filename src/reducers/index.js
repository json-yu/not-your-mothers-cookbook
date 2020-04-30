import { combineReducers } from 'redux';

import cookbookReducer from './reducers.js';

const reducers = combineReducers({
  cookbook: cookbookReducer,
});

export default reducers;