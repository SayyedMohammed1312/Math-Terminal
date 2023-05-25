"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__distanceConverter = exports.__Centimeters_To_Millimeters = exports.__Centimeters_To_Meters = exports.__Centimeters_To_KM = exports.__Millimeters_To_Meters = exports.__Millimeters_To_Kilometers = exports.__Millimeters_To_Centimeters = exports.__Miles_To_KM = exports.__Meters_To_Millimeters = exports.__Meters_To_KM = exports.__Meters_To_Centimeters = exports.__Kilometers_To_Millimeters = exports.__KM_To_Miles = exports.__KM_To_Meters = exports.__KM_To_Centimeters = void 0;
function __KM_To_Meters(KM) {
    var Meters = KM * 1000;
    return (Meters);
}
exports.__KM_To_Meters = __KM_To_Meters;
function __Meters_To_KM(Meters) {
    var KM = Meters / 1000;
    return (KM);
}
exports.__Meters_To_KM = __Meters_To_KM;
function __Miles_To_KM(Miles) {
    var KM = Miles * 1.609344;
    return (KM);
}
exports.__Miles_To_KM = __Miles_To_KM;
function __KM_To_Miles(KM) {
    var Miles = KM / 1.609344;
    return (Miles);
}
exports.__KM_To_Miles = __KM_To_Miles;
function __KM_To_Centimeters(KM) {
    var Centimeters = KM * 100000;
    return (Centimeters);
}
exports.__KM_To_Centimeters = __KM_To_Centimeters;
function __Centimeters_To_KM(Centimeters) {
    var KM = Centimeters / 100000;
    return (KM);
}
exports.__Centimeters_To_KM = __Centimeters_To_KM;
function __Meters_To_Centimeters(Meters) {
    var Centimeters = Meters * 100;
    return (Centimeters);
}
exports.__Meters_To_Centimeters = __Meters_To_Centimeters;
function __Centimeters_To_Meters(Centimeters) {
    var Meters = Centimeters / 100;
    return (Meters);
}
exports.__Centimeters_To_Meters = __Centimeters_To_Meters;
function __Millimeters_To_Centimeters(Millimeters) {
    var Centimeters = Millimeters / 10;
    return (Centimeters);
}
exports.__Millimeters_To_Centimeters = __Millimeters_To_Centimeters;
function __Centimeters_To_Millimeters(Centimeters) {
    return (Centimeters * 10);
}
exports.__Centimeters_To_Millimeters = __Centimeters_To_Millimeters;
function __Millimeters_To_Meters(Millimeters) {
    return (Millimeters / 1000);
}
exports.__Millimeters_To_Meters = __Millimeters_To_Meters;
function __Meters_To_Millimeters(Meters) {
    return (Meters * 1000);
}
exports.__Meters_To_Millimeters = __Meters_To_Millimeters;
function __Millimeters_To_Kilometers(Millimeters) {
    return (Millimeters / 1000000);
}
exports.__Millimeters_To_Kilometers = __Millimeters_To_Kilometers;
function __Kilometers_To_Millimeters(Kilometers) {
    return (Kilometers * 1000000);
}
exports.__Kilometers_To_Millimeters = __Kilometers_To_Millimeters;
function __distanceConverter(from, to, value, answerInNumber) {
    if (from == 'KM' || from == 'Kilometers' || from == 'kilometers' || from == 'km') {
        if (to == 'Meters' || to == 'M' || to == 'meters' || to == 'm') {
            return Math.round(value * 1000 * 100) / 100;
        }
        else if (to == 'Miles' || to == 'miles' || to == 'Mi' || to == 'mi') {
            return Math.round(value / 1.60934 * 100) / 100;
        }
        else if (to == 'Centimeters' || to == 'CM' || to == 'centimeters' || to == 'cm') {
            return Math.round(value * 100000 * 100) / 100;
        }
        else if (to == 'Millimiters' || to == 'MM' || to == 'mm' || to == 'millimeters') {
            return Math.round(value * 1000000 * 100) / 100;
        }
        else {
            return `Please provide Supported Unit`;
        }
    }
    else if (from == 'Meters' || from == 'M' || from == 'meters' || from == 'm') {
        if (to == 'KM' || to == 'Kilometers' || to == 'kilometers' || to == 'km') {
            return Math.round(value / 1000 * 100) / 100;
        }
        else if (to == 'Miles' || to == 'miles' || to == 'Mi' || to == 'mi') {
            return Math.round(value / 1609.34 * 100) / 100;
        }
        else if (to == 'Centimeters' || to == 'CM' || to == 'centimeters' || to == 'cm') {
            return Math.round(value * 100 * 100) / 100;
        }
        else if (to == 'Millimiters' || to == 'MM' || to == 'mm' || to == 'millimeters') {
            return Math.round(value * 1000 * 100) / 100;
        }
        else {
            return `Please provide Supported Unit`;
        }
    }
    else if (from == 'Miles' || from == 'miles' || from == 'Mi' || from == 'mi') {
        if (to == 'KM' || to == 'Kilometers' || to == 'kilometers' || to == 'km') {
            return Math.round(value * 1.60934 * 100) / 100;
        }
        else if (to == 'Meters' || to == 'M' || to == 'meters' || to == 'm') {
            return Math.round(value * 1609.34 * 100) / 100;
        }
        else if (to == 'Centimeters' || to == 'CM' || to == 'centimeters' || to == 'cm') {
            return Math.round(value * 160934 * 100) / 100;
        }
        else if (to == 'Millimiters' || to == 'MM' || to == 'mm' || to == 'millimeters') {
            return Math.round(value * 1609340 * 100) / 100;
        }
        else {
            return `Please provide Supported Unit`;
        }
    }
    else if (from == 'Millimeters' || from == 'MM' || from == 'millimeters' || from == 'mm') {
        if (to == 'KM' || to == 'Kilometers' || to == 'kilometers' || to == 'km') {
            return Math.round(value / 1000000 * 100) / 100;
        }
        else if (to == 'Miles' || to == 'miles' || to == 'Mi' || to == 'mi') {
            return Math.round(value / 6.2137e+7 * 100) / 100;
        }
        else if (to == 'Centimeters' || to == 'CM' || to == 'centimeters' || to == 'cm') {
            return Math.round(value / 10 * 100) / 100;
        }
        else if (to == 'Meters' || to == 'M' || to == 'meters' || to == 'm') {
            return Math.round(value / 1000 * 100) / 100;
        }
        else {
            return `Please provide Supported Unit`;
        }
    }
    else if (from == 'Centimeters' || from == 'CM' || from == 'centimeters' || from == 'cm') {
        if (to == 'KM' || to == 'Kilometers' || to == 'kilometers' || to == 'km') {
            return Math.round(value / 100000 * 100) / 100;
        }
        else if (to == 'Miles' || to == 'miles' || to == 'Mi' || to == 'mi') {
            return Math.round(value / 160934 * 100) / 100;
        }
        else if (to == 'Meters' || to == 'M' || to == 'meters' || to == 'm') {
            return Math.round(value / 100 * 100) / 100;
        }
        else if (to == 'Millimiters' || to == 'MM' || to == 'mm' || to == 'millimeters') {
            return Math.round(value * 10 * 100) / 100;
        }
        else {
            return `Please provide Supported Unit`;
        }
    }
    else {
        return `Please provide a Supported Unit`;
    }
}
exports.__distanceConverter = __distanceConverter;
