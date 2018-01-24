function areaOfCircle(n) {
    if (typeof n != "number") {
        return("Type a number in there!");
    }
    else if (n < 0) {
        return("No negative numbers please!");
    }
    else {
        let result = 3.1416 * (n * n);
        return Number(result.toFixed(2));
    }
}

function squareRoot(n) {
    if (typeof n != "number") {
        return("Type a number in there!");
    }
    else if (n < 0) {
        return("No negative numbers please!");
    }
    else {
        let result = Math.sqrt(n);
        return Number(result.toFixed(2));
    }
}

function squareMe(n) {
    if (typeof n != "number") {
        return("Type a number in there!");
    }
    let result = n * n;
    return Number(result.toFixed(2));
}

function cubeMe(n) {
    if (typeof n != "number") {
        return("Type a number in there!");
    }
    let result = n * n * n;
    return Number(result.toFixed(2));
}

// Area of triangle

function areaOfTriangle(b, h) {
    if (typeof b != "number" || typeof h != "number") {
        return("Type a number in there!");
    }
    else if (b <= 0 || h <= 0) {
        return "no negative numbers";
    }
    else {
        let result = (b * h) / 2;
        return Number(result.toFixed(2));
    }
}

function yearCalculate(theyear) {
    if (typeof theyear != "number") {
        return("Type a number in there!");
    }
    else if (theyear > 2018) {
        return("you must enter the year before 2018");
    }
    else {
        let currentYear = 2018;
        let yearsLeft = currentYear - theyear;
        return(yearsLeft);
    }
}

yearCalculate(2020);