import {
    INCREASE_NUMBER,
    DECREASE_NUMBER,
    ADD_HISTORY
} from '../types';

export const increaseNumber = () => (dispatch) => {
    dispatch({
        type: INCREASE_NUMBER,
        value: 1
    })
}

export const decreaseNumber = () => (dispatch) => {
    dispatch({
        type: DECREASE_NUMBER,
        value: 1

    })
}
export const addHistory = (x) => (dispatch) => {
    const name = x
    console.log('foo:'+x )
    console.log('name:'+name)
    dispatch({
        type: ADD_HISTORY,
        name
    })
}