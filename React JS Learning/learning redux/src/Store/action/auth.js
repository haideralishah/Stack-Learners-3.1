import { CHANGE_AUTH, CHANGE_ROLLNUMBER, CHANGE_USERNAME } from '../constant/ActionTypes';

export function chagneAuth() {
    return dispatch => {
        dispatch({ type: CHANGE_AUTH })
    }
}

export function changeRollNumber() {
    return dispatch => {
        dispatch({ type: CHANGE_ROLLNUMBER, payload: 2643 })
    }
}


export function changeUserName(name) {
    return dispatch => {
        dispatch({ type: CHANGE_USERNAME, payload: name })
    }
}
