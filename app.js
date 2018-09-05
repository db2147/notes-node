console.log('Starting app.js'); // after we type node app.js to start the application it logs 'Starting app.' in the console

const fs = require('fs');       // filesystem module which is built into node
const _  = require('lodash');   // npm package we install
const yargs = require('yargs'); // helps with parsing command line arguments

const notes = require('./notes.js'); // creating a const which requires a filepath from notes.js

const argv = yargs.argv;        // creating a const and setting it equal to yargs.argv (like the yargs is parsing the argv)
var command = argv._[0];        // variable set equal to argv which equals yargs.argv; connecting to lodash npm package and passing in the first argument
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {                // add command passes in the title and body of the note when run
    var note = notes.addNote(argv.title, argv.body); 
    if (note) {
        console.log('Note created');
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {   
       console.log('Note title taken');
    }
} else if (command === 'list') {        // lists all notes with nothing passed in as an argument
    notes.getAll();
} else if (command === 'read') {        // reads a specific note and prints the title in the console
    notes.getNote(argv.title);
} else if (command === 'remove') {      // passing in the variable argv as an argument in removeNote(argv holds yargs.argv)
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}