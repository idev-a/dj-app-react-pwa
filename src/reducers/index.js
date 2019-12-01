import { combineReducers } from 'redux';
import auth from './auth';
import discover from './tracks';

const reducers = combineReducers({
  auth,
  discover,
})

export default reducers;
