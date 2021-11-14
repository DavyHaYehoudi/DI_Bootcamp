// Instructions
// Part I:
// Create a file named main.js that contains a variable const largeNumber = 356; and export the module.

const { timeStamp } = require("console");

const largeNumber = 356;
module.exports =  largeNumber ;

// Part III:
// Create a file named main.js and create a function that returns the current date and time. Export the module.
const dateTime = ()=>{
    return new Date();
}
console.log( dateTime());
module.exports = dateTime;