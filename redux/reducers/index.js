import { combineReducers } from 'redux';
import numberReducer from './numberReducer';
import historyReducer from './historyReducer';

export default combineReducers({
    //number: () => 0
    number: numberReducer,
    history: historyReducer
    
});