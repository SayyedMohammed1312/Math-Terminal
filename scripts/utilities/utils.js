"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
var prmpt = require('prompt-sync')();
var utils;
(function (utils_1) {
    class utils {
        constructor() {
            return this;
        }
        br() {
            return console.log(` `);
        }
    }
    utils_1.utils = utils;
    function typical(Options) {
        console.log(`
        Your Data:
        1. Name: ${Options.name}
        2. Level: ${Options.haslvl}
        3. number: ${Options.number}
        4. type : ${Options.type}
        `);
    }
    utils_1.typical = typical;
    function about(type, ability, modifier) {
        if (type) {
            if (ability) {
                if (modifier) {
                    console.log(`Type ${type} with ability ${ability} and ${modifier} mode`);
                }
                else {
                    console.log(`Type ${type} with ability ${ability}`);
                }
            }
            else {
                console.log(`Type ${type}`);
            }
        }
        else {
            console.log(`Usage: type the three keywords`);
        }
    }
    utils_1.about = about;
    function isType(type, value, ans) {
        if (type == 'boolean') {
            typeof value == 'boolean' ? ans(true) : ans(false);
        }
        if (type == 'number') {
            typeof value == 'number' ? ans(true) : ans(false);
        }
        if (type == 'string') {
            typeof value == 'string' ? ans(true) : ans(false);
        }
        if (type == 'undefined') {
            typeof value == 'undefined' ? ans(true) : ans(false);
        }
    }
    utils_1.isType = isType;
})(utils || (utils = {}));
exports.utils = utils;
