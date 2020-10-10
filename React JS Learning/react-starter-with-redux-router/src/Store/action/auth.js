import { CHANGE_AUTH, CHANGE_ROLLNUMBER, CHANGE_USERNAME, TOGGLE_BULB, USER_REGISTERED } from '../constant/ActionTypes';
import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDMMCPYd6DIsl_YRBPfXrgExlhpd6avqZM",
    authDomain: "testing-2b480.firebaseapp.com",
    databaseURL: "https://testing-2b480.firebaseio.com",
    projectId: "testing-2b480",
    storageBucket: "testing-2b480.appspot.com",
    messagingSenderId: "467025782581",
    appId: "1:467025782581:web:21f526a0102d9584784e7c",
    measurementId: "G-3GFBX03X1Z"
};

firebase.initializeApp(firebaseConfig);


// export function signupUser(user) {
//     return dispatch => {
//         firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//             .then((registeredUser) => {
//                 console.log(`User has be created.`, registeredUser);
//                 delete user.password;
//                 console.log(user);
//                 firebase
//                     .firestore()
//                     .collection('users')
//                     .add(user)
//                     .then(() => {
//                         console.log('data has been saved.')
//                         user.uid = registeredUser.user.uid;
//                         dispatch({ type: USER_REGISTERED, payload: user })

//                     })
//                     .catch((e) => {
//                         console.log(e)
//                     })

//             })
//         console.log('ousid promise');
//     }
// }




export function signupUser(user) {
    return async dispatch => {
        let registeredUser = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
        delete user.password;
        user.uid = registeredUser.user.uid;
        console.log(user, 'user data')
        await firebase.firestore().collection('users').add(user);
        dispatch({ type: USER_REGISTERED, payload: user })
    }
}



export function signin(user) {
    return async dispatch => {
        let authenticatedUser = await firebase.auth().signInWithEmailAndPassword(user.email, user.password);
        delete user.password;
        user.uid = authenticatedUser.user.uid;
        console.log(user, 'user');

        let userFound = await firebase.firestore().collection('users').where("uid", "==", user.uid).get();
        userFound.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            dispatch({ type: USER_REGISTERED, payload: user })
        });


    }
}












export function fetchUserInfo(uid) {
    return async dispatch => {
        let userFound = await firebase.firestore().collection('users').where("uid", "==", uid).get();
        userFound.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            dispatch({ type: USER_REGISTERED, payload: doc.data() })
        });
    }
}
























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
        console.log(name, 'inside auth action')
        dispatch({ type: CHANGE_USERNAME, payload: name })
    }
}



export function toggleBulb() {
    return dispatch => {
        dispatch({ type: TOGGLE_BULB })
    }
}






