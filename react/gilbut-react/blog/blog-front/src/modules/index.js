import { combineReducers } from 'redux';
import auth from '../modules/auth';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
