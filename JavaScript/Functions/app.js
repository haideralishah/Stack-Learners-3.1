/*********Functions *********/

// function cookFood(){
//     console.log('food is ready');
// }


// cookFood();
// cookFood();
// cookFood();
// cookFood();






// function sum2Numbers(){
//     var num1 = +prompt('enter a number');
//     var num2 = +prompt('enter another number');
//     console.log(num1 + num2);
// }

// sum2Numbers();
// sum2Numbers();
// sum2Numbers();


































// function breakFast(){
//     console.log("bring me chai anda paratha");
// }

// function bringLunch(){
//     console.log('Tende aur chapati');
// }

// breakFast();
// bringLunch();
// breakFast();































// function cookFood(dishName){
//     console.log("bring me: " + dishName);
// }

// cookFood("Chai Paratha");
// cookFood(5);
// cookFood("Chicken biryani");
// cookFood("Chicken tikka");
// cookFood("tea & biscuits");























// function cookFood(dishName, servingCount){
//     console.log("bring me: " + dishName + " for " + servingCount + " persons");
// }

// cookFood("Chicken biryani", 2);
// cookFood("anda paratha", 5);






























// make a function that takes 2 params and console sum of them

// function sum2Num(num1, num2){
//     console.log(num1 + num2);
// }

// sum2Num(2, 5); // 7
// sum2Num(7, 8); // 15
// sum2Num(13, 12) // 25 


// var userNum1 = +prompt('enter a number')
// var userNum2 = +prompt('enter another number')

// sum2Num(userNum1, userNum2);













// make a function that takes first and last name 
// and greet user as "Welcome " + fullname 
// function greetUser(firstName, lastName){
//     console.log('Welcome ' + firstName + ' ' + lastName);
// }

// var firstName = prompt('what is your first name?');
// var lastName = prompt('what is your last name?');

// greetUser(firstName, lastName);

// greetUser('Tony', 'Stark');





































// function doSomething(){
//     console.log('did something');
// }

// var somethingCalled = doSomething(); //undefined

// var userName = prompt('what is your name?');


















// var userName = prompt('what is your name?'); // 'haider'
// console.log(userName);


// function printUserName(){
//     var user = 'haider';
//     return user;
// }

// var userName = printUserName();
// console.log(userName);











































// make a function that takes first name and last name 
// return full name and then console full name after return



// function fullName(firstName, lastName){
//     // var fullName = firstName + " " + lastName;
//     // return fullName;

//     return firstName + " " + lastName;
// }


// var userFullName = fullName("Haider", "Ali");
// console.log(userFullName);










// make a function that takes 2 numbers 
// return sum and then console that after return


// make a function that takes 2 numbers 
// return subtraction and then console that after return



// function sum(num1, num2){
//     return num1 + num2
// }


// function sub(num1, num2){
//     return num1 - num2
// }

// var add2Num = sum(5, 7); //12
// var sub2Num = sub(5, 7); // -2

// console.log(add2Num, sub2Num);

















// make a function that takes 1 numbers 
// return square and then console that after return

// function square(num){
//     return num * num;
// }

// var squaredNumber = square(7);
// console.log(squaredNumber)






















// a2 + 2ab + b2
// 4 + 2*2*3 + 9
// 4 + 12 + 9
// 25
function square(num){
    return num * num;
}
function openWholeSquare(num1, num2){
    var num1Square = square(num1);
    var num2Square = square(num2);
    var calculatedNumber = num1Square + 2 * num1 * num2 + num2Square;
    return calculatedNumber;
}
var formulatedNumber = openWholeSquare(5, 5); 
console.log(formulatedNumber);

// h2 = b2 + p2

function hypSquare(base, perpendicular){
    var baseSquare = square(base);
    var perpendicularSquare = square(perpendicular);
    return baseSquare + perpendicularSquare;
}
var hypSquared = hypSquare(5, 5);
console.log(hypSquared);