console.log('Starting app.js'); // after we type node app.js to start the application it logs 'Starting app.' in the console

const fs = require('fs');
const os = require('os'); // requiring os which is a part of node (does not need to be installed)
const notes = require('./notes.js'); // creating a const which requires a filepath from notes.js


var res = notes.add(3, 5); // the idea is we are importing a function from notes.js that adds two numbers (arguments)
console.log('Result:', res);

// var user = os.userInfo();  

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);  