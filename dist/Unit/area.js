"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__AreaOf = exports.__Area_of_triangle = exports.__Area_of_rhombus = exports.__Area_of_rectangle = exports.__Area_of_parallelogram = exports.__Area_of_equilateral_triangle = exports.__Area_of_circle = exports.__Area_of_Square = void 0;
const console_1 = require("console");
const Local_1 = require("../Local");
const chalk = require("chalk");
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
function br() {
    return (0, console_1.log)(` `);
}
function __AreaOf(shape) {
    var Shape = shape;
    if (shape == 'square' || shape == 'Square') { //Done!
        (0, console_1.log)(chalk `{dim [Area of Square]}`);
        function f1() {
            const side = prompt('[Side]> ');
            if (side == '') {
                f1();
            }
            else if (side == 'exit') {
                (0, console_1.log)(chalk `{dim PROCESS Exitted With code (err-0x324)}`);
                br();
            }
            else if (isNaN(parseInt(side, 10)) == true) {
                br();
                (0, console_1.log)(chalk `{red.bold Invalid Text Please type in the number, type {white 'exit}' to exit}`);
                br();
                f1();
            }
            else {
                (0, console_1.log)(chalk `{green.bold [[Area of square] : ${(0, Local_1.square)(parseInt(side, 10))}]}`);
            }
        }
        f1();
    }
    else if (shape == 'triangle' || shape == 'Triangle') { //done
        (0, console_1.log)(chalk `{dim [Area of ${shape}]}`);
        function f2_1() {
            const Base = prompt('[Base]> ');
            if (Base == '') {
                f2_1();
            }
            else if (Base == 'exit') {
                (0, console_1.log)(chalk `{dim Process Exitted with code (err-0x435$er)}`);
                br();
            }
            else if (isNaN(parseInt(Base, 10)) == true) {
                (0, console_1.log)(chalk `{red.bold Invalid Text Please type in a number. type {white 'exit'} to exit}`);
                br();
                f2_1();
            }
            else {
                function f2_2() {
                    const Height = prompt('[Height]> ');
                    if (Height == '') {
                        f2_2();
                    }
                    else if (Height == 'exit') {
                        (0, console_1.log)(chalk `{dim Process Exitted with code (err-0x4350$erx)}`);
                        br();
                    }
                    else if (isNaN(parseInt(Height, 10)) == true) {
                        (0, console_1.log)(chalk `{red.bold Invalid Text Please type in a number. type {white 'exit'} to exit}`);
                        br();
                        f2_2();
                    }
                    else {
                        (0, console_1.log)(chalk `{green.bold [[Area of triangle] : ${(1 / 2) * Base * Height}]}`);
                    }
                }
                f2_2();
            }
        }
        f2_1();
    }
    else if (shape == 'rectangle' || shape == 'Rectangle' || shape == 'Parallelogram' || shape == 'parallelogram') { //done 
        (0, console_1.log)(`[Area of ${Shape}]`);
        function f3_1() {
            const Length = prompt('[Length/Height]> ');
            if (Length == '') {
                f3_1();
            }
            else if (Length == 'exit') {
                (0, console_1.log)(chalk `{dim Process Exitted with code (err-0x435$ery)}`);
                br();
            }
            else if (isNaN(parseInt(Length, 10)) == true) {
                (0, console_1.log)(chalk `{red.bold Invalid Text Please type in a number. type {white 'exit'} to exit}`);
                br();
                f3_1();
            }
            else {
                function f3_2() {
                    const Breadth = prompt('[Breadth/Base]> ');
                    if (Breadth == '') {
                        f3_2();
                    }
                    else if (Breadth == 'exit') {
                        (0, console_1.log)(chalk `{dim Process Exitted with code (err-0x435/8$eryswe)}`);
                        br();
                    }
                    else if (isNaN(parseInt(Breadth, 10)) == true) {
                        (0, console_1.log)(chalk `{red.bold Invalid Text Please type in a number. type {white 'exit'} to exit}`);
                        br();
                        f3_2();
                    }
                    else {
                        (0, console_1.log)(chalk `{green.bold [[Area of ${Shape}] : ${Length * Breadth}]}`);
                    }
                }
                f3_2();
            }
        }
        f3_1();
    }
    else if (shape == 'rhombus' || shape == 'Rhombus') { //done
        (0, console_1.log)(chalk `{dim [Area of ${shape}]}`);
        function f4_1() {
            const D1 = prompt('[Diagoinal1]> ');
            if (D1 == '') {
                f4_1();
            }
            else if (D1 == 'exit') {
                (0, console_1.log)(chalk `{dim Process Exitted with code (err-0x435$er)}`);
                br();
            }
            else if (isNaN(parseInt(D1, 10)) == true) {
                (0, console_1.log)(chalk `{red.bold Invalid Text Please type in a number. type {white 'exit'} to exit}`);
                br();
                f4_1();
            }
            else {
                function f4_2() {
                    const Diagonal2 = prompt('[Diagonal2]> ');
                    if (Diagonal2 == '') {
                        f4_2();
                    }
                    else if (Diagonal2 == 'exit') {
                        (0, console_1.log)(chalk `{dim Process Exitted with code (err-0x4350$erx)}`);
                        br();
                    }
                    else if (isNaN(parseInt(Diagonal2, 10)) == true) {
                        (0, console_1.log)(chalk `{red.bold Invalid Text Please type in a number. type {white 'exit'} to exit}`);
                        br();
                        f4_2();
                    }
                    else {
                        (0, console_1.log)(chalk `{green.bold [[Area of Rhombus] : ${D1 * Diagonal2}]}`);
                    }
                }
                f4_2();
            }
        }
        f4_1();
    }
    else if (shape == 'Circle' || shape == 'circle') { // done
        (0, console_1.log)(chalk `{dim [Area of ${shape}]}`);
        function f5() {
            const radii = prompt('[Radius]> ');
            if (radii == '') {
                f5();
            }
            else if (radii == 'exit') {
                (0, console_1.log)(chalk `{dim PROCESS Exitted With code (err-0x324)}`);
                br();
            }
            else if (isNaN(parseInt(radii, 10)) == true) {
                (0, console_1.log)(chalk `{red.bold Invalid Text Please type in the number, type {white 'exit'} to exit}`);
                br();
                f5();
            }
            else {
                (0, console_1.log)(chalk `{green.bold [[Area of Circle] : ${Local_1.PI * (Math.pow(radii, 2))}`);
            }
        }
        f5();
    }
    else if (shape == 'equilateral triangle' || shape == 'Equilateral Triangle' || shape == 'equilateral Triangle' || shape == 'Equilateral triangle') { //done
        (0, console_1.log)(chalk `{dim [Area of ${shape}]}`);
        function f6() {
            const side = prompt('[Side]> ');
            if (side == '') {
                f6();
            }
            else if (side == 'exit') {
                (0, console_1.log)(chalk `{dim PROCESS Exitted With code (err-0x3924)}`);
                br();
            }
            else if (isNaN(parseInt(side, 10)) == true) {
                (0, console_1.log)(chalk `{red.bold Invalid Text Please type in the number, type {white 'exit'} to exit}`);
                br();
                f6();
            }
            else {
                (0, console_1.log)(`[[Area of EQUI_Triangle] : ${((0, Local_1.sqrt)(3) / 4) * (0, Local_1.square)(side)}]`);
            }
        }
        f6();
    }
    else if (shape == 'oval' || shape == 'eclipse' || shape == 'Oval' || shape == 'Eclipse') { // done
        (0, console_1.log)(chalk `{dim [Area of ${shape}]}`);
        function f7_1() {
            const r1 = prompt('[Short Radius]> ');
            if (r1 == '') {
                f7_1();
            }
            else if (r1 == 'exit') {
                (0, console_1.log)(chalk `{dim PROCESS exitted with code 03er}`);
                br();
            }
            else if (isNaN(parseInt(r1, 10)) == true) {
                (0, console_1.log)(chalk `{red.bold Invalid Text Please type in the number, type {white 'exit'} to exit}`);
                br();
                f7_1();
            }
            else {
                function f7_2() {
                    const r2 = prompt('[Long Radius]> ');
                    if (r2 == '') {
                        f7_2();
                    }
                    else if (r2 == 'exit') {
                        (0, console_1.log)(chalk `{dim PROCESS exitted with code 03er}`);
                        br();
                    }
                    else if (isNaN(parseInt(r2, 10)) == true) {
                        (0, console_1.log)(chalk `{red.bold Invalid Text Please type in the number, type {white 'exit'} to exit}`);
                        br();
                        f7_2();
                    }
                    else {
                        (0, console_1.log)(`[[Area of Oval / Eclipse] : ${Local_1.PI * r1 * r2}]`);
                    }
                }
                f7_2();
            }
        }
        f7_1();
    }
    else if (shape == 'pentagon' || shape == 'Pentagon') { //done
        (0, console_1.log)(chalk `{dim [Area of ${shape}]}`);
        function f8() {
            const sid = prompt(`[Side]>> `);
            if (sid == '') {
                f8();
            }
            else if (sid == 'exit') {
                (0, console_1.log)(chalk `{dim PROCESS Exitted With code (err-0x3924)}`);
                br();
            }
            else if (isNaN(parseInt(sid, 10)) == true) {
                (0, console_1.log)(chalk `{red.bold Invalid Text Please type in the number, type {white 'exit'} to exit}`);
                br();
                f8();
            }
            else {
                (0, console_1.log)(`[[Area Of Regular Pentagon] [Side = ${sid}] : ${(1 / 4) * Math.sqrt(5 * (5 + 2 * (Math.sqrt(5)))) * (0, Local_1.square)(sid)}]`);
            }
        }
        f8();
    }
    else if (shape == 'Hexagon' || shape == 'hexagon') {
        (0, console_1.log)(chalk `{dim [Area of ${shape}]}`);
        function f9() {
            const side = prompt(`[Side]: `);
            if (side == '') {
                f9();
            }
            else if (side == 'exit') {
                (0, console_1.log)(chalk `{dim PROCESS Exitted With code (err-0x3924)}`);
                br();
            }
            else if (isNaN(parseInt(side, 10)) == true) {
                (0, console_1.log)(chalk `{red.bold Invalid Text Please type in the number, type {white 'exit'} to exit}`);
                br();
                f9();
            }
            else {
                (0, console_1.log)(`[[Area Of Hexagon] [Side = ${side}] ≈ ${Math.round(((3 * Math.sqrt(3)) / 2) * (0, Local_1.square)(side) * 10000) / 10000}]`);
            }
        }
        f9();
    }
    else if (shape == 'heptagon' || shape == 'Heptagon') {
        (0, console_1.log)(chalk `{dim [Area of ${shape}]}`);
        function f10() {
            const side = prompt(`[Side]: `);
            if (side == '') {
                f10();
            }
            else if (side == 'exit') {
                (0, console_1.log)(chalk `{dim PROCESS Exitted With code (err-0x3924)}`);
                br();
            }
            else if (isNaN(parseInt(side, 10)) == true) {
                (0, console_1.log)(chalk `{red.bold Invalid Text Please type in the number, type {white 'exit'} to exit}`);
                br();
                f10();
            }
            else {
                (0, console_1.log)(`[[Area of Heptagon] [Side = ${side}] ≈ ${(0, Local_1.square)(side) * 3.635}]`);
            }
        }
        f10();
    }
    else {
        (0, console_1.log)(chalk `{red.bold '[ERR 404!] --- Please provide a supported shape.'}`);
    }
}
exports.__AreaOf = __AreaOf;
