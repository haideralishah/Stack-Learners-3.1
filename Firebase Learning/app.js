var emailEl = document.getElementById('email');
var passwordEl = document.getElementById('password');
function signupUser() {
    console.log(emailEl.value, passwordEl.value);

    firebase.auth().createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
        .then(function (success) {
            console.log(success, 'user registerd successfully.');
        })
        .catch(function (error) {
            console.log(error);
        });
}


function signin() {
    console.log(emailEl.value, passwordEl.value);
    firebase.auth().signInWithEmailAndPassword(emailEl.value, passwordEl.value)
        .then(function (user) {
            console.log('user', user.user.uid);
        })
        .catch(function (error) {
            console.log('error', error);
        })
}   