var fs = require('fs');
var _ = require('underscore-node');

var data = fs.readFileSync('day3data.txt').toString().split('');
var day3 = {};


day3.atLeastOnePresent = function(arr) {
    
    var houses = [[0,0]];
    
    // Santa's co-ordinates
    var x = 0;
    var y = 0;
    
    for(var i = 0; i< arr.length; i++){
        switch(arr[i]){
            case '^':
                x++;
                break;
            case 'v':
                x--;
                break;
            case '>':
                y++;
                break;
            case '<':
                y--;
                break;
        }
        
        houses.push( [x,y] );
    }
    
     var newArray = _.map(houses, function(house){
       return "" + house[0] + '-' + house[1]; 
    });

    return _.uniq(newArray).length;
    
};


day3.partTwo = function(arr) {

    var houses = [[0,0]];

    // Santa's co-ordinates
    var x = 0;
    var y = 0;

    // Robo-Santa's co-ordinates
    var x2 = 0;
    var y2 = 0;

    for(var i = 0; i< arr.length; i++){
        //If direction is odd, update Santa's co-ords
        if(i % 2 !== 0) {
            switch (arr[i]) {
                case '^':
                    x++;
                    break;
                case 'v':
                    x--;
                    break;
                case '>':
                    y++;
                    break;
                case '<':
                    y--;
                    break;
            }
            houses.push([x, y]);

            //If directions is even, update Robo-Santa's co-ords
        } else {
            switch (arr[i]) {
                case '^':
                    x2++;
                    break;
                case 'v':
                    x2--;
                    break;
                case '>':
                    y2++;
                    break;
                case '<':
                    y2--;
                    break;
            }
            houses.push([x2, y2]);
        }
    }

    var newArray = _.map(houses, function(house){
        return "" + house[0] + '-' + house[1];
    });

    return _.uniq(newArray).length;

};


console.log(day3.partTwo(data));

module.exports = day3;