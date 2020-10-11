import { act } from 'react-dom/test-utils';
import {
    ADD_APPOINTMENTS,
    USER_LOGOUT
} from '../constant/ActionTypes'

const INIT_STATE = {
    userAppointments: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_APPOINTMENTS:
            let userAppointmentsClone = state.userAppointments.slice(0);
            userAppointmentsClone.push(action.payload);
            return {
                ...state,
                userAppointments: userAppointmentsClone
            }
        case USER_LOGOUT:
            return {
                ...state,
                userAppointments: []
            }

        default:
            return state;
    }
}
