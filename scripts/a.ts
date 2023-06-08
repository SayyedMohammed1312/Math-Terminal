// Imports
var $ = require('chalk');
const prmpt = require('prompt-sync')();
import {utils} from './utilities/utils'
const log = function(...message: any[]) {
    return console.log(...message)
}

// Class
class test{
    constructor(){
        this.br()
        log($`{green Initializing}`)
        log($`{green [Server]: Server Started}`)
        this.br()
        return this;
    }

    public br(){
        return log(` `)
    }

    public start(): void{
        try {const term:string = prmpt($`{blue [Terminal]: }`)
        if(term == ''){
            this.start()
        } 
        else if(term.toLowerCase() == 'exit'){
            this.br()
            log($`{red.bold Exitted}`)
            this.br()
            process.exit(0)
        }
        else if(term.includes('eval') == true){
            const Eval = term.slice(5)
            try{
                this.br()
                log($`{yellow.bold Given code: {red [${Eval}]}}`);
                this.br()
                log($`{green.bold [JS]: ${eval(Eval)}}`)
            } catch (error) {
                log(error)
            }
            this.br()
            this.start()
        }
        else {
            this.br()
            log($`{blue You typed in ${term}}`)
            this.br()
            this.start()
        }} catch(error) {
            log(error)
        }
    }

    public startA(): void{
        try {const term:string = prmpt.hide($`{blue [Terminal]: }`)
        if(term == ''){
            this.startA()
        } 
        else if(term.toLowerCase() == 'exit'){
            this.br()
            log($`{red.bold Exitted}`)
            this.br()
            process.exit(0)
        }
        else if(term.includes('eval') == true){
            const Eval = term.slice(5)
            this.br()
            log($`{yellow.bold Given code: {[red ${Eval}]}}`);
            this.br()
            try{
                log($`{green.bold [JS]: ${eval(Eval)}}`)
            } catch (error) {
                log(error)
            }
            this.br()
            this.startA()
        }
        else {
            this.br()
            log($`{blue You typed in ${term}}`)
            this.br()
            this.startA()
        }} catch(error) {
            log(error)
        }
    }
}


log($`{red You Sure Want to enter..? You will regret it}`)
log($`{red.bold Enter the type!: [0, 1, 2]}`);
const c = new test()
function a(config?: utils.ability){
    const con = prmpt(`: `)
    

    switch(con){
        case '': 
            a()
            break;

        case '0':
            c.br()
            log($`{red.bold Bad choice}`)
            c.br()
            c.start()
            break;

        case '1':
            c.br()
            log($`{red.bold.bgRed Very Bad Choice!}`)
            log($`{red.bold.bgRed Hidden Mode!}`)
            c.br()
            c.startA()
            break;

        case '2':
            c.br()
            log(`Bye Bye`)
            process.exit(0)

        default:
            c.br()
            log(`Sorry ! wrong!`);
            a()
            process.exit()
    }   

}
