// var rightNow = new Date();
// var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// var dayNum = rightNow.getDay();

// var daysName = days[dayNum];
// console.log(daysName);





























// var rightNow = new Date();
// var currentMonth = rightNow.getMonth();
// var months = ['jan', "feb", "mar", 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'];
// var monthName = months[currentMonth];
// console.log(monthName, rightNow);











// var rightNow = new Date();
// var currentDate = rightNow.getDate();
// var fullYear = rightNow.getFullYear();
// var currentHours = rightNow.getHours();
// var currentMin = rightNow.getMinutes();
// var currentSec = rightNow.getSeconds();
// var currentMilliSec = rightNow.getMilliseconds();
// console.log(rightNow);
// // console.log(currentDate, fullYear, currentHours);
// console.log(currentMin, currentSec, currentMilliSec);

























// var rightNow = new Date();
// console.log(rightNow);
// var timeInMiliseconds = rightNow.getTime();
// console.log(timeInMiliseconds)


























// var birthDate = new Date("October 4, 1991");
// console.log(birthDate)












// var today = new Date();
// var doomsday = new Date("June 30, 2035");

// var todayTime = today.getTime();
// var doomsdayTime = doomsday.getTime();

// console.log(todayTime);
// console.log(doomsdayTime);

// var differenceInMilliseconds = doomsdayTime - todayTime;
// var leftDaysForDoomsday = differenceInMilliseconds / (1000 * 60 * 60 * 24)
// leftDaysForDoomsday = Math.floor(leftDaysForDoomsday);

// console.log(leftDaysForDoomsday);




/*

1. how many days have passed since your birthday?
2. how many day have passed since your last birth date?
3. how many days are left for your coming birt date?

*/
























// var rightNow = new Date(); // Mon May 18 2020 14:12:11 GMT+0500 (Pakistan Standard Time)
// var rightNowInMilliSeconds = rightNow.getTime();
// // console.log(rightNow.getTime()); //


// var myBirthDate = new Date('October 4, 2020');
// var myBirthDateInMilliSeconds = myBirthDate.getTime();

// console.log(rightNowInMilliSeconds, myBirthDateInMilliSeconds);

// var leftDays = myBirthDateInMilliSeconds - rightNowInMilliSeconds;

// leftDays = leftDays / (1000 * 60 * 60 * 24  );
// leftDays = Math.floor(leftDays);
// console.log(leftDays);
















// var rightNow = new Date();
// console.log(rightNow);

// rightNow.setFullYear(2006);
// console.log(rightNow);

// rightNow.setHours(21)
// console.log(rightNow);































// var rightNow = new Date(); // Mon May 18 2020 14:12:11 GMT+0500 (Pakistan Standard Time)
// var rightNowInMilliSeconds = rightNow.getTime();
// // console.log(rightNow.getTime()); //


// var myBirthDate = new Date('October 4, 1991');
// var myBirthDateInMilliSeconds = myBirthDate.getTime();


// var leftDays = rightNowInMilliSeconds - myBirthDateInMilliSeconds;

// leftDays = leftDays / (1000 * 60 * 60 * 24 * 365);
// leftDays = Math.round(leftDays);
// console.log(leftDays + " years old");












// // new Date();
// // new Date("October 4, 2020");
// var upcomingBirthday = new Date(1601751600000);
// console.log(upcomingBirthday);

// var dobEl = document.getElementById('dob');
// function getDob() {
//     var dobString = new Date(dobEl.value);
//     dobString = dobString.getTime();
//     console.log(dobString)


//     var rightNow = new Date();
//     var rightNowInMilliSeconds = rightNow.getTime();

//     var leftDays = rightNowInMilliSeconds - dobString;

//     leftDays = leftDays / (1000 * 60 * 60 * 24 * 365);
//     leftDays = Math.round(leftDays);
//     console.log(leftDays + " years old");

// }
























































// var multiStr = "A quick brown fox jumps over the lazy dog. <br /> A quick brown fox jumps over the lazy dog. <br />A quick brown fox jumps over the lazy dog. <br />A quick brown fox jumps over the lazy dog. <br />A quick brown fox jumps over the lazy dog."

// var multiStr = `
// A quick brown fox jumps over the lazy dog.
// A quick brown fox jumps over the lazy dog.
// A quick brown fox jumps over the 
// lazy dog.
// A quick brown fox jumps over the lazy dog.
// A quick brown fox jumps over the lazy dog.`



// "
// A quick brown fox jumps over the lazy dog.
// A quick brown fox jumps over the lazy dog.
// A quick brown fox jumps over the lazy dog.
// A quick brown fox jumps over the lazy dog.
// A quick brown fox jumps over the lazy dog."


































// function getUserName() {
//     var uesrName = prompt('whats your name');
//     var userRoll = prompt('whats your roll number');

//     var userData = {
//         uesrName: uesrName,
//         userRoll: userRoll
//     }

//     return userData;



// }

// var greetUser = 'Welcome ' + getUserName().uesrName; //haider

// console.log(greetUser);





























// (function greetUser(userName) {
//     console.log('welcome ' + userName);
// })('HAIDER')

// () => { }




// function doAsDirected(func) {
//     func();
// }

// doAsDirected(() => { console.log(2 + 2) });

// doAsDirected();

// doAsDirected(() => { console.log(2 * 3) });





















































var userName = 'Haider'

function updateUserName(n) {
    var userName = n;
    console.log(userName);
}


function updateUserNameAgain(n) {
    userName = n;
    console.log(userName)
}

console.log(userName); // Haider

updateUserName("Ali");

console.log(userName); // Haider

updateUserName("Shah");

console.log(userName); // haider

updateUserNameAgain("Ali");

console.log(userName); // Ali

