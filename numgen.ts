import $ = require("chalk")
import { log } from "console"

function genNum(digits:number, sets?:number){
    const G = Math.round(Math.round(Math.random() * (10**digits)) / (10**digits) * (10**digits) *10) /10
    var S = G.toString(10)
    
    function tmpGenNum(digit:number){
        const GS = Math.round(Math.round(Math.random() * (10**digit)) / (10**digit) * (10**digit) *10) /10
        var SG = GS.toString(10)
        if(SG.length != digit){
            SG = SG + `0`
            const lg= parseInt(SG, 10)
            return (lg)
        } 
        
        else if(SG.length == digit -2){
            SG = SG + `00`
            const lg= parseInt(SG, 10)
            return (lg)
        }
        
        else {
            return (GS)
        }
        
    }

    if(sets) {
        log($`{green.bold ${sets} sets of numbers with ${digits} digits}`)
        for(var num = 1; num <= sets; num++){
            log(`${num}.`, tmpGenNum(digits))
        }
    }
    else if(digits >= 16){
        log($`{red.bold Sorry. Digits Equal to or greater than 16 are not accepted}`, $`{dim ERR: (cjs.loader:579) _Class, greater_value (x56123ER2c)}`)
    }
    else if(S.length != digits){
        S = S+'0'
        const c = parseInt(S,10)
        log($`{dim A number with ${digits} digits: }`, c)
    } 

    
    
    else {
        log($`{dim A number with ${digits} digits: }`, G)
    }
}

export{genNum}