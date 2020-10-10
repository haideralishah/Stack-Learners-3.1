import {
    CHANGE_AUTH,
    CHANGE_ROLLNUMBER,
    CHANGE_USERNAME,
    CHANGE_AUTH_BOOL,
    TOGGLE_BULB,
    USER_REGISTERED
} from "../constant/ActionTypes";


const INIT_STATE = {
    auth: true,
    user: null,
    userName: 'haider',
    rollNumber: 2655,
    bulb: false
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CHANGE_AUTH: {
            return {
                ...state,
                auth: !state.auth,
                userName: 'Ali'
            }
        }
        case CHANGE_AUTH_BOOL: {
            return {
                ...state,
                auth: !state.auth,
            }
        }

        case CHANGE_ROLLNUMBER: {
            return {
                ...state,
                rollNumber: action.payload
            }
        }
        case CHANGE_USERNAME:
            return {
                ...state,
                userName: action.payload
            }

        case TOGGLE_BULB:
            return {
                ...state,
                bulb: !state.bulb
            }
        case USER_REGISTERED:
            return {
                ...state,
                user: action.payload
            }

        default:
            return state;
    }
}
