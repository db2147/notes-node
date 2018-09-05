console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try { // fetching of notes
        var notesString = fs.readFileSync('notes-data.json'); // creating a variable to read our json file
        return JSON.parse(notesString);
    } catch (e) {
      return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes)); // saves the data back into the filesystem
};

var addNote = (title, body) => { // our function to add notes
    var notes = fetchNotes();             // our empty array variable
    var note = {                
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title ); // condensed our es6 function to one line; title automatically returned as function result

    if (duplicateNotes.length === 0) { // if note length equals 0, it will push the new note; if not, it will not add the duplicate;
        notes.push(note);              // adds to the array
        saveNotes(notes); // variable uses writeFileSync to write notes to notes-data.json file
        return note;      // returns the new note added, if condition is met
    }
};

var getAll = () => { // function will get all notes; no arguments passed into it; will print text when app.js is run
    console.log('Getting all notes');
};

var getNote = (title) => { // function gets a single note; passed in the title as an argument
    console.log('Getting note', title); // when app.js is run it will print the text and the title to the screen
};

var removeNote = (title) => { // function that passes in the title of the note I want to remove
    console.log('Removing note', title); // when app.js is run the function will print the text and the title to be removed to the screen
};


module.exports = { // exporting our key/value pairs which in es6 can show up as just the first part if they are the same
    addNote,
    getAll,
    getNote,
    removeNote
};

