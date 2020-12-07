
const chalk = require('chalk');
const { string } = require('yargs');
const yargs = require('yargs');

const notes = require('./notes')


//console.log(process.argv);
//Customize yargs version 
yargs.version('1.1.0')

//Create add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : "Note Body",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {     //ES6 fun
        notes.addNotes(argv.title, argv.body);
    }
})

//Create remove command

yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    builder : {
        title : {
            title : "Note Title",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {     //ES6 fun
        notes.removeNote(argv.title);
    } 
})

//Create a read command

yargs.command({
    command : 'read',
    describe : 'read a note',
    handler() { //ES6 fun
        console.log("Reading a note")
    }
})

//Create  a list command

yargs.command({
    command : 'list',
    describe : 'List a note',
    handler() {   //ES6 fun
        console.log("Listing out a note")
    }
})

yargs.parse();
//console.log(yargs.argv);



