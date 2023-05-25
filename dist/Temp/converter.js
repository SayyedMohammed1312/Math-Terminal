"use strict";
/**
 * Convert tempraturs.
 *
 * Supports Kelvin, Celsius and Farenheit
 * @param from From which unit you want to convert
 * @param to To which unit you want to convert
 * @param value How many units you want to convert
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.__tempConverter = void 0;
function __tempConverter(from, to, value) {
    if (from == 'celsius' || from == 'Celsius') {
        if (to == 'kelvin' || to == 'Kelvin') {
            return (`${(value + 273.15)}°K`);
        }
        else if (to == 'farenheit' || to == 'Farenheit') {
            return (`${(((9 / 5) * value) + 32)}°F`);
        }
        else {
            return ('Nothing');
        }
    }
    else if (from == 'kelvin' || from == 'Kelvin') {
        if (to == 'farenheit' || to == 'Farenheit') {
            return (`${((value - 273.15) * (9 / 5) + (32))}°F`);
        }
        else if (to == 'celsius' || to == 'Celsius') {
            return (`${(value - 273.15)}°C`);
        }
        else {
            return ('Nothing');
        }
    }
    else if (from == 'farenheit' || from == 'Farenheit') {
        if (to == 'celsius' || to == 'Celsius') {
            return (`${((value - 32) * (5 / 9))}°C`);
        }
        else if (to == 'kelvin' || to == 'Kelvin') {
            return (`${((value - 32) * (5 / 9) + (273.15))}°K`);
        }
        else {
            return ('Nothing');
        }
    }
    else {
        return (`ERROR 404!`);
    }
}
exports.__tempConverter = __tempConverter;
