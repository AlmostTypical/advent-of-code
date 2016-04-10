var fs = require('fs');

var data = fs.readFileSync('day1data.txt').toString().split('');



var day1 = {};

day1.floorCounter = function(data) {
    
    var whichFloor = 0;

    for(var i = 0; i<data.length; i++){
        data[i] === "(" ? whichFloor++ : whichFloor--;
    }

    return whichFloor;
};



day1.basementCalculator = function(data) {
    
    var goUp = 0;
    var goDown = 0;
    
    for(var i=0; i<data.length; i++){
        data[i] === "(" ? goUp++ : goDown++;
        if(goDown > goUp){
            return i+1;
        }
    }
    
};


console.log(day1.basementCalculator(data));

module.exports = day1;