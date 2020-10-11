import * as firebase from 'firebase';
import { ADD_APPOINTMENTS } from '../constant/ActionTypes'
export function bookAppointment(appointmentData) {
    return async dispatch => {
        console.log(appointmentData, 'bookAppointment data')
        await firebase.firestore().collection('appointments').add(appointmentData);
        // dispatch({ type: USER_REGISTERED, payload: user })
    }
}


export function fetchAllAppointments(userUid) {
    return async dispatch => {
        firebase.firestore().collection("appointments").where('uid', "==", userUid)
            .onSnapshot(function (snapshot) {
                snapshot.docChanges().forEach(function (change) {
                    if (change.type === "added") {
                        let appointment = change.doc.data();
                        appointment.docId = change.doc.id;
                        // console.log("Appointments: ", appointment);
                        dispatch({ type: ADD_APPOINTMENTS, payload: appointment })

                    }
                    // if (change.type === "modified") {
                    //     console.log("Modified city: ", change.doc.data());
                    // }
                    // if (change.type === "removed") {
                    //     console.log("Removed city: ", change.doc.data());
                    // }
                });
            });

    }
}





export function fetchAllAppointmentsEveryUser() {
    return async dispatch => {
        firebase.firestore().collection("appointments")
            .onSnapshot(function (snapshot) {
                snapshot.docChanges().forEach(function (change) {
                    if (change.type === "added") {
                        let appointment = change.doc.data();
                        appointment.docId = change.doc.id;
                        // console.log("Appointments: ", appointment);
                        dispatch({ type: ADD_APPOINTMENTS, payload: appointment })

                    }
                    // if (change.type === "modified") {
                    //     console.log("Modified city: ", change.doc.data());
                    // }
                    // if (change.type === "removed") {
                    //     console.log("Removed city: ", change.doc.data());
                    // }
                });
            });

    }
}
