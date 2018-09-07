var person = {
    name: 'Andrew'
};

person.age = 25;

debugger;

person.name = 'Mike';

console.log(person);

// ** Sample debugger exercise **

// in command line: node inspect app.js read --title="to buy"

// type command: c

// type repl command

// type note

// what is happening is we run the first line of code, entering in node (or nodemon), inspect, the main application file(app.js), the command(read),
// and the title(to buy)
// then, it starts the debugger and when we type in the c command it cycles through the code and breaks at debugger in notes.js
// then, we type the repl command and enter note and the debugger returns two key value pairs for title and body

// what we've accomplished I think is that its saying 'yes, note is connected to the function we are debugging (logNote)