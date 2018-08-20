console.log('Starting app.');

const fs = require('fs');
const os = require('os'); // requiring os which is a part of node (does not need to be installed)

fs.appendFileSync('greetings.txt', 'Hello world!');