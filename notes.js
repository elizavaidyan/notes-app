const fs = require('fs');
const chalk = require('chalk');

const getNotes =  function() {
    return "Your notes...";
}

const addNotes = function(title, body) {   //Adding note to the data store
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note) { //calledone time for every note in notes array; returns true if thre is duplicate note else false and stores the filtered array to the duplicateNtes
        return note.title === title;
    })

    if(duplicateNotes.length === 0) {
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

const removeNote = function (title) {
    const notes = loadNotes();
    const noteToKeep = notes.filter(function(note) {
        return note.title !== title;
    })
    if(notes.length > noteToKeep.length) {
        console.log(chalk.green.inverse("Note Removed"));
        saveNotes(noteToKeep);
    } else {
        console.log(chalk.inverse.red("No Note found"));
    }
    
    
    
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function() {  //returns an array of notes
    try {
        const dataBuffer = fs.readFileSync('notes.json'); //IT works only if there is a file with JSON data
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
    
}

module.exports = {      //Object 
    getNotes: getNotes, //Property : value to the property
    addNotes : addNotes,
    removeNote: removeNote
};