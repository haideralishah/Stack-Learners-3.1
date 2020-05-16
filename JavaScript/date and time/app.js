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












var today = new Date();
var doomsday = new Date("June 30, 2035");

var todayTime = today.getTime();
var doomsdayTime = doomsday.getTime();

// console.log(todayTime);
// console.log(doomsdayTime);

var differenceInMilliseconds = doomsdayTime - todayTime;
var leftDaysForDoomsday = differenceInMilliseconds / (1000 * 60 * 60 * 24)
leftDaysForDoomsday = Math.floor(leftDaysForDoomsday);

console.log(leftDaysForDoomsday);




/*

1. how many days have passed since your birthday?
2. how many day have passed since your last birth date?
3. how many days are left for your coming birt date?

*/


