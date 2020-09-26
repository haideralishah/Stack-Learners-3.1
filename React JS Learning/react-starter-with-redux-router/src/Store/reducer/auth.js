import { CHANGE_AUTH, CHANGE_ROLLNUMBER, CHANGE_USERNAME } from "../constant/ActionTypes";


const INIT_STATE = {
    auth: true,
    userName: 'haider',
    rollNumber: 2655
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

        case CHANGE_ROLLNUMBER: {
            return {
                ...state,
                rollNumber: action.payload
            }
        }
        case CHANGE_USERNAME: {
            return {
                ...state,
                userName: action.payload
            }
        }

        default:
            return state;
    }
}
