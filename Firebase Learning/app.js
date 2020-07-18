var emailEl = document.getElementById('email');
var passwordEl = document.getElementById('password');
var auth = firebase.auth();
var db = firebase.firestore();

function signupUser() {
    auth.createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
        .then(function (success) {
            console.log(success, 'user registerd successfully.');
            redirectToHome();
        })
        .catch(function (error) {
            console.log(error);
        });
}


function signin() {
    auth.signInWithEmailAndPassword(emailEl.value, passwordEl.value)
        .then(function (user) {
            console.log('user', user.user.uid);
            redirectToHome();
        })
        .catch(function (error) {
            console.log('error', error);
        })
}


function redirectToHome() {
    localStorage.setItem('userInfo', JSON.stringify(auth.currentUser));
    window.location.href = './home.html';
}


var todo = document.getElementById('todo-item');


function addTodoItem() {
    // console.log(auth.currentUser.uid);
    db.collection("todo").add({
        todo: todo.value,
        uid: auth.currentUser.uid
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            todo.value = '';
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

}


// function getAllTodos() {
//     db.collection("todo").get()
//         .then((querySnapshot) => {            
//             querySnapshot.forEach((doc) => {
//                 console.log(doc.id, doc.data());
//             });
//         });
// }

// saveWithCustomeDocID();
// function saveWithCustomeDocID(){
//     db.collection('students').doc('javascript').set({
//         studentName:'haider',
//         roll: 2643,
//         subject:'JS'
//     })
// }



// function getCurrentUserTodos() {
//     var uid = JSON.parse(localStorage.getItem('userInfo')).uid;

//     db.collection("todo").where("uid", "==", uid)
//         .get()
//         .then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//                 console.log(doc.id, doc.data());
//             });
//         });
// }












function getUserTodosRealtime() {
    var uid = JSON.parse(localStorage.getItem('userInfo')).uid;
    db.collection("todo").where("uid", "==", uid)
        .onSnapshot(function (snapshot) {
            snapshot.docChanges().forEach(function (change) {
                if (change.type === "added") {

                    console.log("New todo: ", change.doc.data());

                }
                // if (change.type === "modified") {

                //     console.log("Modified city: ", change.doc.data());

                // }
                // if (change.type === "removed") {

                //     console.log("Removed city: ", change.doc.data());

                // }
            });
        })
}