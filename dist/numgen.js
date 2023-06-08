"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genNum = void 0;
const $ = require("chalk");
const console_1 = require("console");
function genNum(digits, sets) {
    const G = Math.round(Math.round(Math.random() * (Math.pow(10, digits))) / (Math.pow(10, digits)) * (Math.pow(10, digits)) * 10) / 10;
    var S = G.toString(10);
    function tmpGenNum(digit) {
        const GS = Math.round(Math.round(Math.random() * (Math.pow(10, digit))) / (Math.pow(10, digit)) * (Math.pow(10, digit)) * 10) / 10;
        var SG = GS.toString(10);
        if (SG.length != digit) {
            SG = SG + `0`;
            const lg = parseInt(SG, 10);
            return (lg);
        }
        else if (SG.length == digit - 2) {
            SG = SG + `00`;
            const lg = parseInt(SG, 10);
            return (lg);
        }
        else {
            return (GS);
        }
    }
    if (sets) {
        (0, console_1.log)($ `{green.bold ${sets} sets of numbers with ${digits} digits}`);
        for (var num = 1; num <= sets; num++) {
            (0, console_1.log)(`${num}.`, tmpGenNum(digits));
        }
    }
    else if (digits >= 16) {
        (0, console_1.log)($ `{red.bold Sorry. Digits Equal to or greater than 16 are not accepted}`, $ `{dim ERR: (cjs.loader:579) _Class, greater_value (x56123ER2c)}`);
    }
    else if (S.length != digits) {
        S = S + '0';
        const c = parseInt(S, 10);
        (0, console_1.log)($ `{dim A number with ${digits} digits: }`, c);
    }
    else {
        (0, console_1.log)($ `{dim A number with ${digits} digits: }`, G);
    }
}
exports.genNum = genNum;
