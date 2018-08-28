console.log('Starting app.js'); // after we type node app.js to start the application it logs 'Starting app.' in the console

const fs = require('fs');
const os = require('os'); // requiring os which is a part of node (does not need to be installed)
const notes = require('./notes.js'); // creating a filepath to notes.js


var res = notes.add(3, 5);
console.log(res);

// var user = os.userInfo();  

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);  