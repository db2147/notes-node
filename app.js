const fs = require('fs');       // filesystem module which is built into node
const _  = require('lodash');   // npm package we install
const yargs = require('yargs'); // helps with parsing command line arguments

const notes = require('./notes.js'); // creating a const which requires a filepath from notes.js

const argv = yargs
    .command('add', 'Add a new note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'  // in console we can type in -t as an alias for the full --title
        }
    })
    .help()
    .argv;        // creating a const and setting it equal to yargs.argv (like the yargs is parsing the argv)
var command = argv._[0];        // variable set equal to argv which equals yargs.argv; connecting to lodash npm package and passing in the first argument
 
if (command === 'add') {                // add command passes in the title and body of the note when run
    var note = notes.addNote(argv.title, argv.body); 
    if (note) {
        console.log('Note created');
        notes.logNote(note); // our utility function that console logs the title and body to the console
    } else {   
       console.log('Note title taken');
    }
} else if (command === 'list') {        // lists all notes with nothing passed in as an argument
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note)); // calling notes.logNote once for each item in the array
} else if (command === 'read') {        // fetches an individual note
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note);  // utility function that console logs the title and body info to the console
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {      // passing in the variable argv as an argument in removeNote(argv holds yargs.argv)
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found'; // used the ternary operator to check if a note was removed
    console.log(message);
} else {
    console.log('Command not recognized');
}