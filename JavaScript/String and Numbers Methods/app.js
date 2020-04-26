


// var avgScore = 2.467;

// var avgScoreRoundOff = Math.round(avgScore);

// console.log(avgScoreRoundOff);



/*
Math.floor();
Math.ceil();
*/

// var invoice = 56.1;
// var anOtherInvoice = 56.9;

// console.log(Math.round(invoice)); // 56

// console.log(Math.ceil(invoice)); // 57

// console.log(Math.floor(anOtherInvoice)); // 56






























// var num = -5.9; // -5
// var num1 = -5.1; // -6

// var ceiledNumber = Math.ceil(num);
// var flooredNumber = Math.floor(num1);

// console.log(ceiledNumber);
// console.log(flooredNumber);








































// 1 - 5

// var randomNumber = Math.random() * 5;
// randomNumber = Math.ceil(randomNumber);

// console.log(randomNumber);





// 0 - 10

// var randomNumber = Math.random() * 10;
// randomNumber = Math.floor(randomNumber);

// console.log(randomNumber);


/*
ask user to pick head or tails
generate head or tails using Math.random()
compare generated head or tails with user input
show message in DOM either he won the toss or loss the toss.
*/



// var userPick = prompt('Please pick head or tails');

// var coinResult;
// var generatedNumber = Math.ceil(Math.random() * 2);
// if(generatedNumber === 1 ){
//     coinResult = 'head';
// }
// else{
//     coinResult = 'tails';
// }


// var tossResult = document.getElementById('toss-result');
// if(userPick === coinResult){
//     tossResult.innerHTML = 'You won the toss. It was ' + coinResult
// }
// else{
//     tossResult.innerHTML = 'You loss the toss. It was ' + coinResult
// }


/*

user have 1000 coins initially

first input ask any number from user range 1 to 10
second input ask bid amount

generate random number from 1 to 10

compare uesr input with generated number

if matches then add bid amount in total coins
if does not match then subtract bid amount from total coins

*/




/*
Number()
parseInt()
parseFloat()
*/

// var num = '2.56942';

// var intNum = parseInt(num);
// var floatNum = parseFloat(num);

// console.log(floatNum);



// var sum = 2 * 'Cow';

// console.log(sum);






/*

String()
.toString()

*/

// var num = 2;

// Number()
// String()

// var stNumber = String(num) // num.toString()
// console.log(stNumber, num)









var num = 53.56744455;
num = num.toFixed(3);
console.log(num);














