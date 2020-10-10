import * as firebase from 'firebase';

export function bookAppointment(appointmentData) {
    return async dispatch => {
        console.log(appointmentData, 'bookAppointment data')
        await firebase.firestore().collection('appointments').add(appointmentData);
        // dispatch({ type: USER_REGISTERED, payload: user })
    }
}
