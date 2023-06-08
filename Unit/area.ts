import { log } from "console";
import {square,PI,sqrt} from '../Local'
import chalk = require('chalk')
var prompt = require('prompt-sync')()

function __Area_of_Square(side:number) {
    return ((side ** 2));
}

/**
 * Get function area of rectangle
 * 
 * @param {number} l length
 * @param {number} b breadth
 */

function __Area_of_rectangle(l:number, b:number) {
    return (l * b);
}

function __Area_of_parallelogram(Base:number, height:number) {
    return (Base * height);
}

function __Area_of_triangle(Base:number, height:number) {
    return ((1 / 2) * Base * height)
}

function __Area_of_circle(radius:number) {
    return (3.14 * (radius ** 2));
}

function __Area_of_rhombus(diagonal1:number, diagonal2:number) {
    return ((1 / 2) * (diagonal1 * diagonal2));
}

function __Area_of_equilateral_triangle(side:number) {
    return ((Math.sqrt(3) / 4) * (side ** 2));
}
function br(){
    return log(` `)
}
function __AreaOf(shape: any):void{
    var Shape = shape
    if(shape == 'square' ||shape == 'Square'){ //Done!
        log(chalk`{dim [Area of Square]}`)
        function f1(){const side = prompt('[Side]> ')
        if(side == ''){
            f1()
        }
        else if(side == 'exit'){
            log(chalk`{dim PROCESS Exitted With code (err-0x324)}`)
            br()
        }else if(isNaN(parseInt(side,10)) == true){
            br()
            log(chalk`{red.bold Invalid Text Please type in the number, type {white 'exit}' to exit}`)
            br()
            f1()
        }else {
            log(chalk`{green.bold [[Area of square] : ${square(parseInt(side,10))}]}`)
        }}
        f1()
    } else if(shape == 'triangle' || shape == 'Triangle'){ //done
        log(chalk`{dim [Area of ${shape}]}`)
        
        function f2_1(){const Base = prompt('[Base]> ')
        if(Base == ''){
            f2_1()
        }
        else if(Base == 'exit'){
            log(chalk`{dim Process Exitted with code (err-0x435$er)}`)
            br()
        } else if(isNaN(parseInt(Base,10)) == true){
            log(chalk`{red.bold Invalid Text Please type in a number. type {white 'exit'} to exit}`)
            br()
            f2_1()
        } else {
            function f2_2(){const Height = prompt('[Height]> ');
            if(Height == ''){
                f2_2()
            }
            else if(Height == 'exit'){
                log(chalk`{dim Process Exitted with code (err-0x4350$erx)}`)
                br()
            } else if(isNaN(parseInt(Height,10)) == true) {
                log(chalk`{red.bold Invalid Text Please type in a number. type {white 'exit'} to exit}`)
                br()
                f2_2()
            } else {
                log(chalk`{green.bold [[Area of triangle] : ${(1/2) * Base * Height}]}`)
            }}
            f2_2()
        }}
        f2_1()
    } else if(shape == 'rectangle' || shape == 'Rectangle' || shape == 'Parallelogram' || shape == 'parallelogram') {   //done 
        log(`[Area of ${Shape}]`)
        function f3_1(){const Length = prompt('[Length/Height]> ')
        if(Length == ''){
            f3_1()
        }
        else if(Length == 'exit'){
            log(chalk`{dim Process Exitted with code (err-0x435$ery)}`)
            br()
        } else if(isNaN(parseInt(Length,10)) == true){
            log(chalk`{red.bold Invalid Text Please type in a number. type {white 'exit'} to exit}`)
            br()
            f3_1()
        } else {
            function f3_2(){const Breadth = prompt('[Breadth/Base]> ');
            if(Breadth == ''){
                f3_2()
            }
            else if(Breadth == 'exit'){
                log(chalk`{dim Process Exitted with code (err-0x435/8$eryswe)}`)
                br()
            } else if(isNaN(parseInt(Breadth,10)) == true) {
                log(chalk`{red.bold Invalid Text Please type in a number. type {white 'exit'} to exit}`)
                br()
                f3_2()
            } else {
                log(chalk`{green.bold [[Area of ${Shape}] : ${Length * Breadth}]}`)
            }}
            f3_2()
        }}
        f3_1()
    } else if (shape == 'rhombus' || shape == 'Rhombus'){//done
        log(chalk`{dim [Area of ${shape}]}`)
        function f4_1(){const D1 = prompt('[Diagoinal1]> ')
        if(D1 == ''){
            f4_1()
        }
        else if(D1 == 'exit'){
            log(chalk`{dim Process Exitted with code (err-0x435$er)}`)
            br()
        } else if(isNaN(parseInt(D1,10)) == true){
            log(chalk`{red.bold Invalid Text Please type in a number. type {white 'exit'} to exit}`)
            br()
            f4_1()
        } else {
            function f4_2(){const Diagonal2 = prompt('[Diagonal2]> ');
            if(Diagonal2 == ''){
                f4_2()
            }
            else if(Diagonal2 == 'exit'){
                log(chalk`{dim Process Exitted with code (err-0x4350$erx)}`)
                br()
            } else if(isNaN(parseInt(Diagonal2,10)) == true) {
                log(chalk`{red.bold Invalid Text Please type in a number. type {white 'exit'} to exit}`)
                br()
                f4_2()
            } else {
                log(chalk`{green.bold [[Area of Rhombus] : ${D1 * Diagonal2}]}`)
            }}
            f4_2()
        }}
        f4_1()
    } else if (shape == 'Circle' || shape == 'circle'){// done
        log(chalk`{dim [Area of ${shape}]}`)
        function f5(){const radii = prompt('[Radius]> ')
        if(radii == ''){
            f5()
        }
        else if(radii == 'exit'){
            log(chalk`{dim PROCESS Exitted With code (err-0x324)}`)
            br()
        }else if(isNaN(parseInt(radii,10)) == true){
            log(chalk`{red.bold Invalid Text Please type in the number, type {white 'exit'} to exit}`)
            br()
            f5()
        }else {
            log(chalk`{green.bold [[Area of Circle] : ${PI * (radii**2)}`)
        }}
        f5()
    } else if (shape == 'equilateral triangle' || shape=='Equilateral Triangle' || shape == 'equilateral Triangle' || shape == 'Equilateral triangle'){ //done
        log(chalk`{dim [Area of ${shape}]}`)
        function f6(){const side = prompt('[Side]> ')
        if(side == ''){
            f6()
        }
        else if(side == 'exit'){
            log(chalk`{dim PROCESS Exitted With code (err-0x3924)}`)
            br()
        }else if(isNaN(parseInt(side,10)) == true){
            log(chalk`{red.bold Invalid Text Please type in the number, type {white 'exit'} to exit}`)
            br()
            f6()
        }else {
            log(`[[Area of EQUI_Triangle] : ${(sqrt(3) / 4) * square(side)}]`)
        }}
        f6()
    } else if (shape == 'oval' || shape == 'eclipse' || shape == 'Oval' || shape == 'Eclipse'){// done
        log(chalk`{dim [Area of ${shape}]}`)
        function f7_1(){const r1 = prompt('[Short Radius]> ')
        if(r1 == ''){
            f7_1()
        }
        else if(r1 == 'exit'){
            log(chalk`{dim PROCESS exitted with code 03er}`)
            br()
        } else if(isNaN(parseInt(r1,10)) == true) {
            log(chalk`{red.bold Invalid Text Please type in the number, type {white 'exit'} to exit}`)
            br()
            f7_1()
        } else {
            function f7_2(){const r2 = prompt('[Long Radius]> ')
            if(r2 == ''){
                f7_2()
            }
            else if(r2 == 'exit'){
                log(chalk`{dim PROCESS exitted with code 03er}`)
                br()
            } else if(isNaN(parseInt(r2,10)) == true) {
                log(chalk`{red.bold Invalid Text Please type in the number, type {white 'exit'} to exit}`)
                br()
                f7_2()
            } else {
                log(`[[Area of Oval / Eclipse] : ${PI * r1 * r2}]`)
            }}
            f7_2()
        }}
        f7_1()
    } else if (shape == 'pentagon' || shape == 'Pentagon'){ //done
        log(chalk`{dim [Area of ${shape}]}`)
        function f8(){const sid = prompt(`[Side]>> `)
        if(sid == ''){
            f8()
        }
        else if(sid == 'exit'){
            log(chalk`{dim PROCESS Exitted With code (err-0x3924)}`)
            br()
        }else if(isNaN(parseInt(sid,10)) == true){
            log(chalk`{red.bold Invalid Text Please type in the number, type {white 'exit'} to exit}`)
            br()
            f8()
        }else {
            log(`[[Area Of Regular Pentagon] [Side = ${sid}] : ${(1/4) * Math.sqrt(5*(5+2*(Math.sqrt(5)))) * square(sid)}]`)
        }}
        f8()
    } else if (shape == 'Hexagon' || shape == 'hexagon') {
        log(chalk`{dim [Area of ${shape}]}`)
        function f9(){const side = prompt(`[Side]: `)
        if(side == ''){
            f9()
        }
        else if(side == 'exit'){
            log(chalk`{dim PROCESS Exitted With code (err-0x3924)}`)
            br()
        }else if(isNaN(parseInt(side,10)) == true){
            log(chalk`{red.bold Invalid Text Please type in the number, type {white 'exit'} to exit}`)
            br()
            f9()
        }else {
            log(`[[Area Of Hexagon] [Side = ${side}] ≈ ${Math.round(((3*Math.sqrt(3)) / 2) * square(side) *10000)/10000}]`)
        }}
        f9()
    } else if(shape == 'heptagon' || shape == 'Heptagon') {
        log(chalk`{dim [Area of ${shape}]}`)
        function f10(){const side = prompt(`[Side]: `)
        if(side == ''){
            f10()
        }
        else if(side == 'exit'){
            log(chalk`{dim PROCESS Exitted With code (err-0x3924)}`)
            br()
        }else if(isNaN(parseInt(side,10)) == true){
            log(chalk`{red.bold Invalid Text Please type in the number, type {white 'exit'} to exit}`)
            br()
            f10()
        }else {
            log(`[[Area of Heptagon] [Side = ${side}] ≈ ${square(side) * 3.635}]`)
        }}
        f10()
    }
    
    else {
        log(chalk`{red.bold '[ERR 404!] --- Please provide a supported shape.'}`)
    }
}

export {
    __Area_of_Square,
    __Area_of_circle,
    __Area_of_equilateral_triangle,
    __Area_of_parallelogram,
    __Area_of_rectangle,
    __Area_of_rhombus,
    __Area_of_triangle,
    __AreaOf
}