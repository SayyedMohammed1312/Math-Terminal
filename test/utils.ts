import {log} from 'console';
var chalk = require('chalk')
export class utils{
    constructor(){
        return this
    }

    public genNum(digits: number, sets?:number){
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
            log(chalk`{green.bold ${sets} sets of numbers with ${digits} digit(s)}`)
            for(var num = 1; num <= sets; num++){
                log(`${num}.`, tmpGenNum(digits))
            }
        }
        else if(S.length != digits){
            S = S+'0'
            const c = parseInt(S,10)
            log(chalk`{dim A number with ${digits} digit(s): }`, c)
        } 



        else {
            log(chalk`{dim A number with ${digits} digit(s): }`, G)
        }
    }
}