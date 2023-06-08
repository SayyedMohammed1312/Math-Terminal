function __KM_To_Meters(KM: number) {
    var Meters = KM * 1000
    return (Meters)
}

function __Meters_To_KM(Meters: number) {
    var KM = Meters / 1000;
    return (KM)
}

function __Miles_To_KM(Miles: number) {
    var KM = Miles * 1.609344;
    return (KM);
}

function __KM_To_Miles(KM: number) {
    var Miles = KM / 1.609344
    return (Miles)
}

function __KM_To_Centimeters(KM: number) {
    var Centimeters = KM * 100000;
    return (Centimeters);
}

function __Centimeters_To_KM(Centimeters: number) {
    var KM = Centimeters / 100000;
    return (KM);
}

function __Meters_To_Centimeters(Meters: number) {
    var Centimeters = Meters * 100;
    return (Centimeters);
}

function __Centimeters_To_Meters(Centimeters: number) {
    var Meters = Centimeters / 100;
    return (Meters);
}

function __Millimeters_To_Centimeters(Millimeters: number) {
    var Centimeters = Millimeters / 10;
    return (Centimeters);
}

function __Centimeters_To_Millimeters(Centimeters: number) {
    return (Centimeters * 10);
}

function __Millimeters_To_Meters(Millimeters: number) {
    return (Millimeters / 1000);
}

function __Meters_To_Millimeters(Meters: number) {
    return (Meters * 1000);
}

function __Millimeters_To_Kilometers(Millimeters: number) {
    return (Millimeters / 1000000);
}

function __Kilometers_To_Millimeters(Kilometers: number) {
    return (Kilometers * 1000000);
}

function __distanceConverter(from: string, to: string, value: number, answerInNumber: true): any {

    if (from == 'KM' || from == 'Kilometers' || from == 'kilometers' || from == 'km') {
        if (to == 'Meters' || to == 'M' || to == 'meters' || to == 'm') {
            return Math.round(value * 1000 * 100) / 100
        } else if (to == 'Miles' || to == 'miles' || to == 'Mi' || to == 'mi') {
            return Math.round(value / 1.60934 * 100) / 100
        } else if (to == 'Centimeters' || to == 'CM' || to == 'centimeters' || to == 'cm') {
            return Math.round(value * 100000 * 100) / 100
        } else if (to == 'Millimiters' || to == 'MM' || to == 'mm' || to == 'millimeters') {
            return Math.round(value * 1000000 * 100) / 100
        } else {
            return `Please provide Supported Unit`
        }
    } else if (from == 'Meters' || from == 'M' || from == 'meters' || from == 'm') {
        if (to == 'KM' || to == 'Kilometers' || to == 'kilometers' || to == 'km') {
            return Math.round(value / 1000 * 100) / 100
        } else if (to == 'Miles' || to == 'miles' || to == 'Mi' || to == 'mi') {
            return Math.round(value / 1609.34 * 100) / 100
        } else if (to == 'Centimeters' || to == 'CM' || to == 'centimeters' || to == 'cm') {
            return Math.round(value * 100 * 100) / 100
        } else if (to == 'Millimiters' || to == 'MM' || to == 'mm' || to == 'millimeters') {
            return Math.round(value * 1000 * 100) / 100
        } else {
            return `Please provide Supported Unit`
        }
    } else if (from == 'Miles' || from == 'miles' || from == 'Mi' || from == 'mi') {
        if (to == 'KM' || to == 'Kilometers' || to == 'kilometers' || to == 'km') {
            return Math.round(value * 1.60934 * 100) / 100
        } else if (to == 'Meters' || to == 'M' || to == 'meters' || to == 'm') {
            return Math.round(value * 1609.34 * 100) / 100
        } else if (to == 'Centimeters' || to == 'CM' || to == 'centimeters' || to == 'cm') {
            return Math.round(value * 160934 * 100) / 100
        } else if (to == 'Millimiters' || to == 'MM' || to == 'mm' || to == 'millimeters') {
            return Math.round(value * 1609340 * 100) / 100
        } else {
            return `Please provide Supported Unit`
        }
    } else if (from == 'Millimeters' || from == 'MM' || from == 'millimeters' || from == 'mm') {
        if (to == 'KM' || to == 'Kilometers' || to == 'kilometers' || to == 'km') {
            return Math.round(value / 1000000 * 100) / 100
        } else if (to == 'Miles' || to == 'miles' || to == 'Mi' || to == 'mi') {
            return Math.round(value / 6.2137e+7 * 100) / 100
        } else if (to == 'Centimeters' || to == 'CM' || to == 'centimeters' || to == 'cm') {
            return Math.round(value / 10 * 100) / 100
        } else if (to == 'Meters' || to == 'M' || to == 'meters' || to == 'm') {
            return Math.round(value / 1000 * 100) / 100
        } else {
            return `Please provide Supported Unit`
        }
    } else if (from == 'Centimeters' || from == 'CM' || from == 'centimeters' || from == 'cm') {
        if (to == 'KM' || to == 'Kilometers' || to == 'kilometers' || to == 'km') {
            return Math.round(value / 100000 * 100) / 100
        } else if (to == 'Miles' || to == 'miles' || to == 'Mi' || to == 'mi') {
            return Math.round(value / 160934 * 100) / 100
        } else if (to == 'Meters' || to == 'M' || to == 'meters' || to == 'm') {
            return Math.round(value / 100 * 100) / 100
        } else if (to == 'Millimiters' || to == 'MM' || to == 'mm' || to == 'millimeters') {
            return Math.round(value * 10 * 100) / 100
        } else {
            return `Please provide Supported Unit`
        }
    } else {
        return `Please provide a Supported Unit`
    }

}

export {
    __KM_To_Centimeters,
    __KM_To_Meters,
    __KM_To_Miles,
    __Kilometers_To_Millimeters,
    __Meters_To_Centimeters,
    __Meters_To_KM,
    __Meters_To_Millimeters,
    __Miles_To_KM,
    __Millimeters_To_Centimeters,
    __Millimeters_To_Kilometers,
    __Millimeters_To_Meters,
    __Centimeters_To_KM,
    __Centimeters_To_Meters,
    __Centimeters_To_Millimeters,
    __distanceConverter
}