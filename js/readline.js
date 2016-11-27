'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Welcome to naughts & crosses\nPress return to start: ',
});

let handler;

const signUpOrIn = function () {

};

const start = function () {
  handler = signUpOrIn;
};

handler = start;

rl.prompt();

rl.on('line', function (line) {
  if (!handler(line)) {
    rl.setPrompt(' > ');
    console.log(`Received: ${line}`);
    rl.prompt();
  } else {
    rl.close();
  }
});
