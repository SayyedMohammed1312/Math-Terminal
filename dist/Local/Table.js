"use strict";
/**
* This function is used for remembering tables.
*
* Multiply up to INFINITY
*
* @example
* ```
* Table(8, 20);
* 'This is = 8 x 1 = 8... 8 x 20 = 160';
* ```
*
* @param {number} number
* @param {number} upto
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.__table = void 0;
function __table(number, upto) {
    for (var num = 1; num <= upto; num++) {
        console.log(`${number} x ${num} = ${number * num}`);
    }
}
exports.__table = __table;
