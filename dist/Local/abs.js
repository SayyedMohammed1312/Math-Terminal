"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abs = void 0;
/**
 * Absolute value of number
 * @param number number
 * @returns absolute value of number
 */
function abs(number) {
    return (number <= 0 ? -number : number);
}
exports.abs = abs;
