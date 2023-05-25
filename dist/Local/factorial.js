"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = void 0;
function factorial(num) {
    const number = num;
    if (num === 0 || num === 1)
        return (`[0! or 1! = ${1}]`);
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    ;
    return (`${number}! = ${num}`);
}
exports.factorial = factorial;
