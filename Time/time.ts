import {d1, d2, d3, d4, h1, h2, h3, h4, m1, m2, m3, m4, s1,s2,s3, s4, y1, y2, y3, y4} from './utils'

/**
 * Converts Time units on your Desire
 * 
 * @copyright (C) Sayyed Ali {Module-Mathjs} 2021-2023
 * 
 * Use ``from`` for any time units. [Seconds, Minutes, Hours, Days, Years]
 *
 * Use ``to`` for any time units. [Seconds,Minutes,Hors,Days,Years]
 * 
 * Use ``value`` To enter how many units you want to convert
 * 
 * @param from ```From which unit you want to convert```
 * @param to ```To which unit you want to convert```
 * @param value```How may Units you want to convert```
 * 
 * 
 * 
 * @license MIT License You can Edit your code for personal Desire
 */



function __timeConverter(from:string, to:string, value:number):number | string {
    if(from == 'Sec' || from == 'sec' || from == 'Seconds' || from == 'seconds'){
        if (to == 'minutes' || to == 'Minutes' || to == 'Min' || to == 'min'){
            return s1(value)
        } else if(to == 'Hours' || to == 'hours' || to == 'hrs' || to == 'Hrs'){
            return s2(value)
        } else if(to == 'Days' || to == 'days'){
            return s3(value)
        } else if (to == 'years' || to == 'Years' || to == 'yrs' || to == 'Yrs'){
            return s4(value)
        }else{
            return `Not Supported. GO THERE. Stop. Crashed! [Err: 000243S*43]`
        }
    } else if(from == 'Minutes' || from == 'minutes' || from == 'Min' || from == 'min'){
        if(to == 'seconds' || to == 'Seconds' || to == 'sec' || to == 'Sec'){
            return m1(value)
        } else if(to == 'Hours' || to == 'hours' || to == 'hrs' || to == 'Hrs'){
            return m2(value)
        } else if(to == 'days' || to == 'Days'){
            return m3(value)
        } else if(to == 'Years' || to == 'years' || to == 'yrs' || to == 'Yrs'){
            return m4(value)
        } else {
            return `Not Supported. GO THERE. Stop. Crashed! [Err: 000243S*44]`
        }
    } else if(from == 'hours' || from == 'Hours' || from == 'hrs' || from == 'Hrs'){
        if(to == 'sec' || to == 'Sec' || to == 'Seconds' || to =='seconds'){
            return h1(value)
        } else if (to == 'min' || to == 'Min' || to == 'Minutes' || to == 'minutes'){
            return h2(value)
        } else if (to == 'days' || to == 'Days'){
            return h3(value)
        } else if (to == 'years' || to == 'Years' || to == 'yrs' || to == 'Yrs'){
            return h4(value)
        } else {
            return `Not Supported. GO THERE. Stop. Crashed! [Err: 000243S*44]`
        }
    } else if (from == 'days' || from == 'Days') {
        if(to == 'Sec' || to == 'sec' || to == 's' || to == 'S'){
            return d1(value)
        } else if(to == 'min' || to == 'Min' || to == 'Minutes' || to == 'minutes'){
            return d2(value)
        } else if(to == 'hours' || to == 'Hours' || to == 'hrs' || to == 'Hrs') {
            return d3(value)
        } else if(to == 'years' || to == 'Years' || to == 'yrs' || to == 'Yrs') {
            return d4(value)
        } else {
            return `Not Supported. GO THERE. Stop. Crashed! [Err: 000243S*44]`
        }
    } else if (from == 'years' || from == 'Years' || from == 'yrs' || from == 'Yrs') {
        if (to == 'sec' || to == 'seconds' || to == 'Sec' || to == 'Seconds'){
            return y1(value)
        } else if (to == 'min' || to == 'minutes' || to == 'Min' || to == 'Minutes') {
            return y2(value)
        } else if (to == 'hours' || to == 'hrs' || to == 'Hours' || to == 'Hrs') {
            return y3(value)
        } else if (to == 'days' || to == 'Days') {
            return y4(value)
        } else {
            return `Not Supported. GO THERE. Stop. Crashed! [Err: 000243S*44]`
        }

    } else {
        return `Not Supported. GO THERE. Stop. Crashed! [Err: 000243S*44] || from err`
    }
}

export{
   __timeConverter
}