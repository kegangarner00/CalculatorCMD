/**
 * @file prompt.js
 * @module prompt
 * @description A simple prompt module to get input from the user using process.stdin.
 * @requires {@link https://nodejs.dev/learn/the-nodejs-fs-module|fs}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Kegan Garner
 * @date 2022/09/05
 * @copyright Copyright © 2022-… by Kegan Garner. All rights reserved
 */

// Internal imports

// External imports
import fs from 'fs';
import path from 'path';

let baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// prompt.
let namespacePrefix = baseFileName + '.';
const term = 13; // carriage return

/**
 * @function prompt
 * @description Prompts the user for some input and returns the input.
 * @param {string} inputData What the prompt should display when asking the user for input.
 * @param {string} inputMetaData Not used for this function.
 * @return {string} A string of whatever input the user gave.
 * @author Kegan Garner
 * @date 2022/09/05
 */
function prompt(inputData, inputMetaData) {
  // let functionName = prompt.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${inputData}`);
  // console.log(`inputMetaData is: ${inputMetaData}`);
  let returnData = '';
  if (inputData) {
    process.stdout.write(inputData);
  }

  let buffer = Buffer.alloc(1024),
    fd = process.platform === 'win32' ? process.stdin.fd : fs.openSync('devtty', 'r'),
    readSize = fs.readSync(0, buffer, 0, 1024);

  // console.log('INPUT: ' + buffer.toString('UTF8', 0, readSize));
  returnData = buffer.toString('UTF8', 0, readSize);
  if (returnData.includes(String.fromCharCode(term))) {
    // Caught the case that the input string contains the global carriage return term.
    // index of the carriage return character:
    // console.log('index of the carriage return character: ' + returnData.indexOf(String.fromCharCode(term)));
    returnData = returnData.slice(0, returnData.indexOf(String.fromCharCode(term)));
  } else if (returnData.includes('\r\n')) {
    // Caught the case that the string includes a carriage return and new line characters.
    returnData = returnData.slice(0, returnData.indexOf('\r\n'));
  }
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  prompt
};