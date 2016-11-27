'use strict';

const readline = require('readline');

process.stdout.write('enter password: ');
process.stdin.setRawMode(true);

let password = '';
const twirler = '|/-\\';
let backspace = '';
let i = 0;
process.stdin.on('data', function passwordHandler(data) {
  data += '';
  if (data === '\n' || data === '\r' || data === '\u0004') {
    process.stdin.pause();
    process.stdin.setRawMode(false);
    process.stdin.removeListener('data', passwordHandler);
    readline.clearLine(process.stdout, -1);
    readline.moveCursor(process.stdout, -(16 + 1), 0);
  } else if (data === '\x7f') {
    password = password.slice(0, -1);
  } else {
    process.stdout.write(`${backspace}${twirler[i++]}`);
    i %= twirler.length;
    backspace = backspace || '\b';
    password += data;
  }
});

process.on('exit', () => console.error('Password:', password));
