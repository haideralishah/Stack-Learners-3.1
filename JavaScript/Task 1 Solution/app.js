var num1, num2, operator, sum = 0;
var screen = document.getElementById('screen');

function assignNumber(num) {
    if (operator) {
        if (num2) {
            num2 = num2 + String(num);
        }
        else {
            num2 = num;
        }
        screen.innerHTML = num2;
    }
    else {
        if (num1) {
            num1 = num1 + String(num);
        }
        else {
            num1 = num;
        }
        screen.innerHTML = num1;
    }
}

function assignOperator(operatorName) {
    if (num1) {
        operator = operatorName;
    }
}

function evaluateNumbers() {
    if (operator == "+") {
        sum = num1 + num2;
    }
    else if (operator == "-") {
        sum = num1 - num2;
    }
    else if (operator == "*") {
        sum = num1 * num2;
    }
    else if (operator == "/") {
        sum = num1 / num2;
    }

    screen.innerHTML = sum;
    num1 = undefined, num2 = undefined, operator = undefined, sum = 0;
}

function cancelAssignment(){
    num1 = undefined, num2 = undefined, operator = undefined, sum = 0;
    screen.innerHTML = sum;
}