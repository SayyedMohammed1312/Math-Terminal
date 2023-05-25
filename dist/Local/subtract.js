"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = void 0;
function subtract(number, num2) {
    return (number > num2 ? number - num2 : `Will be in negative ${number - num2}`);
}
exports.subtract = subtract;
