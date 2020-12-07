const fs = require('fs');
// const book = {
//     title : 'Ego is the enemy',
//     author : 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);

// console.log(bookJSON);
// console.log(bookJSON.title); //bookJSON doesnt have title. book object has title
// console.log(book.title);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData);
// console.log(parsedData.author);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON);
//console.log(dataBuffer);
//console.log(dataJSON);
// console.log(data.title);


const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'Angel';
data.age = 40;

const newDataJSON = JSON.stringify(data);

fs.writeFileSync('1-json.json', newDataJSON);