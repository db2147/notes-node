// var obj = {
//     name: 'David'
// };
// var stringObj = JSON.stringify(obj);  // setting a json method to store the string object
// console.log(typeof stringObj);        // console logged the string object using the typeof operator to make sure it is a string
// console.log(stringObj);

// method 2 example:

// var personString = '{"name": "Andrew","age": 25}';  // created a variable to hold our JSON string info
// var person       = JSON.parse(personString);        // created a second variable to parse our first string
// console.log(typeof person);                         // logging person to the console using the typeof operator which tells us if its a string
// console.log(person);

// going to read the contents back using the fs module
const fs = require('fs');  // requiring filesystem module in node

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};
// originalNoteString
var originalNoteString = JSON.stringify(originalNote);  // our string text which we will parse below
fs.writeFileSync('notes.json', originalNoteString);  // writeFileSync takes two arguments; it creates the file and writes json to it

var noteString = fs.readFileSync('notes.json'); // reading what we just wrote above in writeFileSync; (only takes one argument)
// note
var note = JSON.parse(noteString);  // using JSON.parse and passing in noteString as an argument
console.log(typeof note);
console.log(note.title);