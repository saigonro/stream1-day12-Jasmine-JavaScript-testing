
function whatCanIDrink(age) {
    if (age <= 0) {
        alert("your age is incorrect");
    }
    else if (age <= 14) {
        alert("drink Toddy");
    }
    else if (age <= 18) {
        alert("drink Coke");
    }
    else if (age <= 21) {
        alert("drink beer");
    }
    else if (age <= 130) {
        alert("drink whiskey");
    }
    else {
        alert("Sorry! your age is incorect");
    }
}

function FizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return("FizzBuzz");
    }
    else if (number % 3 === 0 && number % 7 === 0) {
        return("FizzPop");
    }
    else if (number % 5 === 0 && number % 7 === 0) {
        return("BuzzPop");
    }
    else if (number % 3 === 0) {
        return("Fizz");
    }
    else if (number % 5 === 0) {
        return("Buzz");
    }
    else if (number % 7 === 0) {
        return("Pop");
    }
    else if (typeof number != "number") {
        return("Type a number in there!");
    }
    else {
        return(number);
    }
}