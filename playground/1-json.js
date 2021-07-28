const fs = require('fs');

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
};

// const bookJSON = JSON.stringify(book);

// console.log(bookJSON);

// const parsedBookJSON = JSON.parse(bookJSON);

// console.log(parsedBookJSON.author);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');

// const dataJSON = dataBuffer.toString();
// console.log(dataBuffer.toString());

// const data = JSON.parse(dataJSON);
// console.log(data);

const fileReadBuffer = fs.readFileSync('1-json.json');

const stringifyFileRead = fileReadBuffer.toString();

const parseStringifyFileRead = JSON.parse(stringifyFileRead);

console.log(parseStringifyFileRead);

parseStringifyFileRead.name = 'test';
parseStringifyFileRead.planet = 'test';
console.log(parseStringifyFileRead);

const stringifyResult = JSON.stringify(parseStringifyFileRead);

fs.writeFileSync('1-json.json', stringifyResult);
