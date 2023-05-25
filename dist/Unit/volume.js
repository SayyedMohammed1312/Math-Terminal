"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__cubeMillimeter_to_cubeCentimeter = exports.__cubeMeter_to_cubeCentimeter = exports.__cubeCentimeter_to_cubeMillimeter = exports.__cubeCentimeter_to_cubeMeter = exports.__volume_of_sphere = exports.__volume_of_hemisphere = exports.__volume_of_cylender = exports.__volume_of_cuboid = exports.__volume_of_cube = exports.__volume_of_cone = exports.__volumeOf = void 0;
const console_1 = require("console");
const Local_1 = require("../Local");
var prompt = require('prompt-sync')();
function __volume_of_cube(side) {
    return (Math.pow(side, 3));
}
exports.__volume_of_cube = __volume_of_cube;
/**
 * Get function volume of cuboid
 *
 * @param {number} l length
 * @param {number} b breadth
 * @param {number} h height
 */
function __volume_of_cuboid(l, b, h) {
    return (l * b * h);
}
exports.__volume_of_cuboid = __volume_of_cuboid;
function __volume_of_cylender(radius, height) {
    return (3.14 * (Math.pow(radius, 2)) * height);
}
exports.__volume_of_cylender = __volume_of_cylender;
function __volume_of_cone(radius, height) {
    return ((1 / 3) * 3.14 * (Math.pow(radius, 2)) * height);
}
exports.__volume_of_cone = __volume_of_cone;
function __volume_of_sphere(radius) {
    return ((4 / 3) * 3.14 * (Math.pow(radius, 3)));
}
exports.__volume_of_sphere = __volume_of_sphere;
function __volume_of_hemisphere(radius) {
    return ((2 / 3) * 3.14 * (Math.pow(radius, 3)));
}
exports.__volume_of_hemisphere = __volume_of_hemisphere;
function __cubeMeter_to_cubeCentimeter(cubeMeter) {
    return (((cubeMeter * 100) * 100) * 100);
}
exports.__cubeMeter_to_cubeCentimeter = __cubeMeter_to_cubeCentimeter;
function __cubeCentimeter_to_cubeMeter(cubeCentimeter) {
    return (((cubeCentimeter / 100) / 100) / 100);
}
exports.__cubeCentimeter_to_cubeMeter = __cubeCentimeter_to_cubeMeter;
function __cubeMillimeter_to_cubeCentimeter(cubeMillimeter) {
    return (((cubeMillimeter / 10) / 10) / 10);
}
exports.__cubeMillimeter_to_cubeCentimeter = __cubeMillimeter_to_cubeCentimeter;
function __cubeCentimeter_to_cubeMillimeter(cubeCentimeter) {
    return (((cubeCentimeter * 10) * 10) * 10);
}
exports.__cubeCentimeter_to_cubeMillimeter = __cubeCentimeter_to_cubeMillimeter;
function __volumeOf(shape) {
    var Shape = shape;
    //Cube
    if (shape == 'cube' || shape == 'Cube') {
        (0, console_1.log)(`[Volume of cube]`);
        const side = prompt('Side> ');
        return (`[Volume of cube : ${(0, Local_1.cube)(side)}]`);
    }
    //Cuboid
    else if (shape == 'Cuboid' || shape == 'cuboid') {
        (0, console_1.log)('[Volume of Cuboid]');
        const Length = prompt('length> ');
        const Breadth = prompt('Breadth> ');
        const Height = prompt('Height> ');
        return (`[Volume of Cuboid : ${Length * Breadth * Height}]`);
    }
    //Cylinder
    else if (shape == 'Cylinder' || shape == 'cylinder') {
        (0, console_1.log)(`[Volume of ${Shape}]`);
        const radii = prompt('Radius> ');
        const height = prompt('Height> ');
        return (`[Volume of ${Shape} : ${Local_1.PI * (0, Local_1.square)(radii) * height}]`);
    }
    //Cone
    else if (shape == 'Cone' || shape == 'cone') {
        (0, console_1.log)('[Volume of Cone]');
        const radii = prompt('Radius> ');
        const height = prompt('Height> ');
        return (`Volume of Cone : ${(1 / 3) * Local_1.PI * (0, Local_1.square)(radii) * height}`);
    }
    //Sphere
    else if (shape == 'Sphere' || shape == 'sphere') {
        (0, console_1.log)('[Volume of Sphere]');
        const radii = prompt('Radius> ');
        return (`Volume of Sphere : ${(4 / 3) * Local_1.PI * (0, Local_1.cube)(radii)}`);
    }
    //Hemisphere
    else if (shape == 'Hemisphere' || shape == 'hemisphere') {
        (0, console_1.log)('Volume Of Hemisphere');
        const Radii = prompt('Radius> ');
        return (`Volume of Hemisphere : ${(2 / 3) * Local_1.PI * (0, Local_1.cube)(Radii)}`);
    }
    else if (shape == 'Tetrahedron' || shape == 'tetrahedron') {
        (0, console_1.log)(`Volume Of Tetrahedron`);
        const side = prompt(`[Side]: `);
        return (`Volume Of Tetrahedron ≈ ${(Math.pow(side, 2)) / (6 * Math.sqrt(2))}`);
    }
    else {
        return ('[ERROR 404!] : Please provide a supported shape.');
    }
}
exports.__volumeOf = __volumeOf;
