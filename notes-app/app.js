const chalk = require('chalk');
const yargs = require('yargs');
// const getNotes = require('./notes.js');
const notes = require('./notes.js');
yargs.version('1.1.0');

// node app.js remove add --title="Title" --body="Body"

// Create add command

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create read command

yargs.command({
  command: 'read',
  describe: 'Read notes',
  handler() {
    console.log('Read notes!');
  },
});

yargs.command({
  command: 'list',
  describe: 'List Notes!',
  handler() {
    console.log('List commands');
  },
});

yargs.parse();
// console.log(yargs.argv);

// add, remove, read, list

/* 
Add two new commands

*/
