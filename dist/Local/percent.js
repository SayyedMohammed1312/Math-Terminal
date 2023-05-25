"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whatPercent = exports.percentOf = void 0;
function percentOf(what, of) {
    return (`${what}% of ${of} = ${(what / 100) * of}`);
}
exports.percentOf = percentOf;
function whatPercent(number, of_number) {
    return (`${number} is ${(number / of_number) * 100}% of ${of_number}`);
}
exports.whatPercent = whatPercent;
