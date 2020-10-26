import { combineReducers } from 'redux';
import formAuthReducer from './formAuthReducer';

export default combineReducers({
    auth: formAuthReducer,
})
