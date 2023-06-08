/**
* This function is used for remembering tables.
* 
* Multiply up to INFINITY
* 
* @example
* ```
* Table(8, 20);
* 'This is = 8 x 1 = 8... 8 x 20 = 160';
* ```
* 
* @param {number} number 
* @param {number} upto 
*/

function __table(number:number,upto:number) {
    for (var num = 1; num <= upto; num++) {
        console.log(`${number} x ${num} = ${number * num}`)
    }
}

export {__table}