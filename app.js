
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
            describe : "Note Title",
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
    builder : {   //builder property whose value is an object
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: string
        }
    },
    handler(argv) { //ES6 fun
        notes.readNote(argv.title)
    }
})

//Create  a list command

yargs.command({
    command : 'list',
    describe : 'List Notes',
   
    handler(argv) {     //ES6 fun
        notes.listNotes();
    }
})

yargs.parse();
//console.log(yargs.argv);



