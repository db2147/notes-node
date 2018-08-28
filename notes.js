console.log('Starting notes.js');

module.exports.addNote = () => { 
    console.log('addNote');       // this console.log will let us know that the addNote function was called
    return 'New note';
}

module.exports.add = (a, b) => { // our two arguments our function is taking are a and b
    return(a + b);
}

// create a new function called add
// it will take two arguments, a and b
// it will add them together and return the result