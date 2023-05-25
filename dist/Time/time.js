"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__timeConverter = void 0;
const utils_1 = require("./utils");
/**
 * Converts Time units on your Desire
 *
 * @copyright (C) Sayyed Ali {Module-Mathjs} 2021-2023
 *
 * Use ``from`` for any time units. [Seconds, Minutes, Hours, Days, Years]
 *
 * Use ``to`` for any time units. [Seconds,Minutes,Hors,Days,Years]
 *
 * Use ``value`` To enter how many units you want to convert
 *
 * @param from ```From which unit you want to convert```
 * @param to ```To which unit you want to convert```
 * @param value```How may Units you want to convert```
 *
 *
 *
 * @license MIT License You can Edit your code for personal Desire
 */
function __timeConverter(from, to, value) {
    if (from == 'Sec' || from == 'sec' || from == 'Seconds' || from == 'seconds') {
        if (to == 'minutes' || to == 'Minutes' || to == 'Min' || to == 'min') {
            return (0, utils_1.s1)(value);
        }
        else if (to == 'Hours' || to == 'hours' || to == 'hrs' || to == 'Hrs') {
            return (0, utils_1.s2)(value);
        }
        else if (to == 'Days' || to == 'days') {
            return (0, utils_1.s3)(value);
        }
        else if (to == 'years' || to == 'Years' || to == 'yrs' || to == 'Yrs') {
            return (0, utils_1.s4)(value);
        }
        else {
            return `Not Supported. GO THERE. Stop. Crashed! [Err: 000243S*43]`;
        }
    }
    else if (from == 'Minutes' || from == 'minutes' || from == 'Min' || from == 'min') {
        if (to == 'seconds' || to == 'Seconds' || to == 'sec' || to == 'Sec') {
            return (0, utils_1.m1)(value);
        }
        else if (to == 'Hours' || to == 'hours' || to == 'hrs' || to == 'Hrs') {
            return (0, utils_1.m2)(value);
        }
        else if (to == 'days' || to == 'Days') {
            return (0, utils_1.m3)(value);
        }
        else if (to == 'Years' || to == 'years' || to == 'yrs' || to == 'Yrs') {
            return (0, utils_1.m4)(value);
        }
        else {
            return `Not Supported. GO THERE. Stop. Crashed! [Err: 000243S*44]`;
        }
    }
    else if (from == 'hours' || from == 'Hours' || from == 'hrs' || from == 'Hrs') {
        if (to == 'sec' || to == 'Sec' || to == 'Seconds' || to == 'seconds') {
            return (0, utils_1.h1)(value);
        }
        else if (to == 'min' || to == 'Min' || to == 'Minutes' || to == 'minutes') {
            return (0, utils_1.h2)(value);
        }
        else if (to == 'days' || to == 'Days') {
            return (0, utils_1.h3)(value);
        }
        else if (to == 'years' || to == 'Years' || to == 'yrs' || to == 'Yrs') {
            return (0, utils_1.h4)(value);
        }
        else {
            return `Not Supported. GO THERE. Stop. Crashed! [Err: 000243S*44]`;
        }
    }
    else if (from == 'days' || from == 'Days') {
        if (to == 'Sec' || to == 'sec' || to == 's' || to == 'S') {
            return (0, utils_1.d1)(value);
        }
        else if (to == 'min' || to == 'Min' || to == 'Minutes' || to == 'minutes') {
            return (0, utils_1.d2)(value);
        }
        else if (to == 'hours' || to == 'Hours' || to == 'hrs' || to == 'Hrs') {
            return (0, utils_1.d3)(value);
        }
        else if (to == 'years' || to == 'Years' || to == 'yrs' || to == 'Yrs') {
            return (0, utils_1.d4)(value);
        }
        else {
            return `Not Supported. GO THERE. Stop. Crashed! [Err: 000243S*44]`;
        }
    }
    else if (from == 'years' || from == 'Years' || from == 'yrs' || from == 'Yrs') {
        if (to == 'sec' || to == 'seconds' || to == 'Sec' || to == 'Seconds') {
            return (0, utils_1.y1)(value);
        }
        else if (to == 'min' || to == 'minutes' || to == 'Min' || to == 'Minutes') {
            return (0, utils_1.y2)(value);
        }
        else if (to == 'hours' || to == 'hrs' || to == 'Hours' || to == 'Hrs') {
            return (0, utils_1.y3)(value);
        }
        else if (to == 'days' || to == 'Days') {
            return (0, utils_1.y4)(value);
        }
        else {
            return `Not Supported. GO THERE. Stop. Crashed! [Err: 000243S*44]`;
        }
    }
    else {
        return `Not Supported. GO THERE. Stop. Crashed! [Err: 000243S*44] || from err`;
    }
}
exports.__timeConverter = __timeConverter;
