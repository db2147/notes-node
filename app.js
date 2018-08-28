console.log('Starting app.'); // after we type node app.js to start the application it logs 'Starting app.' in the console

const fs = require('fs');
const os = require('os'); // requiring os which is a part of node (does not need to be installed)

var user = os.userInfo(); // if we console log this and run the application it will display user info in the command line

fs.appendFileSync('greetings.txt', `Hello ${user.username}!`); // when the program is run, node will create the 'greetings.txt' file 
                                                               // and add user text info to the new file