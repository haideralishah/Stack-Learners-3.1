import { CHANGE_AUTH } from '../constant/ActionTypes';

export function chagneAuth() {
    console.log('action, testing');
    return dispatch => {
        dispatch({ type: CHANGE_AUTH })
    }
}

