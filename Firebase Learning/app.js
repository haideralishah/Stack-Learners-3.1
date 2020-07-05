var emailEl = document.getElementById('email');
var passwordEl = document.getElementById('password');
function signupUser() {
    console.log(emailEl.value, passwordEl.value);

    firebase.auth().createUserWithEmailAndPassword(emailEl.value, passwordEl.value);
}