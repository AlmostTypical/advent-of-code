var fs = require('fs');

var data = fs.readFileSync('day2data.txt').toString().split("\n");


var day2 = {};


day2.calculatePaper = function(input) {

    var totalPaper = 0;
    
    var regEx = /x/g;
    var lwh, l, w, h, side1, side2, side3;
    
    for(var i =0; i<input.length; i++){
        
        lwh = input[i].toString().split(regEx);
        l = parseInt(lwh[0]);
        w = parseInt(lwh[1]);
        h = parseInt(lwh[2]);

        side1 = l*h;
        side2 = l*w;
        side3 = h*w;
        
        totalPaper += Math.min(side1, side2, side3);
        
        totalPaper += (2*side1)+(2*side2)+(2*side3);

    }
    
    return totalPaper;
};


day2.calculateRibbon = function(input){
    
    var totalRibbon = 0;

    var bow, wrapAround, lwh, l, w, h;
    
    var regEx = /x/g;
    
    for(var i = 0; i< input.length; i++){

        
        lwh = input[i].toString().split(regEx);
        l = parseInt(lwh[0]);
        w = parseInt(lwh[1]);
        h = parseInt(lwh[2]);
        
        bow = l*w*h;
        
        totalRibbon += bow;
        
        wrapAround = 2*l + 2*w + 2*h - 2*(Math.max(l, w, h));
        
        totalRibbon += wrapAround;
        
    }
    
    return totalRibbon;
    
};


module.exports = day2;