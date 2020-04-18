var num1, num2, operator, evaluated;
var screen = document.getElementById('screen');

function assignNumber(num) {
    if (operator) {
        if (num2) {
            num2 = num2 + String(num);
        }
        else if (num !== 0) {
            num2 = String(num)
        }
        screen.innerHTML = num2 || 0;
    }
    else {
        if (num1) {
            num1 = num1 + String(num)
        }
        else if (num !== 0) {
            num1 = String(num)
        }
        screen.innerHTML = num1|| 0;
    }
}

function assignOperator(operatorName) {
    operator = operatorName;
}

function evaluateSum() {
    if (operator == "+") {
        evaluated = Number(num1) + Number(num2)
    }
    else if (operator == "-") {
        evaluated = Number(num1) - Number(num2)
    }
    else if (operator == "*") {
        evaluated = Number(num1) * Number(num2)
    }
    else if (operator == "/") {
        evaluated = Number(num1) / Number(num2)
    }
    screen.innerHTML = evaluated;
}

function cancelOperations() {
    num1 = undefined, num2 = undefined, operator = undefined, evaluated = undefined;
    screen.innerHTML = 0;

}