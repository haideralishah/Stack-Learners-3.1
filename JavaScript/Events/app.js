

var greetEl = document.getElementById('greeting');

function greetUser() {
    var userName = prompt('what is your name?');
    greetEl.innerHTML = "Welcome " + userName;
}
