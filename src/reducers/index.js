import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import discover from './tracks';

const reducers = combineReducers({
  auth,
  discover,
  user,
})

export default reducers;
