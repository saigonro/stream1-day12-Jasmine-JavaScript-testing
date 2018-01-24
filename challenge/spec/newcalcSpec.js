describe("Extra calculator functions", function() {
    describe("Area function", function() {
        it("should return 'Type a number in there!' if n is not a number", function() {
            expect(areaOfCircle("blabla")).toBe("Type a number in there!");
        });
        it("should return 'No negative numbers please!' if n is a negative number", function() {
            expect(areaOfCircle(-2)).toBe("No negative numbers please!");
        });
        it("should return 314.16 for a circle with radius 10", function() {
            expect(areaOfCircle(10)).toBe(314.16);
        });
        it("should return 78.54 for a circle with radius 5", function() {
            expect(areaOfCircle(5)).toBe(78.54);
        });
    });
    
    describe("Square Root function", function() {
        it("should return 'Type a number in there!' if n is not a number", function() {
            expect(squareRoot("blabla")).toBe("Type a number in there!");
        });
        it("should return 3 for square root of 9", function() {
            expect(squareRoot(9)).toBe(3);
        });
    });
    
    describe("Square function", function() {
        it("should return 'Type a number in there!' if n is not a number", function() {
            expect(squareMe("blabla")).toBe("Type a number in there!");
        });
        it("should return 9 as the square of 3", function() {
            expect(squareMe(3)).toBe(9);
        });
    });
    
    describe("Cube function", function() {
        it("should return 'Type a number in there!' if n is not a number", function() {
            expect(cubeMe("blabla")).toBe("Type a number in there!");
        });
        it("should return 27 as the cube of 3", function() {
            expect(cubeMe(3)).toBe(27);
        });
    });
    
    describe("areaOfTriangle function", function() {
        it("should return error 'no negative numbers' if b or/and h are 0 or negative numbers", function() {
            expect(areaOfTriangle(-3, 4)).toBe("no negative numbers");
        });
        it("should return error 'Type a number in there!' if b or/and h are not numbers", function() {
            expect(areaOfTriangle("blabla", 4)).toBe("Type a number in there!");
        });
        it("should return return the result if b and h are positive numbers", function() {
            expect(areaOfTriangle(3, 4)).toBe(6);
        });
    });
    
    describe("yearCalculate function", function() {
        it("should return 'you must enter the year before 2018' if the year is over 2018", function() {
            expect(yearCalculate(2023)).toBe("you must enter the year before 2018");
        });
        it("should return error 'Type a number in there!' if year is not numbers", function() {
            expect(yearCalculate("blabla")).toBe("Type a number in there!");
        });
        it("should return the result if year is a number lower than 2018", function() {
            expect(yearCalculate(2016)).toBe(2);
        });
    });
});