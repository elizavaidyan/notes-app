const fs = require('fs');
const chalk = require('chalk');
const { title } = require('process');


const addNotes = (title, body) => {   //Adding note to the data store
    const notes = loadNotes();
    //const duplicateNotes = notes.filter((note) => note.title === title)  //Arrow function

    // const duplicateNotes = notes.filter(function(note) {         //Std function format
    //     return note.title === title;
    // })

    const duplicateNote = notes.find((note) => note.title === title)

    debugger
    
    if(!duplicateNote) {   //OR if(duplicateNote === undefined)
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added"));
    } else {
        console.log(chalk.red.inverse("Node title taken!"));
    }
}

const removeNote = (title) => {             //Arrow function
    const notes = loadNotes();
    const noteToKeep = notes.filter((note) => note.title !== title)
    if(notes.length > noteToKeep.length) {
        console.log(chalk.green.inverse("Note Removed"));
        saveNotes(noteToKeep);
    } else {
        console.log(chalk.inverse.red("No Note found"));
    }
       
}

const listNotes = () => {  
    console.log(chalk.inverse("Your Notes"));         //Arrow function
    const notes = loadNotes();
     notes.forEach((note) => {
         console.log(note.title);
     });   
}

const readNote = (title) => {
    const notes = loadNotes();
    const noteFound = notes.find((note) => note.title === title)
    if(noteFound) {
        console.log(chalk.blue.inverse.italic(noteFound.title));
        console.log(noteFound.body);
    } else {
        console.log(chalk.red.inverse("No Note Found"));
    }
}

const saveNotes = (notes) => {  //Arrow function
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {  //returns an array of notes;Arrow function
    try {
        const dataBuffer = fs.readFileSync('notes.json'); //IT works only if there is a file with JSON data
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
    
}

module.exports = {      //Object 
    addNotes : addNotes, //Property : value to the property
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};