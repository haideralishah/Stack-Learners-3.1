// inside component

import { act } from 'react-dom/test-utils';
import { useSelector, useDispatch } from 'react-redux';

const userAppointments = useSelector(({ appointments }) => appointments.todays)
const userAllAppointments = useSelector(({ appointments }) => appointments.all)

const dispatch = useDispatch();

dispatch({ type: 'USER_REGISTERED', payload: 'Haider' });

function aFunc() {
    return dispatch => {
        dispatch({ type: 'USER_REGISTERED', payload: 'haider' })
    }
}
dispatch(aFunc());
















// inside reducer

// create new case 

// case 'USER_REGISTERED': {
//     return {
//         ...state,
//         rollNumber: action.payload.rollNumber,
//         email: action.payload.email,
//         name: action.payload.name
//     }
// }
