// var userPick = prompt('which property you want to pick?'); //generation

// var laptop = {
//     brand: 'hp',
//     modal: '4740s',
//     generation: '3rd',

// }
// var country = 'pakistan';


// laptop.memory = '8GB';

// laptop['processor'] = 'i5';
// laptop.processor = 'i5';


// console.log(laptop[userPick]);

















// var user = {};

// user[prompt('write property name')] = 'haider';

// console.log(user);


// var user = {
//     username: 'haider',
//     roll: 2643,
//     course: 'JS'
// }


// var laptop = {
//     brand: 'hp',
//     modal: '4740s',
//     generation: '3rd'
// }

// var fruits = ['apple','banana', 'oranges'];

// var cars = {
//     model: "Corolla",
//     price: 500000,
//     Power: "1300cc",
//     company: "Toyota"
// }


// for (var specs in cars) {
//     console.log(specs);
//     console.log(cars[specs]);
// }


// for (var specs in laptop) {
//     console.log(specs);
//     console.log(laptop[specs]);
// }

















// function Student(stName, fatherName, dob, nationlity) {
//     this.name = stName;
//     this.fathername = fatherName;
//     this.dob = dob;
//     this.nationlity = nationlity;
//     this.greetUser = function () {
//         console.log('hello ' + this.name)
//     }
// }

// var st1 = new Student('haider', 'shah alam', 'october 4, 1991', 'pakistan');
// var st2 = new Student('ali', 'shah alam', 'october 4, 1991', 'US');
// var st3 = new Student('shah', 'shah alam', 'october 4, 1991', 'UK');

// st1.greetUser();
// st2.greetUser();
// st3.greetUser();

// console.log(st1.name)

// console.log(st1, st2, st3);


















// var cars = {
//     model: "Corolla",
//     price: 500000,
//     power: "1300cc",
//     company: "Toyota"
// }

// console.log(cars);

// delete cars.price;
// delete cars.company;

// if('company' in cars){
//     console.log('company prop exist in cars object.')
// }

// console.log(cars)

















































var products = [];
var item = {
    name: 'xyz',
    desc: 'xyz',
    price: 250
}


function Product(productName, productDesc, productPrice) {
    this.name = productName;
    this.desc = productDesc;
    this.price = productPrice;

}

Product.prototype.brand = 'HP';
Product.prototype.working = function (num) {
    console.log('it is working fine.' + num);
}

var productObj1 = new Product("laptop", "dell i7", '50000');
var productObj2 = new Product("laptop", "dell i7", '50000');
var productObj3 = new Product("laptop", "dell i7", '50000');

productObj1.working(1);
productObj2.working(2);
productObj3.working(3);

var isPriceExist = "price" in productObj1;
var isBrandExist = "brand" in productObj1;
var isBrandOwnProp = productObj1.hasOwnProperty('brand');

console.log(isPriceExist, isBrandExist, isBrandOwnProp)
// productObj3.brand = 'Dell';
// console.log(productObj3)
// console.log(productObj3.brand)

// function addProduct() {
//     var productObj = new Product(nameEl.value, descEl.value, priceEl.value);
//     products.push()
// }























