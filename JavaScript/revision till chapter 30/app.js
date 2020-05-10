// math.random
// form reload
// string.length


// checkbox or radio button value picks


// string to number and number to string



// var genNumber = Math.ceil(Math.random() * 6);
// console.log(genNumber);


// var userName = 'haider ali';

// console.log(userName.length);











// var usernameEl = document.getElementById('username'); //''
// var passwordEl = document.getElementById('password'); //

// function register() {
//     console.log(usernameEl.value, passwordEl.value, '====')
// }



















var totalInvoiceEl = document.getElementById('totalinvoice');
var discountEl = document.getElementById('discount');
var message = document.getElementById('message');

var totalInvoiceText = document.getElementById('total-invoice');
var discountGiven = document.getElementById('discount-given');
var discountAmountEl = document.getElementById('discount-amount');
var discountBill = document.getElementById('discount-bill');



function calculateAmount() {
    var totalInvoice = totalInvoiceEl.value;
    var discount = discountEl.value;
    if (isNaN(totalInvoice) || isNaN(discount)) {
        message.innerHTML = "Wrong input entered.";
    }
    else {
        var discountAmount = Number(totalInvoice) * Number(discount) / 100;
        var finalInvoice = totalInvoice - discountAmount

        totalInvoiceText.innerHTML = "Total Price: " + totalInvoice;
        discountGiven.innerHTML = "Discount Given: " + discount;
        discountAmountEl.innerHTML = "Discount Amount: " + discountAmount;
        discountBill.innerHTML = "Discounted Bill: " + finalInvoice;

        totalInvoiceEl.value = '';
        discountEl.value = '';
    }
}










