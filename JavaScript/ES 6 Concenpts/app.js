// var userName = 'haider';

// let userName = 'haider';

// const userName = 'haider';
// console.log(userName);

// userName = 'abdullah';

// const userFatherName = 'Shah';

// userFatherName= 'alam'




// let userName = 'haider';

// function changeUserName() {
//     let updatedUserName = prompt('what is your name?'); // ali

//     let userName = updatedUserName;
//     if (userName === 'ali') {
//         // var userName = 'shah'
//         let userName = 'shah'
//     }
//     console.log(userName)
// }

// changeUserName();

// console.log(userName)




















// ()=>{

// }


// var abc = (v) => {
//     console.log(v)
// }


// var abc = (v) => {
//     return v + ' haider';
// };

// let abc = v => v + ' haider';

// // let abc = (v) => { return v + ' haider'; }

// let abc = (v) => {
//     return v + ' haider';
// }
// console.log(abc('hello')); // hello haider












// let abc = () => 'hello' + ' haider 1';


// let abc = (a, b) => a + b;

// console.log(abc('hello ', 'ali')); // hello ali


// let i = 0
// setInterval(() => {
//     console.log('hello ' + i);
//     i++;
// }, 500);































// let userName = `haider ali
// shah
// learning JavaScript
// `;

// let firstName = 'haider';
// let lastName = 'ali';

// // let msg = "hello " + firstName + " " + lastName;

// let msg = `hello ${firstName} ${lastName}. This is your ticket.`

// console.log(msg)











// function greeting(userName, greet = 'hello ') {
//     console.log(greet, userName)
// }


// greeting('haider');
// greeting('haider', 'Eid Mubarak ');


// function f(x, ...y) {
//     // y is an Array
//     console.log(x, y);
// }
// f(3, "hello", true, 1, 'akbar')


// function f(x, y, z, username, flag) {
//     console.log(x, y, z, username, flag);
// }
// // Pass each elem of array as argument
// f(...[1, 2, 3, 'haider', true])











































// class Livingthing {
//     constructor(speci) {
//         this.speciName = speci;
//     }
// }

// var human = new Livingthing('homo sapiens');
// var frog = new Livingthing('rana tagrina');

// console.log(human, frog);















// class Car {
//     constructor(carName, destination) {
//         this.carName = carName;
//         this.destination = destination;
//     }

//     doors = 4;
//     destination;

//     drive() {
//         console.log(`take us to ${this.destination}`);
//     }

// }

// var cultus = new Car('Cultus', 'Clifton');
// // console.log(cultus);
// cultus.drive();















// class Car {
//     constructor(carName, destination) {
//         this.carName = carName;
//         this.destination = destination;
//     }
//     doors = 4;
//     destination;

//     drive() {
//         console.log(`take us to ${this.destination}`);
//     }
// }

// class Civic extends Car {
//     constructor() {
//         super('Civic', 'Clifton');
//     }
//     color = 'red';
//     manufacture = 'Honda';
//     airBag = true;
// }


// class Corolla extends Car {
//     constructor(carName, destination) {
//         super(carName, destination);
//     }
//     color = 'black';
//     manufacture = 'Toyota';
// }

// var civic = new Civic();
// var corolla = new Corolla('Corolla', 'Gulshan');

// console.log(civic, corolla);
// civic.drive();
// corolla.drive();











// let fruits = ['apple', 'banana', 'orange'];


// let [, fruit1, fruit2] = fruits;

// /*
// equal to following
// let fruit1 = fruits[1]
// let fruit2 = fruits[2]
// */


// console.log(fruit1);
// console.log(fruit2);






// let students = ['wahab', 'nasir', 'abdullah'];

// let [wahab, , abdullah] = students;

// console.log(wahab, abdullah)


// let student = {
//     firstName: 'haider',
//     lastName: 'ali',
//     roll: 2643,
//     courseName: 'React JS'
// }


// let { firstName, courseName } = student;


// console.log(`Hello ${firstName}, you are enrolled in ${courseName} course.`)















// import student, { pi, sum } from './module-math.js';

// import student from './module-math.js';

// console.log(pi);

// sum(2, 3);

// console.log(student);


// import * as mathFunc from './module-math.js';

// mathFunc.getCircleArea(5);
// mathFunc.sum(5, 4);




















// 'https://mypricee.com/api/article/:id'

// 'https://mypricee.com/api/user/:username'


/*
method get post, put, delete, 

json
text (html, css or JS code)
file

*/




fetch("https://jsonplaceholder.typicode.com/todos/2")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })














