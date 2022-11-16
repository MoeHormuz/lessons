/* 
To make require,
1- create a variable 
2- Write inside the variable: require("Here put the path of the file you want to make the require from");

Example:
*/

var mod = require("./module.exports");

/* And the way to use it is as follows:
    Type the name of the variable that you put the require in,
     then put a dot and write the name you put when doing the export,
    Examples: */

mod.dreamCar("R8 V10 Plus");

mod.favoriteColor("red");


// To see the result run the current file in CMD