// strings
// numbers
// boolean
// arrays
// objects
// functions
// mathmetical operations 
// prompt alert and console.log
// var
// onclick
// document.getElementById()
// document.getElementById().innerHTML























// var userName = prompt('what is your name?');

// var h1 = document.getElementById('greet-user');

// h1.innerHTML = 'Welcome ' + userName;















// function userMessage(){
//     var message = prompt('write any message');
//     var p = document.getElementById('message');
//     p.innerHTML = message;
// }
























// var age = 20;

// // console.log(age > 14);

// if(age > 14){
//     console.log('You are elegible for classes.');
// }

























// var age = +prompt('what is your age?')

// // console.log(age > 14);

// if(age > 14){
//     console.log('You are elegible for classes.');
// }
// else{
//     console.log('Your are not elegible for classes. \nApply once you are 14 years old.')
// }








































// function checkAge(){
//     var age = +prompt('what is your age?'); 
//     var p = document.getElementById("eligibility-msg");
//     if(age >= 14){
//         p.innerHTML = 'You are elegible for classes.';
//     }
//     else{
//         p.innerHTML = 'You are not elegible for classes. <br /> Please apply once you are 14 years old.'
//     }
// }































// <
// >
// <=
// >=
// ===
// !==


// console.log(14 > 20); // false
// console.log(14 > 10);  // true
// console.log(14 > 14);  // false

// console.log(14 < 20);  //true
// console.log(14 < 10);  //false
// console.log(14 < 14);  // false

// console.log(14 >= 14); // true
// console.log(14 >= 15);  //false

// console.log(14 <= 14); // true
// console.log(14 <= 13); // false





// var age = +prompt('what is your age?');

// if(age === 16){
//     console.log('You are elegible.');
// }




// var allowedRelegion = "Islam";
// var userRelegion = prompt('what is your relegion?');

// if(userRelegion !== allowedRelegion){
//     console.log('Sorry! you are not allowed.');
// }
// else{
//     console.log('Congratulations! You got visa');
// }



















// if(2 - 2 === 4){
//     console.log('insid if');
// }





// if(10 - 5 > 3){
//     console.log('number is divisble by 5');
// }






















// chicken roll
// samose
// chicken petties

// var meal = 'daal';

// if(meal === 'chicken roll'){
//     console.log('bring me chicken roll');
// }
// else if (meal === 'samose'){
//     console.log('bring me samose');
// }
// else if (meal ==='chicken petties'){
//     console.log('bring me chicken petties');
// }
// else{
//     console.log('bring me maggie');
// }





// 80+ A1
// 70+ A
// 60+ B
// 50+ C
// 40+ D
// 33+ E
// Fail





















// function calculateGrade(){
//     var percentage = +prompt('what is your percentage?');
//     var p = document.getElementById('grade');

//     if(percentage >= 80){
//         p.innerHTML = 'You got A+';
//     }
//     else if(percentage >= 70){
//         p.innerHTML = 'You got A';
//     }
//     else if(percentage >= 60){
//         p.innerHTML = 'You got B';
//     }
//     else if(percentage >= 50){
//         p.innerHTML = 'You got C';
//     }
//     else if(percentage >= 40){
//         p.innerHTML = 'You got D';
//     }
//     else if(percentage >= 33){
//         p.innerHTML = 'You got E';
//     }
//     else{
//         p.innerHTML = 'You are failed.';
//     }
// }

















// 5
// 8
// -+*/

// var num1 = +prompt('enter first number');
// var operator = prompt('Please enter anyone + - * /');
// var num2 = +prompt('enter second number');
// var p = document.getElementById('calucated-answer');
// if(operator === "+"){
//     p.innerHTML = num1 + num2
// }
// else if(operator === "-"){
//     p.innerHTML = num1 - num2
// }
// else if(operator === "*"){
//     p.innerHTML = num1 * num2
// }
// else if(operator === "/"){
//     p.innerHTML = num1 / num2
// }
// else{
//     p.innerHTML = 'Something went wrong.'
// }














// &&  and ~ aur
// ||  or  ~ ya

// maggi
// cold drink
// var meal = 'maggie';
// var drink = 'pepsi';

// if(meal === "maggie" && drink === 'pepsi'){
//     console.log('bring me maggi and cold drink');
// }
// else{
//     console.log('bring me soup');
// }


// var snack = 'wavy'
// if(snack === 'Kurkure' || snack === 'Lays'){
//     console.log('bring me kurkure or lays');
// }
// else{
//     console.log('bring me soup');
// }

















// var currentTime = +prompt('what is the time in milltary format?');
// var p = document.getElementById("greet");

// if(currentTime >0 && currentTime < 1200){
//     p.innerHTML = 'Good Morning'
// }
// else if(currentTime >= 1200 && currentTime < 1700){
//     p.innerHTML = 'Good Afternoon'
// }
// else if(currentTime >= 1700 && currentTime < 2100){
//     p.innerHTML = 'Good Evening'
// }
// else if(currentTime >2100){
//     p.innerHTML = 'Good Night'
// }



















// var num1 = +prompt('enter a number');
// var num2 = +prompt('enter another number');
// var p = document.getElementById('greater-number');

// if(num1 > num2){
//     p.innerHTML = num1
// }
// else if(num2 > num1){
//     p.innerHTML = num2
// }
// else if ( num1 === num2){
//     p.innerHTML = 'both numbers are equal';
// }

























var num = +prompt('enter a number');
var p = document.getElementById('greater-number');

if(num > 0){
    p.innerHTML = "num value is in positive";
}
else if(num < 0){
    p.innerHTML = "num value is in negative";
}
else if(num === 0){
    p.innerHTML = "num value is zero";
}









