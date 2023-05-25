"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__AreaOf = exports.__Area_of_triangle = exports.__Area_of_rhombus = exports.__Area_of_rectangle = exports.__Area_of_parallelogram = exports.__Area_of_equilateral_triangle = exports.__Area_of_circle = exports.__Area_of_Square = void 0;
const console_1 = require("console");
const Local_1 = require("../Local");
var prompt = require('prompt-sync')();
function __Area_of_Square(side) {
    return ((Math.pow(side, 2)));
}
exports.__Area_of_Square = __Area_of_Square;
/**
 * Get function area of rectangle
 *
 * @param {number} l length
 * @param {number} b breadth
 */
function __Area_of_rectangle(l, b) {
    return (l * b);
}
exports.__Area_of_rectangle = __Area_of_rectangle;
function __Area_of_parallelogram(Base, height) {
    return (Base * height);
}
exports.__Area_of_parallelogram = __Area_of_parallelogram;
function __Area_of_triangle(Base, height) {
    return ((1 / 2) * Base * height);
}
exports.__Area_of_triangle = __Area_of_triangle;
function __Area_of_circle(radius) {
    return (3.14 * (Math.pow(radius, 2)));
}
exports.__Area_of_circle = __Area_of_circle;
function __Area_of_rhombus(diagonal1, diagonal2) {
    return ((1 / 2) * (diagonal1 * diagonal2));
}
exports.__Area_of_rhombus = __Area_of_rhombus;
function __Area_of_equilateral_triangle(side) {
    return ((Math.sqrt(3) / 4) * (Math.pow(side, 2)));
}
exports.__Area_of_equilateral_triangle = __Area_of_equilateral_triangle;
function __AreaOf(shape) {
    var Shape = shape;
    if (shape == 'square' || shape == 'Square') {
        (0, console_1.log)(`[Area of Square]`);
        const side = prompt('Side> ');
        return (`[[Area of square] : ${(0, Local_1.square)(side)}]`);
    }
    else if (shape == 'triangle' || shape == 'Triangle') {
        (0, console_1.log)('[Area of Triangle]');
        const Base = prompt('Base> ');
        const Height = prompt('Height> ');
        return (`[[Area of triangle] : ${(1 / 2) * Base * Height}]`);
    }
    else if (shape == 'rectangle' || shape == 'Rectangle' || shape == 'Parallelogram' || shape == 'parallelogram') {
        (0, console_1.log)(`[Area of ${Shape}]`);
        const length = prompt('Length/height> ');
        const breadth = prompt('Breadth/base> ');
        return (`[[Area of ${Shape}] : ${length * breadth}]`);
    }
    else if (shape == 'rhombus' || shape == 'Rhombus') {
        (0, console_1.log)('[Area of Rhombus]');
        const D1 = prompt('Diagonal1> '), D2 = prompt('Diagonal2> ');
        return (`[[Area of Rhombus] : ${D1 * D2}]`);
    }
    else if (shape == 'Circle' || shape == 'circle') {
        (0, console_1.log)('[Area of Circle]');
        const radii = prompt('Radius> ');
        return (`[[Area of Circle] : ${Local_1.PI * (0, Local_1.square)(radii)}]`);
    }
    else if (shape == 'equilateral triangle' || shape == 'Equilateral Triangle' || shape == 'equilateral Triangle' || shape == 'Equilateral triangle') {
        (0, console_1.log)('[Area of Equilateral Triangle]');
        const side = prompt('Side> ');
        return (`[[Area of EQUI_Triangle] : ${((0, Local_1.sqrt)(3) / 4) * (0, Local_1.square)(side)}]`);
    }
    else if (shape == 'oval' || shape == 'eclipse' || shape == 'Oval' || shape == 'Eclipse') {
        (0, console_1.log)('[Area of Oval/Eclipse]');
        const r1 = prompt('Short Radius> ');
        const r2 = prompt('Long Radius> ');
        return (`[[Area of Oval / Eclipse] : ${Local_1.PI * r1 * r2}]`);
    }
    else if (shape == 'pentagon' || shape == 'Pentagon') {
        (0, console_1.log)(`[Area Of Regular Pentagon]`);
        const sid = prompt(`[Side]>> `);
        return (`[[Area Of Regular Pentagon] [Side = ${sid}] : ${(1 / 4) * Math.sqrt(5 * (5 + 2 * (Math.sqrt(5)))) * (0, Local_1.square)(sid)}]`);
    }
    else if (shape == 'Hexagon' || shape == 'hexagon') {
        (0, console_1.log)(`[Area Of Hexagon]`);
        const side = prompt(`[Side]: `);
        return (`[[Area Of Hexagon] [Side = ${side}] ≈ ${Math.round(((3 * Math.sqrt(3)) / 2) * (0, Local_1.square)(side) * 10000) / 10000}]`);
    }
    else if (shape == 'heptagon' || shape == 'Heptagon') {
        (0, console_1.log)(`[Area Of Heptagon]`);
        const side = prompt(`[Side]: `);
        return (`[[Area of Heptagon] [Side = ${side}] ≈ ${(0, Local_1.square)(side) * 3.635}]`);
    }
    else {
        return ('[ERR 404!] --- Please provide a supported shape.');
    }
}
exports.__AreaOf = __AreaOf;
