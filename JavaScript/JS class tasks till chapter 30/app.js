// var initialCoins = 1000;
// var gameStatusEl = document.getElementById('game-status');
// var initCoinsEl = document.getElementById('init-coins');
// initCoinsEl.innerHTML = initialCoins;

// function playBiddingGame() {
//     var userBidAmount = +prompt('what is your bid amount?');
//     var uesrBidNumber = +prompt('Please bid on a number from 1 to 3');
//     var generatedNumber = generateRandomNumbers();
//     var isBidMatched = compareBidAmount(uesrBidNumber, generatedNumber);
//     showBidMessage(isBidMatched, userBidAmount);
// }

// function generateRandomNumbers() {
//     var genNumber = Math.ceil((Math.random() * 3));
//     return genNumber;
// }

// function compareBidAmount(uesrBidNumber, generatedNumber) {
//     var matched = false;
//     if (uesrBidNumber === generatedNumber) {
//         matched = true;
//     }
//     return matched;
// }

// function showBidMessage(isBidMatched, userBidAmount) {
//     if (isBidMatched) {
//         initialCoins = initialCoins + userBidAmount;
//         initCoinsEl.innerHTML = initialCoins;
//         gameStatusEl.innerHTML = 'Congrats! You won the bid. ' + userBidAmount + ' is added to your account.';
//     }
//     else {
//         initialCoins = initialCoins - userBidAmount;
//         initCoinsEl.innerHTML = initialCoins;
//         gameStatusEl.innerHTML = 'Sorry! You lost the bid. ' + userBidAmount + ' is deducted from your account.';
//     }
// }




















// var paragraph = prompt('type something.');
// var emptyString = '';
// var strings = 'abcdefghijklmnopqrstuvwxyz';
// for (var i = 0; i < paragraph.length; i++) {
//     if (i !== 0) {
//         if (strings.indexOf(paragraph[i - 1]) === -1) {
//             emptyString = emptyString + paragraph[i].toUpperCase();
//         } else { emptyString = emptyString + paragraph[i]; }
//     } else {
//         emptyString = emptyString + paragraph[i].toUpperCase();
//     }
// }

// console.log(emptyString)



























// var userPara = prompt('enter a para');
// userPara = " " + userPara.toLowerCase();
// var startChar, endChar, letterToCap;
// var paraLength = userPara.length;
// for (var i = 0; i < paraLength; i++) {
//     if (userPara[i + 1]) {
//         if (userPara[i] === " " || userPara[i] === "." || userPara[i] === "," || userPara[i] === "?") {
//             startChar = userPara.slice(0, i + 1);
//             endChar = userPara.slice(i + 2);
//             letterToCap = userPara[i + 1].toUpperCase();
//             userPara = startChar + letterToCap + endChar;
//         }

//     }
// }
// console.log(userPara);












var userEmailEl = document.getElementById('email');
var userPasswordEl = document.getElementById('password');
var authStatusEl = document.getElementById('auth-status');
var users = [{ email: "headeralishah@gmail.com", password: "123456" }, { email: "abc@gmail.com", password: "123456" }, { email: "xyz@gmail.com", password: "123456" }];


function registerUser() {
    let user = {
        email: userEmailEl.value,
        password: userPasswordEl.value
    }
    users.push(user);
}

function loginUser() {
    var userInputEmail = userEmailEl.value;
    var uesrInputPassword = userPasswordEl.value;
    var message = '';
    for (var i = 0; i < users.length; i++) {
        var userObj = users[i];

        if (userObj.email === userInputEmail && userObj.password === uesrInputPassword) {
            message = 'User is authorised.';
            break;
        }
        else if (userObj.email === userInputEmail && userObj.password !== uesrInputPassword) {
            message = 'Password is incorrect';
            break;
        }
        else if (userObj.email !== userInputEmail && userObj.password !== uesrInputPassword) {
            message = 'User does not exist.';
        }

    }
    authStatusEl.innerHTML = message;
}










