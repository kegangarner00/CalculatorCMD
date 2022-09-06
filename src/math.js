/**
 * @file math.js
 * @module math
 * @description Holds all math funtions.
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Kegan Garner
 * @date 2022/09/05
 * @copyright Copyright © 2022-… by Kegan Garner. All rights reserved
 */

// Internal imports

// External inprts
import path from 'path';

let baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// math.
let namespacePrefix = baseFileName + '.';

/**
 * @function add
 * @description Adds two numbers together and returns the result.
 * @param {integer|double|float} inputData The first value to be added.
 * @param {integer|double|float} inputMetaData The second value to be added. 
 * @author Kegan Garner
 * @date 2022/09/05
 */
function add(inputData, inputMetaData) {
  let functionName = add.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`inputData is: ${inputData}`);
  console.log(`inputMetaData is: ${inputMetaData}`);
  let returnData = 0;
  returnData = inputData + inputMetaData;
  console.log(`returnData is: ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  add
}