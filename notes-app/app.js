const chalk = require('chalk');
const yargs = require('yargs');
const { readNote } = require('./notes.js');
// const getNotes = require('./notes.js');
const notes = require('./notes.js');
yargs.version('1.1.0');

// node app.js add --title="Title" --body="Body"

// Create add command

debugger;

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
  describe: 'Read note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.command({
  command: 'list',
  describe: 'List Notes!',
  handler() {
    notes.listNotes();
  },
});

yargs.parse();
// console.log(yargs.argv);

// add, remove, read, list

/* 
Add two new commands

*/
