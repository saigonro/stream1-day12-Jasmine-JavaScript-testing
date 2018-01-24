describe("Calculator", function() {
    
    beforeEach(function() {
        calc = new Calculator();
    });
    
    let calc = new Calculator();
    
    describe("Addition function", function() {
        it("should add two numbers together and return the result", function() {
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });
        it("should not return 4 if the numbers don't add up to 4", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert");
            calc.add("Beeblebrox");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
    
    describe("Subtract function", function() {
        it("should subtract one number from another and return the result", function() {
            calc.sub(10);
            calc.sub(5);
            expect(calc.value).toBe(5);
        });
        it("should not return 5 if the subtract result doesn't equal 5", function() {
            calc.sub(15);
            calc.sub(6);
            expect(calc.value).toBe(9);
        });
        it("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert");
            calc.sub("Beeblebrox");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
    
    describe("Multiplication function", function() {
        it("should multiply two numbers together and return the result", function() {
            calc.mult(3);
            calc.mult(4);
            expect(calc.value).toBe(12);
        });
        it("should not return 12 if the multiplication result doesn't equal 12", function() {
            calc.mult(5);
            calc.mult(6);
            expect(calc.value).toBe(30);
        });
        it("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert");
            calc.mult("Nonumber");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
    
    describe("Division function", function() {
        it("should divide two numbers together and return the result", function() {
            calc.div(6);
            calc.div(2);
            expect(calc.value).toBe(3);
        });
        it("should not return 3 if the division result doesn't equal 3", function() {
            calc.div(20);
            calc.div(4);
            expect(calc.value).toBe(5);
        });
        it("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert");
            calc.div("Nonumber");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
        it("should return error if try to divide a number by zero", function() {
            // calc.div(5);
            spyOn(window, "alert");
            calc.div(5);
            calc.div(0);
            expect(window.alert).toHaveBeenCalledWith("You can't divide by 0");
        });
    });
    
});



// describe("Calculator", function() {
//     describe("Addition function", function() {
//         it("should return 42", function() {
//             expect(addition(20, 22)).toBe(42);
//         });
//         it("should not return 42 if the parameters don't add up to 42", function() {
//             expect(addition(2, 2)).toBe(4);
//         });
//         it("should return an error if the parameters are not numbers", function() {
//             expect(addition("vogon", "earth")).toBe("Error!");
//         });
//         it("should display an alert box if there is an error", function() {
//             spyOn(window, "alert");
//             addition("Zaphod", 42);
//             expect(window.alert).toHaveBeenCalledWith("Arguments must both be a number!");
//         });
//     });
// });