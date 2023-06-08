function __KilometersPerHourToMetersPerSec(KMH:number) {
    var mps = KMH * (1000 / 3600);
    return (mps);
}

function __KilometersPerHourToMetersPerMin(KMH:number) {
    var mpm = KMH * (1000 / 60);
    return (mpm);
}

function __MetersPerSecToKilometersPerHour(MPS:number) {
    var KMH = MPS * (3600 / 1000);
    return (KMH);
}

function __MetersPerMinToKilometersPerHour(MPM:number) {
    var KMH = MPM * (60 / 1000);
    return (KMH);
}

function __MilesPerHourToKilometersPerHour(MPH:number) {
    var KMH = MPH * 1.6092;
    return (KMH);
}

function __KilometersPerHourToMilesPerHour(KMH:number) {
    var MPH = KMH / 1.6092;
    return (MPH);
}
export {
    __KilometersPerHourToMetersPerMin,
    __KilometersPerHourToMetersPerSec,
    __KilometersPerHourToMilesPerHour,
    __MetersPerMinToKilometersPerHour,
    __MetersPerSecToKilometersPerHour,
    __MilesPerHourToKilometersPerHour
}