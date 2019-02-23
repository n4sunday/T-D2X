import {
    ADD_HISTORY
} from '../types';

const history = [];

export default (state = history, action) => {
    switch (action.type) {
        case ADD_HISTORY: 
            return state.concat([action.name]);
        default:
            return state;
    }
}