"use strict";
//Seconds converrt
Object.defineProperty(exports, "__esModule", { value: true });
exports.y4 = exports.d4 = exports.h4 = exports.m4 = exports.s4 = exports.y3 = exports.d3 = exports.h3 = exports.m3 = exports.s3 = exports.y2 = exports.d2 = exports.h2 = exports.m2 = exports.s2 = exports.y1 = exports.d1 = exports.h1 = exports.m1 = exports.s1 = void 0;
function s1(unit) {
    return unit / 60;
}
exports.s1 = s1;
function s2(unit) {
    return unit / 3600;
}
exports.s2 = s2;
function s3(unit) {
    const c = 3600 * 24;
    return unit / c;
}
exports.s3 = s3;
function s4(unit) {
    const c = 3600 * 24 * 365;
    return unit / c;
}
exports.s4 = s4;
//Minutes Convert
function m1(unit) {
    return unit * 60;
}
exports.m1 = m1;
function m2(unit) {
    return unit / 60;
}
exports.m2 = m2;
function m3(unit) {
    const c = 60 * 24;
    return unit / c;
}
exports.m3 = m3;
function m4(unit) {
    const c = 60 * 24 * 365;
    return unit / c;
}
exports.m4 = m4;
//Hours Converts
function h1(unit) {
    return unit * 3600;
}
exports.h1 = h1;
function h2(unit) {
    return unit * 60;
}
exports.h2 = h2;
function h3(unit) {
    return unit / 24;
}
exports.h3 = h3;
function h4(unit) {
    return unit / (24 * 365);
}
exports.h4 = h4;
//Days Convers
function d1(unit) {
    const c = 24 * 3600;
    return unit * c;
}
exports.d1 = d1;
function d2(unit) {
    const c = 24 * 60;
    return unit * c;
}
exports.d2 = d2;
function d3(unit) {
    return unit * 24;
}
exports.d3 = d3;
function d4(unit) {
    return unit / 365;
}
exports.d4 = d4;
//Years Convert 
function y1(unit) {
    const c = 365 * 24 * 60 * 60;
    return unit * c;
}
exports.y1 = y1;
function y2(unit) {
    const c = 365 * 24 * 60;
    return unit * c;
}
exports.y2 = y2;
function y3(unit) {
    const c = 365 * 24;
    return unit * c;
}
exports.y3 = y3;
function y4(unit) {
    const c = 365;
    return unit * c;
}
exports.y4 = y4;
