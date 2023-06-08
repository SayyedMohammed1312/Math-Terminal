import {log} from 'console'
import {cube,sqrt,square,PI} from '../Local'
var prompt = require('prompt-sync')()

function __volume_of_cube(side:number ) {
    return (side ** 3);
}

/**
 * Get function volume of cuboid
 * 
 * @param {number} l length
 * @param {number} b breadth
 * @param {number} h height
 */

function __volume_of_cuboid(l:number, b:number, h:number) {
    return (l * b * h);
}

function __volume_of_cylender(radius:number, height:number) {
    return (3.14 * (radius ** 2) * height);
}

function __volume_of_cone(radius:number, height:number) {
    return ((1 / 3) * 3.14 * (radius ** 2) * height);
}

function __volume_of_sphere(radius:number) {
    return ((4 / 3) * 3.14 * (radius ** 3))
}

function __volume_of_hemisphere(radius:number) {
    return ((2 / 3) * 3.14 * (radius ** 3));
}

function __cubeMeter_to_cubeCentimeter(cubeMeter:number) {
    return (((cubeMeter * 100) * 100) * 100);
}

function __cubeCentimeter_to_cubeMeter(cubeCentimeter:number) {
    return (((cubeCentimeter / 100) / 100) / 100)
}

function __cubeMillimeter_to_cubeCentimeter(cubeMillimeter:number) {
    return (((cubeMillimeter / 10) / 10) / 10)
}

function __cubeCentimeter_to_cubeMillimeter(cubeCentimeter:number) {
    return (((cubeCentimeter * 10) * 10) * 10)
}

function __volumeOf(shape:string){
    var Shape = shape
    //Cube
    if(shape == 'cube' ||shape == 'Cube'){
        log(`[Volume of cube]`)
        const side = prompt('Side> ')
        return(`[Volume of cube : ${cube(side)}]`)
    } 
    //Cuboid
    else if(shape == 'Cuboid' || shape == 'cuboid'){
        log('[Volume of Cuboid]')
        const Length = prompt('length> ')
        const Breadth = prompt('Breadth> ')
        const Height = prompt('Height> ');
        return(`[Volume of Cuboid : ${Length*Breadth*Height}]`)
    } 
    //Cylinder
    else if(shape == 'Cylinder' || shape == 'cylinder') {    
        log(`[Volume of ${Shape}]`)
        const radii = prompt('Radius> ')
        const height = prompt('Height> ') 
        return(`[Volume of ${Shape} : ${PI * square(radii) * height}]`)
    } 
    //Cone
    else if (shape == 'Cone' || shape == 'cone'){
        log('[Volume of Cone]')
        const radii = prompt('Radius> ')
        const height = prompt('Height> ')
        return(`Volume of Cone : ${(1/3) * PI * square(radii) * height}`)
    } 
    //Sphere
    else if (shape == 'Sphere' || shape == 'sphere'){
        log('[Volume of Sphere]')
        const radii = prompt('Radius> ')
        return(`Volume of Sphere : ${(4/3) * PI * cube(radii)}`)
    } 
    //Hemisphere
    else if (shape == 'Hemisphere' || shape=='hemisphere'){
        log('Volume Of Hemisphere')
        const Radii = prompt('Radius> ')
        return(`Volume of Hemisphere : ${(2/3) * PI * cube(Radii)}`)
    } 

    else if (shape == 'Tetrahedron' || shape == 'tetrahedron') {
        log(`Volume Of Tetrahedron`)
        const side = prompt(`[Side]: `)
        return(`Volume Of Tetrahedron ≈ ${(side ** 2) / (6*Math.sqrt(2)) }`)
    }
    
    else {
        return('[ERROR 404!] : Please provide a supported shape.')
    }
}


export{
    __volumeOf,
    __volume_of_cone,
    __volume_of_cube,
    __volume_of_cuboid,
    __volume_of_cylender,
    __volume_of_hemisphere,
    __volume_of_sphere,
    __cubeCentimeter_to_cubeMeter,
    __cubeCentimeter_to_cubeMillimeter,
    __cubeMeter_to_cubeCentimeter,__cubeMillimeter_to_cubeCentimeter
}