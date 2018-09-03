console.log('Starting app.js'); // after we type node app.js to start the application it logs 'Starting app.' in the console

const fs = require('fs');
const _  = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js'); // creating a const which requires a filepath from notes.js

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
console.log('Process', process.argv);
console.log('Yargs', argv);


if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Reading note');
} else if (command === 'remove') {
    console.log('Removing note');
} else {
    console.log('Command not recognized');
}