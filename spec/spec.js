var day1 = require('../day1.js');
var day2 = require('../day2.js');
var day3 = require('../day3.js');



var testData = {
    day1: "(((",
    day1b: "((((())))))((((",
    day1c: "((())((()))))()(())))(((",
    day2: ['2x7x20', '2x7x20'],
    day2b: ['2x3x4', '1x1x10'],
    day3: '^v^v^v^v^v'
};


describe('To what floor do the instructions take Santa?', function() {

    var result;
    beforeEach(function() {
        result = day1.floorCounter(testData.day1);
    });

    it('should return a number', function() {
       expect(typeof result).toEqual('number');
    });
    
    it('should accept one argument', function() {
       expect(day1.floorCounter.length).toEqual(1);
    });
    
    it('should increase or decrease floor based on which kind of bracket appears', function() {
       expect(result).toEqual(3);
    });
    
    it('should tell you the position of the first character that caused you to enter the basement', function() {
       expect(result) 
    });
});

describe('Extra functionality', function() {
    var result;
    beforeEach(function() {
       result = day1.basementCalculator(testData.day1b); 
    });
    
    it('should return a number', function() {
       expect(typeof result).toEqual('number');
    });
    
    it('should accept one argument', function() {
       expect(day1.basementCalculator.length).toEqual(1); 
    });
    
    it('should return the position of the character that causes the player to enter the basement', function() {
        expect(day1.basementCalculator(testData.day1b)).toEqual(11);
    });

    it('should return the position of the character that causes the player to enter the basement', function() {
        expect(day1.basementCalculator(testData.day1c)).toEqual(13);
    });
});


describe('Calculate the amount of wrapping paper needed', function() {
    var result;
    beforeEach(function() {
        result = day2.calculatePaper(testData.day2);
    });
    
    it('should return a number for the totalPaper', function() {
        expect(typeof result).toEqual('number');
    });
    
    it('should accept one argument', function() {
       expect(day2.calculatePaper.length).toEqual(1); 
    });
    
    it('should return the correct amount of paper needed', function() {
       expect(result).toEqual(804); 
    });
    
});

describe('Calculate the amount of ribbon needed', function() {
    var result;
    beforeEach(function() {
        result = day2.calculateRibbon(testData.day2);    
    });
    
    it('should also return a figure for the total ribbon needed', function() {
        expect(typeof result).toEqual('number');
    }); 
    
    it('should accept one argument', function() {
       expect(day2.calculateRibbon.length).toEqual(1); 
    });

    it('should calculate the amount of ribbon needed', function() {
       expect(day2.calculateRibbon(testData.day2b)).toEqual(48);
    });
});

describe('How many houses are visited at least once?', function() {
   var result;
    beforeEach(function() {
       result = day3.atLeastOnePresent(testData.day3); 
    });
    
    it('should return a number', function() {
       expect(typeof result).toEqual('number'); 
    });

    it('should track movements north and south', function() {
        expect(result).toEqual(2);
    });

    it('should track movements north and south', function() {
        expect(day3.atLeastOnePresent('^^^')).toEqual(4);
    });

    it('should track movements north and south', function() {
        expect(day3.atLeastOnePresent('^^vv^^^^')).toEqual(5);
    });
    
    it('should track movements east and west', function() {
        expect(day3.atLeastOnePresent('>>><<<')).toEqual(4);
    });

    it('should track movements N,S,E and W', function() {
        expect(day3.atLeastOnePresent('^^>>vv<<^^>v>>^<vvvv<<^^')).toEqual(16);
    });

    it('should track movements N,S,E and W', function() {
        expect(day3.atLeastOnePresent('^v^v^v^v^v')).toEqual(2);
    });
});