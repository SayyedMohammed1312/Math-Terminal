//Seconds converrt

function s1(unit:any){
    return unit/60
}

function s2(unit:any){
    return unit/3600
}

function s3(unit:any){
    const c = 3600*24
    return unit/c
}

function s4(unit:any) {
    const c = 3600*24*365
    return unit/c
}

//Minutes Convert
function m1(unit:any) {
    return unit * 60
}

function m2(unit:any) {
    return unit/60
}

function m3(unit:any){
    const c = 60*24
    return unit/c
}

function m4(unit:any){
    const c = 60*24*365
    return unit/c
}

//Hours Converts
function h1(unit:any){
    return unit *3600
}

function h2(unit:any){
    return unit * 60
}

function h3(unit:any){
    return unit / 24
}

function h4(unit:any){
    return unit / (24*365)
}

//Days Convers

function d1(unit:any){
    const c = 24*3600
    return unit * c
}

function d2(unit:any){
    const c = 24*60
    return unit*c
}

function d3(unit:any){
    return unit * 24
}

function d4(unit:any){
    return unit/365
}

//Years Convert 

function y1(unit:any){
    const c = 365*24*60*60
    return unit*c
}

function y2(unit:any){
    const c = 365*24*60
    return unit*c
}

function y3(unit:any) {
    const c = 365 * 24
    return unit*c
}

function y4(unit:any){
    const c = 365
    return unit*c
}

export {
    s1,m1,h1,d1,y1,
    s2,m2,h2,d2,y2,
    s3,m3,h3,d3,y3,
    s4,m4,h4,d4,y4
}