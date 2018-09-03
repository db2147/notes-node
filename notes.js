console.log('Starting notes.js');

var addNote = (title, body) => { // function addNote adds a note; passing in title and body as the arguments
    console.log('Adding note', title, body); // console logging will happen when app.js is run and will print to the screen the text and title/body
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

