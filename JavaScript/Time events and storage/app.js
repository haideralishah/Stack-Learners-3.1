// storage
// time events





// function checkUserLocation() {
//     console.log(i++);
//     if (i > 5) {
//         clearInterval(consoleTimer);
//     }
// }


// var i = 0;

// // setInterval(function () {
// //     console.log(i++);
// // }, 1000);


// var consoleTimer = setInterval(checkUserLocation, 1000);










































// setInterval();
// setTimeout();


// function greetUser() {
//     var h1 = document.getElementById('greet-user');
//     h1.innerHTML = 'Welcome Haider';
//     console.log(h1);
// }

// var greetingTimeout = setTimeout(greetUser, 1000);

// clearTimeout(greetingTimeout);

// setInterval(greetUser, 5000);















// var secondsCounter = 59;
// var minutesCounter = 2;


// var minutesEl = document.getElementById('minutes');
// var secondsEl = document.getElementById('seconds');

// secondsEl.innerHTML = secondsCounter;
// minutesEl.innerHTML = minutesCounter;

// function secondTimer() {
//     if (secondsCounter < 1) {
//         if (minutesCounter < 1) {
//             clearInterval(consoleTimer);
//         }
//         else {
//             secondsCounter = 59;
//             minutesCounter--;
//         }
//     }
//     secondsEl.innerHTML = secondsCounter--
//     minutesEl.innerHTML = minutesCounter;
// }


// var consoleTimer = setInterval(secondTimer, 1000);








































/*
localStorage.setItem(key, value);
localStorage.getItem(key);
*/


var h1 = document.getElementById('greet-user');
var usernameEl = document.getElementById('username');
var rollnumberEl = document.getElementById('rollnumber');


function saveUser() {
    var student = {
        stName: usernameEl.value,
        rollnumber: rollnumberEl.value
    }
    console.log(student);

    console.log(JSON.stringify(student));
    localStorage.setItem('studentName', JSON.stringify(student));
}



var stName = localStorage.getItem('studentName');

if (stName) {
    stName = JSON.parse(stName)
    h1.innerHTML = stName.stName;
}
