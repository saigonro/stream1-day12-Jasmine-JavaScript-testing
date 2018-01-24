describe("whatCanIDrink function", function() {
    
    it("should return an alert that says 'your age is incorrect' if the age is less than 0", 
    function() {
        spyOn(window, "alert");
        whatCanIDrink(0);
        expect(window.alert).toHaveBeenCalledWith("your age is incorrect");
    });
    
    it("should return an alert that says 'drink Toddy' if the age is less than 14", 
    function() {
        spyOn(window, "alert");
        whatCanIDrink(10);
        expect(window.alert).toHaveBeenCalledWith("drink Toddy");
    });
    
    it("should return an alert that says 'drink Toddy' if the age is less than 14", 
    function() {
        spyOn(window, "alert");
        whatCanIDrink(14);
        expect(window.alert).toHaveBeenCalledWith("drink Toddy");
    });
    
    it("should return an alert that says 'drink Coke' if the age is less than 18", 
    function() {
        spyOn(window, "alert");
        whatCanIDrink(16);
        expect(window.alert).toHaveBeenCalledWith("drink Coke");
    });
    
    it("should return an alert that says 'drink beer' if the age is less than 21", 
    function() {
        spyOn(window, "alert");
        whatCanIDrink(19);
        expect(window.alert).toHaveBeenCalledWith("drink beer");
    });
    
    it("should return an alert that says 'drink whiskey' if the age is less than 130", 
    function() {
        spyOn(window, "alert");
        whatCanIDrink(39);
        expect(window.alert).toHaveBeenCalledWith("drink whiskey");
    });
});

describe("FizzBuzz function", function() {
    it("should return an alert that says 'FizzBuzz' if the number is divisible by 3 and 5", 
    function() {
        FizzBuzz(15);
        expect(FizzBuzz(15)).toBe("FizzBuzz");
    });
    it("should return an alert that says 'Fizz' if the number is divisible by 3", 
    function() {
        FizzBuzz(6);
        expect(FizzBuzz(6)).toBe("Fizz");
    });
    it("should return an alert that says 'Buzz' if the number is divisible by 5", 
    function() {
        FizzBuzz(10);
        expect(FizzBuzz(10)).toBe("Buzz");
    });
    it("should return an alert that says 'Type a number in there!' if the number is not a number", 
    function() {
        FizzBuzz("blabla");
        expect(FizzBuzz("blabla")).toBe("Type a number in there!");
    });
    it("should return an alert that says 'Pop' if the number is divisible by 7", 
    function() {
        FizzBuzz(14);
        expect(FizzBuzz(14)).toBe("Pop");
    });
    it("should return an alert that says 'FizzPop' if the number is divisible by 3 and 7", 
    function() {
        FizzBuzz(21);
        expect(FizzBuzz(21)).toBe("FizzPop");
    });
    it("should return an alert that says 'BuzzPop' if the number is divisible by 5 and 7", 
    function() {
        FizzBuzz(35);
        expect(FizzBuzz(35)).toBe("BuzzPop");
    });
    it("should return an alert that says 'the number' if the number is divisible by 3 nor by 5", 
    function() {
        FizzBuzz(11);
        expect(FizzBuzz(11)).toBe(11);
    });
});