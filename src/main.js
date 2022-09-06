#!/usr/bin/env node

/**
 * @file main.js
 * @module main
 * @description This is the main entry point for the calculatorCMD application.
 * @requires module:math
 * @requires module:prompt
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Kegan Garner
 * @date 2022/09/05
 * @copyright Copyright © 2022-… by Kegan Garner. All rights reserved
 */

// Internal imports
import math from './math.js'
import prompt from './prompt.js';
// External imports
import path from 'path';

let baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// main.
let namespacePrefix = baseFileName + '.';

/**
 * @function application
 * @description This is the main program loop.
 * @return {void}
 * @author Kegan Garner
 * @date 2022/09/05
 */
function application() {
  let functionName = application.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  let commandInput;
  let validEntry1 = false;
  let validEntry2 = false;
  let entry1 = '';
  let entry2 = '';
  console.log('BEGIN main program loop')
  while(programRunning === true) {
    console.log('Please enter a math operation to perform (add, subtract, multiply, divide, factorial): ');
    commandInput = prompt.prompt('>');
    // console.log(`commandInput is: ${commandInput}`);
    if (commandInput.toUpperCase().includes('X') || commandInput.toUpperCase().includes('Q') || 
    commandInput.toUpperCase().includes('EXIT') || commandInput.toUpperCase().includes('Quit')) {
      programRunning = false;
      console.log('END main program loop');
      console.log('Exiting CalculatorCMD app');
      break;
    } else if (commandInput.toUpperCase().includes('ADD') || commandInput.toUpperCase().includes('ADDITION')) {
      while(validEntry1 === false) {
        console.log('Please enter the first value to be added: ');
        entry1 = prompt.prompt('>');
        if (!isNaN(entry1)) {
          validEntry1 = true;
          entry1 = Number(entry1);
          break;
        } else {
          console.log('ERROR: Not a number, please enter a number and try again.');
        }
      } // End-while (validEntry1 === false)
      while(validEntry2 === false) {
        console.log('Please enter the second value to be added: ');
        entry2 = prompt.prompt('>');
        if (!isNaN(entry2)) {
          validEntry2 = true;
          entry2 = Number(entry2);
          break;
        } else {
          console.log('ERROR: Not a number, please enter a number and try again.');
        }
      } // End-while (validEntry2 === false)
      console.log('Sum is: ' + math.add(entry1, entry2));
    }
  } // End-while (programRunning === true)
  console.log(`END ${namespacePrefix}${functionName} function`);
}

// Launch the calculator application!
let programRunning = false;
// Could call a bootstrapper here to do some setup work.
programRunning = true;
application();
