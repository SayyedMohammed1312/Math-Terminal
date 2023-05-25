"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__MilesPerHourToKilometersPerHour = exports.__MetersPerSecToKilometersPerHour = exports.__MetersPerMinToKilometersPerHour = exports.__KilometersPerHourToMilesPerHour = exports.__KilometersPerHourToMetersPerSec = exports.__KilometersPerHourToMetersPerMin = void 0;
function __KilometersPerHourToMetersPerSec(KMH) {
    var mps = KMH * (1000 / 3600);
    return (mps);
}
exports.__KilometersPerHourToMetersPerSec = __KilometersPerHourToMetersPerSec;
function __KilometersPerHourToMetersPerMin(KMH) {
    var mpm = KMH * (1000 / 60);
    return (mpm);
}
exports.__KilometersPerHourToMetersPerMin = __KilometersPerHourToMetersPerMin;
function __MetersPerSecToKilometersPerHour(MPS) {
    var KMH = MPS * (3600 / 1000);
    return (KMH);
}
exports.__MetersPerSecToKilometersPerHour = __MetersPerSecToKilometersPerHour;
function __MetersPerMinToKilometersPerHour(MPM) {
    var KMH = MPM * (60 / 1000);
    return (KMH);
}
exports.__MetersPerMinToKilometersPerHour = __MetersPerMinToKilometersPerHour;
function __MilesPerHourToKilometersPerHour(MPH) {
    var KMH = MPH * 1.6092;
    return (KMH);
}
exports.__MilesPerHourToKilometersPerHour = __MilesPerHourToKilometersPerHour;
function __KilometersPerHourToMilesPerHour(KMH) {
    var MPH = KMH / 1.6092;
    return (MPH);
}
exports.__KilometersPerHourToMilesPerHour = __KilometersPerHourToMilesPerHour;
