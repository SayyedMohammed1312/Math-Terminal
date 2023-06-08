var prmpt = require('prompt-sync')()
namespace utils{
    export class utils{
        constructor (){
            return this
        }
        
        br() {
            return console.log(` `)
        }
    }
    
    type C1 = 'K_I' | 'K_II' | 'K_III' | 'K_IV' | 'K_V' | 'K_M'
    type C2 = 'C_I' | 'C_II' | 'C_III' | 'C_IV' | 'C_V' | 'C_M'
    type CS = 'KOT_XXVIII' | 'Terror' | 'Realism' | 'AttackStr' | 'Morphx' | 'Creative' | 'Max' | 'True UI' | 'True UE' | 'God Mode'
    type final = `[${C1}]-[${C2}] => ${CS}` | `[${C1}]-[${C2}] => null`
    
    type L1 = 'L_I' | 'L_KO' | 'L_3Es' | 'DOSmode' | 'WinG' | 'ENT'
    type AB = 'Speed' | 'Attack' | 'Defense' | 'Balance' | 'Heavy' | 'FLUXGOD'
    export type ability = `[${L1}] => [${AB}] + [${CS}]` | `[${L1}]:[${AB}] ${final}` |`[${L1}] => [${AB}]`| AB | L1 | final | CS | C1 | C2
    
    export type Options={
        name: string
        haslvl: boolean
        number: number | bigint
        type: ability
    }
    
    export function typical(Options: Options){
        
        console.log(`
        Your Data:
        1. Name: ${Options.name}
        2. Level: ${Options.haslvl}
        3. number: ${Options.number}
        4. type : ${Options.type}
        `)
    }

    export function about(type?: L1, ability?: AB, modifier?:CS) {
        if(type){
            if(ability){
                if(modifier){
                    console.log(`Type ${type} with ability ${ability} and ${modifier} mode`)
                } else {
                    console.log(`Type ${type} with ability ${ability}`)
                }
            } else {
                console.log(`Type ${type}`)
            }
        } else {
            console.log(`Usage: type the three keywords`)
        }
    }

    export type Type = "number" | "string" | "boolean" | "undefined"
    export type value = number | string | boolean | undefined

    export function isType(type: Type, value: value, ans: (value: boolean) => void){
        if(type == 'boolean'){
            typeof value == 'boolean' ? ans(true) : ans(false)
        }
        if(type == 'number'){
            typeof value == 'number' ? ans(true) : ans(false)
        }
        if(type == 'string'){
            typeof value == 'string' ? ans(true) : ans(false)
        }
        if(type == 'undefined'){
            typeof value == 'undefined' ? ans(true) : ans(false)
        }
    }
}

export {
    utils
}