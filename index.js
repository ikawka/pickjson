#!/usr/bin/env node

import clipboard from 'clipboardy';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// parse arguments
const argv = yargs(hideBin(process.argv)).argv;

const printOutput = (output) => {
  process.stdout.write(output + ' \n\r');
};

const resp = (json) => {
  let output = '';

  // --key=object.key is present
  if (argv.key) {
    output = argv.key.split('.').reduce(function (last, curr) {
      return last[curr];
    }, json);
  } else {
    output = JSON.stringify(json, null, 2);
  }

  // --copy is present
  if (argv.copy) {
    clipboard.writeSync(output);
  }

  // --noemit is not present
  if (!argv.noemit) {
    printOutput(output);
  }
};

const help = () => {
  console.log('Usage:');
  console.log('  pickjson --key=key.to.value --copy --noemit < file.json');
  console.log('Options:');
  console.log('  key: key to value to print');
  console.log('  copy: copy value to clipboard');
  console.log('  noemit: do not print value');
};

if (argv.help || argv.h || hideBin(process.argv).length === 0) {
  help();
  process.exit(0);
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  try {
    resp(JSON.parse(data));
  } catch (e) {
    printOutput(e.message);
  }
});
