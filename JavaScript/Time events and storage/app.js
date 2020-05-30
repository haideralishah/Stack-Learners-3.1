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
var allStudents = [];

function saveUser() {

    var student = {
        stName: usernameEl.value,
        rollnumber: rollnumberEl.value
    }

    var savedStudents = localStorage.getItem("studentName");

    if (savedStudents) {
        savedStudents = JSON.parse(savedStudents);
        allStudents = savedStudents;
    }

    allStudents.push(student);

    student = JSON.stringify(allStudents);

    localStorage.setItem('studentName', student);

}















// var stName = localStorage.getItem('studentName');

// if (stName) {
//     stName = JSON.parse(stName)
//     h1.innerHTML = stName.stName;
// }





// var username = 'haider';

// localStorage.setItem('username', username);


// var courseName = localStorage.getItem("courseName");
// console.log(courseName);

// var userName = localStorage.getItem("username");
// console.log(userName);




// var user = {
//     name: 'haider',
//     rollnumber: 2643,
//     courseName: "JS"
// }
// console.log(user);
// user = JSON.stringify(user);
// console.log(user);

// localStorage.setItem("studentData", user);


// var student = localStorage.getItem('studentData');

// student = JSON.parse(student);

// console.log(student.courseName);



// var fruits = ['apple', 'bnana', 'mango'];

// var fruits = ['pineapple', 'guava', 'grapes'];


// fruits = JSON.stringify(fruits);


// localStorage.setItem('fruits', fruits);


// var fruits = localStorage.getItem('fruits');

// fruits = JSON.parse(fruits);

// console.log(fruits[0])



