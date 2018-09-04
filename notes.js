console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => { // our function to add notes
    var notes = [];             // our empty array variable
    var note = {                
        title,
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json'); // creating a variable to read our json file
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    var duplicateNotes = notes.filter((note) => note.title === title ); // condensed our es6 function to one line; title automatically returned as function result

    if (duplicateNotes.length === 0) { // if note length equals 0, it will push the new note; if not, it will not add the duplicate;
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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

