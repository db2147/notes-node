const fs = require('fs');

var fetchNotes = () => { // contains logic we use which can now be re used instead of re created each time
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
    var notes = fetchNotes();    // created a variable inside our function to fetchNotes         
    var note = {                 // created a second variable inside our function with key value pairs
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

var getAll = () => { // function will get all notes; it will return an array of objects
    return fetchNotes();
};

var getNote = (title) => { // function gets a single note; passed in the title as an argument
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title); // filtering the notes whose title is the same as our title
    return filteredNotes.shift(); // our return statement returns the filtered note to us
};

var removeNote = (title) => { // function that passes in the title of the note I want to remove
    var notes = fetchNotes(); // fetch notes 
    var filteredNotes = notes.filter((note) => note.title !== title); // variable to filter notes with title not equal to the title we type
    saveNotes(filteredNotes); // save the newly filteredNotes (writeFileSync writes to the notes-data.json and sends json to the file w json.stringify)

    return notes.length !== filteredNotes.length;
};

var logNote = (note) => { // creating a function to refactor our code based on the the DRY principal: dont repeat yourself
    debugger;
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};


module.exports = { // exporting our key/value pairs which in es6 can show up as just the first part if they are the same
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};

