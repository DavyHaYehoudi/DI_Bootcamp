// Use the exported module in a script.js file.
const largeNumber = require('./main');

// In the script.js file declare a variable const b = 5; and use it to output the sum of the imported module + b
const b = 5;
const sum = b+largeNumber
console.log(sum);


// Part II:
// In a script.js file create a server with http and console.log a message.

let http = require('http');
const server = http.createServer( (req,res) => {
    console.log('I am listening on port 3000');
    res.writeHead(200);
    res.end('My module is:\n'+sum+'\nHi there at the frontend')
}).listen(3000)

//Use the exported module in a script.js file.
const dateTime = require('./main');
console.log(dateTime());

//Create a server with http, set the response header and respond with a message that outputs the current date and time from the exported module.

//Your server should run on http://localhost:8080/
const server2 = http.createServer( (req,res) => {
    console.log('I am listening on port 8080');
    res.writeHead(200);
    res.end('The date and time are currently: '+dateTime())
}).listen(8080)