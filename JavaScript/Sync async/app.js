// testing();

// console.log('1');


// function testing() {
//     console.log('2');
// }

// testing();

// console.log('3');


// 2  1  2  3











// setTimeout(function(){
//     console.log('1');
// },1);



// console.log('3');


// console.log('2');

//3  2   1















// console.log('1');
// function signup(email, pass, callBack) {

//     setTimeout(function () {
//         if(email === 'headeralishah@gmail.com' && pass === '12345678'){
//             callBack();
//         }
//     }, 3000);


// }
// console.log('3');

// signup('headeralishah@gmail.com', '12345678', redirectToTimeline);


// function redirectToTimeline() {
//     // window.location.href = "https://www.google.com";
//     console.log('redirected to timeline');
// }

// console.log('2');
// //1  3  signup  2 
































// function signup(email, pass, callBack, secondCallBack) {

//     setTimeout(function () {
//         if (email === 'headeralishah@gmail.com' && pass === '12345678') {
//             callBack(secondCallBack);
//         }
//     }, 3000);


// }

// signup('headeralishah@gmail.com', '12345678',
//     function (cb) {
//     



























// var firstAsync = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         var randomNumber = Math.ceil((Math.random() * 100));

//         if (randomNumber % 2 === 0) {
//             resolve(randomNumber);
//         }
//         else {
//             reject('it is an odd number.');
//         }

//     }, 1000)
// });


// console.log('1');
// firstAsync
//     .then(function (success) {
//         console.log('first promise worked fine.', success);
//     })
//     .catch(function (error) {
//         console.error('error is: ' + error);
//     });

// console.log('2');


































var signup = new Promise(function (resolve, reject) {
    var randomNumber = Math.ceil((Math.random() * 100));

    if (randomNumber % 2 === 0) {
        resolve(randomNumber);
    }
    else {
        reject('it is an odd number.');
    }

});
console.log('1');
signup
    .then(function (success) {
        console.log(success);
    })
    .catch(function (err) {
        console.error(err);
    });

console.log('2');