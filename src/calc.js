let Calculator = function() {
    this.value = 0;
    this.firstNumber = true;
}

Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    }
    else {
        alert("Argument must be a number");
    }
}

Calculator.prototype.sub = function(number) {
    if (typeof(number) == "number") {
        if(this.value == 0 && this.firstNumber) {
            this.value = number;
        }
        else {
            this.value -= number;
        }
        this.firstNumber = false;
    }
    else {
        alert("Argument must be a number");
    }
}

Calculator.prototype.mult = function(number) {
    if (typeof(number) == "number") {
        if(this.value == 0 && this.firstNumber) {
            this.value = number;
        }
        else {
            this.value *= number;
        }
        this.firstNumber = false;
    }
    else {
        alert("Argument must be a number");
    }
}

Calculator.prototype.div = function(number) {
    if (typeof(number) == "number") {
        if (number == 0) {
            alert("You can't divide by 0");
        }
        else if (this.value == 0) {
            this.value = number;
        }
        else {
            this.value /= number;
        }
        this.firstNumber = false;
    }
    else {
        alert("Argument must be a number");
    }
}



// function addition(number1, number2) {
//     let result;
//     if(typeof(number1) != "number" || typeof(number2) != "number") {
//         result = "Error!";
//         alert("Arguments must both be a number!");
//     }
//     else {
//         result = number1 + number2;
//     }
//     return result;
// }