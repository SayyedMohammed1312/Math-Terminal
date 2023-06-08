//imports

var {log} = require('console')
var {
    __AreaOf,
    __volumeOf,
    __distanceConverter, 
    __tempConverter , 
    __table, 
    __timeConverter, 
    __moneyConverter, 
    abs, 
    factorial, 
    square,
    sqrt,
    cube,
    cbrt,
    power,
    addInverse
} = require('../dist/index.js')
var prompt = require('prompt-sync')()
var $ = require(`chalk`)
var passwordhash = require(`bcrypt`)
var _progress = require('cli-progress');
var {utils} = require('./utils.js');

//Start

var genNum = new utils().genNum
const br = () => log(``)

br()
log($`{green.bold [Server Started]}`)
log($`{green.bold [Initializing]}`)

function TEST(){
    
    
    

    //Main Test
    function Tst(){
        br()
        const opt = prompt($.cyan.bold(`[console]: `))

        if(opt.toLowerCase() == `area()` || opt.toLowerCase() == 'area'){
            br()
            log($`{dim AreaOf() function.. [Running]}`)
            br()
            log($`{red.dim Which Shape you want to Take the area?}`)
            function Area(){
                br();
                const Shape = prompt($`{cyan.bold [Area]: }`)
                if(Shape.toLowerCase() == 'exit'){
                    br()
                    log($`{dim Module Math Js}`)
                    Tst()
                }
                
                else if(Shape == ''){
                    Area()
                }
                
                else{
                    br()
                    __AreaOf(Shape.toLowerCase())
                    br()
                    Area()
                }
                
            }
            Area()
        }else if(opt.toLowerCase() == 'volume()' || opt.toLowerCase() == 'volume'){
            br()
            log($`{dim VolumeOf() function.. [Running]}`)
            br()
            log($`{red.dim Which Shape You Want to Take the Volume}`)
            function Volume(){
                br()
                const Shape = prompt($`{cyan.bold [Shape]>>> }`)
                if(Shape.toLowerCase() == 'exit'){
                    br()
                    log($`{dim Module Math Js}`)
                    Tst()
                }
                
                else if(Shape == ''){
                    Volume()
                } 
                
                else {
                    br()
                    log(__volumeOf(Shape.toLowerCase()))
                    br()
                    CHECk()
                }
                
            }

            Volume()
            function CHECk(){
                log($`{red.bold Do you Want to Run Volume Function Again..{green.bold (Y/N)}}`)
                const check = prompt(`>>> `)
                br()
                if(check == 'n' ||check== 'No' ||check== 'N' || check == 'no'){
                    br()
                    log($`{dim @module-mathjs v1.2.5}`)
                    Tst()
                } else if (check == 'Yes' || check == 'yes' || check == 'y' || check == 'Y'){
                    br()
                    log($`{dim Volume()}`)
                    Volume()
                } else {
                    br()
                    log($`{dim @module-mathjs v1.2.5}`)
                    Tst()
                }
            }
        } else if(opt.toLowerCase() == 'distance' || opt.toLowerCase() == 'distance()') {
                br()
                log($`{green.bold Starting Distance Converter Function.. [Running]}`)
                log($`{green.bold Supported Units: [Miles,Meters,Km,Mm,Cm]}`)
                log($`{green.bold Please enter the values for from,to and value}`)
                br()
            function Distance(){
                br()
                const from = prompt($`{dim [From]>>> }`)
                br()
                const to = prompt($`{dim [To]>>> }`)
                br()
                const value = prompt($`{dim [How Much]>>> }`)
                const chk1 = parseInt(from, 10)
                const chk2 = parseInt(to, 10)
                const chk3 = parseInt(value, 10)
                if(from.toLowerCase() == 'exit' || to.toLowerCase() == 'exit' || value.toLowerCase() == 'exit') {
                    br()
                    log($`{dim Module Math Js}`)
                    Tst()
                }
                 else if(isNaN(chk1) == false || isNaN(chk2) == false || isNaN(chk3) == true) {
                    log($`{red.bold Please type in correct value}`)
                    Distance()
                } else if(from == '' || to == '' || value == ''){
                    log($`{red.bold Please enter the values for from,to and value}`)
                    Distance()
                }
                
                
                else{
                    br()
                    log($`{green [${value}${from} to ${to}] : }`)
                    log(__distanceConverter(from.toLowerCase(), to.toLowerCase(), chk3))
                    br()
                    CHEck()
                }
                
                
            }

            Distance()
            function CHEck(){
                log($`{red.bold Do you Want to Run Distance Function Again..{green.bold (Y/N)}}`)
                const check = prompt(`>>> `)
                br()
                if(check == 'n' ||check== 'No' ||check== 'N' || check == 'no'){
                    br()
                    log($`{dim @module-mathjs v1.2.5}`)
                    Tst()
                } else if (check == 'Yes' || check == 'yes' || check == 'y' || check == 'Y'){
                    br()
                    log($`{dim Distance()}`)
                    Distance()
                } else {
                    br()
                    log($`{dim @module-mathjs v1.2.5}`)
                    Tst()
                }
            }
        } else if(opt.toLowerCase() == 'temprature()' || opt.toLowerCase() == 'temprature'){
                br()
                log(`Starting Temprature Converter [Running]`)
                log(`Please Enter The Values For [From, To and Value]`)
                br()
            function Temprature(){
                br()
                const from = prompt(`[From]>>> `)
                br()
                const to = prompt(`[To]>>> `)
                br()
                const value = prompt(`[How Much]>>> `)
                const chk1 = parseInt(from, 10)
                const chk2 = parseInt(to, 10)
                const chk3 = parseInt(value, 10)
                if(from.toLowerCase() == 'exit' || to.toLowerCase() == 'exit' || value.toLowerCase() == 'exit') {
                    br()
                    log(`Module Math Js`)
                    br()
                    Tst()
                }

                else if(isNaN(chk1) == false || isNaN(chk2) == false || isNaN(chk3) == true) {
                    log(`Please type in correct value`)
                    Temprature()
                }
                
                else if(from == '' || to == '' || value == '') {
                    log(`Please Enter The Correct Values For from,to and value`)
                    Temprature()
                } 
                
                else {
                    const uarr = ['Kelvin', 'Farenheit', 'Celsius']
                    br()
                    log(`[${chk3}°${from.toUpperCase()} to ${to.toUpperCase()}] : `)
                    br()
                    log(__tempConverter(from.toLowerCase(),to.toLowerCase(),chk3))
                    br()
                    CHeck()
                }
                
                
            }
            Temprature()

            function CHeck(){
                log(`Do you Want to run Temprature Function Again..(Y/N)`)
                const check = prompt(`>>> `)
                br()
                if(check == 'n' ||check== 'No' ||check== 'N' || check == 'no'){
                    br()
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                } else if (check == 'Yes' || check == 'yes' || check == 'y' || check == 'Y'){
                    br()
                    log(`Temprature() Function`)
                    Temprature()
                } else {
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                }
            }
        } else if (opt.toLowerCase() == 'table()' || opt.toLowerCase() == 'table') {
            br()
            log(`Running Table Function [Started]`)
            br()
            log(`Tip: You Can do Unlimited...!!`)
            br()
            function Table(){
                const from = prompt('From: ')
                if(from.toLowerCase() == 'exit'){
                    br()
                    log($`{dim Module Math Js}`)
                    Tst()
                } else if(from.toLowerCase() == ''){
                    Table()
                } else if(isNaN(parseInt(from,10)) == true) {
                    br()
                    log($`{red Please Type in a number}`)
                    br()
                    Table()
                } else {
                    function Tble(){
                        const to = prompt('To: ')
                        if(to.toLowerCase() == 'exit'){
                            br()
                            log($`{dim Module Math Js}`)
                            Tst()
                        }
                        else if(to.toLowerCase() == ''){
                            Tble()
                        }
                        else if(isNaN(parseInt(to,10)) == true){
                            br()
                            log($`{red Please Type in a number}`)
                            br()
                            Tble()
                        }
                        else{
                            log(`[Table of ${from} to ${to}]`)
                            br()
                            __table(parseInt(from,10), parseInt(to,10))
                            br()
                            Check()
                        }
                    }
                    Tble()
                }
                
            }

            Table()
            function Check(){
                log(`Do you Want to run Table Function Again..(Y/N)`)
                const check = prompt(`>>> `)
                br()
                if(check == 'n' ||check== 'No' ||check== 'N' || check == 'no'){
                    br()
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                } else if (check == 'Yes' || check == 'yes' || check == 'y' || check == 'Y'){
                    br()
                    log(`Temprature() Function`)
                    Table()
                } else {
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                }
            }
        } else if(opt.toLowerCase() == 'time()' || opt.toLowerCase() == 'time'){
            br()
            log(`Starting Time Converter [Running...]`)
            br()
            
            function Time(){
                br()
                log(`From which Unit you Want to Convert`)
                const from = prompt(`>>> `)
                br()
                log(`To which unit you want to convert`)
                const to = prompt(`>>> `)
                br()
                log(`How many Units you want to convert`)
                const value = prompt(`>>> `)
                const chk1 = parseInt(from, 10)
                const chk2 = parseInt(to, 10)
                const chk3 = parseInt(value, 10)
                if(from.toLowerCase() == 'exit' || to.toLowerCase() == 'exit' || value.toLowerCase() == 'exit') {
                    br()
                    log(`Module Math Js`)
                    br()
                    Tst()
                }

                else if(isNaN(chk1) == false || isNaN(chk2) == false || isNaN(chk3) == true) {
                    log(`Please type in correct value`)
                    Time()
                }
                if(from == ''|| to == '' || value == ''){
                    log(`Please Fill In the Value For [From,To,Value]`)
                    Time()
                }
                else {
                    br()
                    log(`[${from} to ${to}] : `)
                    log(__timeConverter(from,to,value))
                    br()
                    check()
                }
                
            }

            Time()
            function check(){
                log(`Do you Want to run Time Function Again..(Y/N)`)
                const check = prompt(`>>> `)
                br()
                if(check == 'n' ||check== 'No' ||check== 'N' || check == 'no'){
                    br()
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                } else if (check == 'Yes' || check == 'yes' || check == 'y' || check == 'Y'){
                    log(`Time() Function Running`)
                    br()
                    Time()
                } else {
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                }
            }
        } else if (opt.toLowerCase() == 'abs()' || opt.toLowerCase() == 'abs') {
            log('Starting Abs Function [Running]')
            br()
            br()
            log(`Whose Absolute Value`)
            function ABS(){
                br()
                log(`Whose Absolute Value`)
                const value = prompt(`>>> `)
                if (value == '') {
                    ABS()
                }
                else if(value.toLowerCase() == 'exit'){
                    br()
                    log($`{dim Module Math Js}`)
                    Tst()
                }
                else {
                    br()
                    log(`[Absolute Value Of ${value}]: `)
                    log(abs(parseInt(value,10)))
                    checK()
                }
            }
            ABS()
            function checK(){
                log(`Do you Want to run Abs Function Again..(Y/N)`)
                const check = prompt(`>>> `)
                br()
                if(check == 'n' ||check== 'No' ||check== 'N' || check == 'no'){
                    br()
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                } else if (check == 'Yes' || check == 'yes' || check == 'y' || check == 'Y'){
                    log('ABS() Function Running')
                    ABS()
                } else {
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                }
            }
        } else if (opt.toLowerCase() == 'money()' || opt.toLowerCase() == 'money') {
            br()
            log(`Starting Money Converter [Running]`)
            br()
            log(`Supported Currencies Are: [Ind,Usd,Eur,Sar]`)
            br()
            function Money(){
                const c1 = prompt(`[From]>>> `)
                br()
                log(`To Which Currency You Want To Convert`)
                const c2 = prompt(`[To]>>> `)
                br()
                log(`How much Currency Do You Want To Convert`)
                const c3 = prompt(`[How much Currency]>>> `)
                if(c1 == '' || c2 == '' || c3 == '') {
                    log(`Please Fill in THe Values`)
                    Money()
                }
                else if(c1.toLowerCase() == 'exit' || c2.toLowerCase() == 'exit' || c3.toLowerCase() == 'exit'){
                    br()
                    log($`{dim Module Math Js}`)
                    Tst()
                }
                else{
                    br()
                    log(__moneyConverter(c1,c2,c3))
                    cheCK()
                }
            }
            Money()
            function cheCK(){
                log(`Do you Want to run Money Function Again..(Y/N)`)
                const check = prompt(`>>> `)
                br()
                if(check == 'n' ||check== 'No' ||check== 'N' || check == 'no'){
                    br()
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                } else if (check == 'Yes' || check == 'yes' || check == 'y' || check == 'Y'){
                    Money()
                } else {
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                }
            }
        } else if(opt.toLowerCase() == 'factorial()' || opt.toLowerCase() == 'factorial') {
            br()
            log(`Starting Factorial Function [Running]`)
            br()
            log(`Of Which Number You want The factorial`)
            function Factorial(){
                const fal = prompt(`>>> `)
                if(fal == '') {
                    Factorial()
                }
                else if(fal.toLowerCase() == 'exit'){
                    br()
                    log($`{dim Module Math Js}`)
                    Tst()
                }
                else{br()
                log(`Factorial of ${fal}`)
                log(factorial(fal))
                br()
                chECK()}
            }
            Factorial()
            function chECK(){
                log(`Do you Want to run Factorial Function Again..(Y/N)`)
                const check = prompt(`>>> `)
                br()
                if(check == 'n' ||check== 'No' ||check== 'N' || check == 'no'){
                    br()
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                } else if (check == 'Yes' || check == 'yes' || check == 'y' || check == 'Y'){
                    Factorial()
                } else {
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                }
            }
        } else if (opt.toLowerCase() == 'square' || opt.toLowerCase() == 'square()') {
            br()
            log(`Starting Square Function [Running]`)
            br()
            log(`Of Which Number Do You Want To Take The Square`)
            function SQUARE(){
                br()
                const sq = prompt(`>>> `)
                if(sq == ''){
                    SQUARE()
                }
                else if(sq.toLowerCase()=='exit'){
                    br()
                    log($`{dim Module Math Js}`)
                    Tst()
                }
                else {
                    br()
                    log(`Square of ${sq}`)
                    log(square(sq))
                    cHECK()
                }
            }
            SQUARE()
            function cHECK(){
                log(`Do you Want to run Square Function Again..(Y/N)`)
                const check = prompt(`>>> `)
                br()
                if(check == 'n' ||check== 'No' ||check== 'N' || check == 'no'){
                    br()
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                } else if (check == 'Yes' || check == 'yes' || check == 'y' || check == 'Y'){
                    SQUARE()
                } else {
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                }
            }
        } else if (opt.toLowerCase() == 'sqrt()' || opt.toLowerCase() == 'sqrt') {
            br()
            log(`Starting SQRT Function [Running]`)
            br()
            log(`Of Which Number Do You Want To Take The Square Root`)
            function SQUARERT(){
                br()
                
                const SQARRT = prompt(`>>> `)
                if(SQARRT == ''){
                    SQUARERT()
                }
                else if(SQARRT.toLowerCase() == 'exit'){
                    br()
                    log($`{dim Module Math Js}`)
                    Tst()
                }
                else {br()
                log(`Square Root Of ${SQARRT}`)
                log(sqrt(SQARRT))
                check1()}
            }
            SQUARERT()
            function check1(){
                log(`Do you Want to run Square Root Function Again..(Y/N)`)
                const check = prompt(`>>> `)
                br()
                if(check == 'n' ||check== 'No' ||check== 'N' || check == 'no'){
                    br()
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                } else if (check == 'Yes' || check == 'yes' || check == 'y' || check == 'Y'){
                    SQUARERT()
                } else {
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                }
            }
        } else if (opt == ''){
            Tst()
        } else if (opt.toLowerCase() == 'exit()' || opt.toLowerCase() == 'exit'){
            br()
            log(`Exitting Application`)
            br()
            trm()
        } else if(opt.toLowerCase() == 'help()' || opt.toLowerCase() == 'help'){
            log(`Help Station`)
            log(`What Help do you want.`)
            br()
            log(`Enter 'exit()' for leaving`)
            log(`Enter [exit -f] for exitting the cli`)
            log(`Enter 'full' for full function list`)
            log(`Enter build() for build Details`)
            br()
            function EST(){
                
                const opti = prompt(`[Help Terminal]>>> `)
                if(opti == ''){
                    EST()
                } else if (opti.toLowerCase() == 'exit()' || opti.toLowerCase() == 'exit'){
                    br()
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                } else if(opti.toLowerCase() == 'full()' || opti.toLowerCase() == 'full'){
                    log(`
                    Area() - Take the Area Of Any Shape.
                            Supported Shapes[Square, Rectangle,Circle,Parallelogram,Triangle,Equi-Triangle]
                    Volume() - Take the Volume Of any Shape
                            Supported Shapes[Cone,Cube,Cuboid,Sphere,Cylinder,Hemisphere]
                    Distance() - Distance Converter. Convert Between Distance Units
                                Supported Units[Miles,KM,CM,MM,Meters]
                    Money() - Money Converter. Convert Between Currencies
                            Supported Currencies[IND,USD,EUR,SAR]
                    Time() - Time Converter. Convert between time units.
                            Supported Units[Seconds,Hours,Minutes,Days,Years]
                    Temprature() - Temprature Converter. Convert Between All Three Units
                    Square() - Take out the Square Of Any Number
                    Factorial() - Take out the Factorial Of Any Number
                    Table() - Take out the Table Of Any Number upto Any Number
                    Sqrt() - Take out the Square Root Of Any Number
                    Cube() - Take out the Cube Of Any Number
                    Cbrt() - Take out the Cube root Of Any Number
                    Abs() - Take out the Absolute Value Of Any Number
                    addInverse() - Take out the Additive inverse Of Any Number
                    and this Help() - Print This Message
                    `)
                    br()
                    EST()
                } else if (opti.toLowerCase() == 'build' || opti.toLowerCase() == 'build()') {
                    log(`Build version 1.0.0`)
                    log(`Module-Mathjs Prerelease app valpha0.0.1`)
                    log(`Created By Mohammed Ali..`)
                    log(`Used For Doing operations on cli`)
                    br()
                    log(`[BUILD] : @@module-mathjs v1.2.5`)
                    br()
                    EST()
                } else if (opti.toLowerCase() == 'exit -f') {
                    br()
                    log(`[Server]: Exitting Help Terminal`)
                    log(`[Server]: Exitting CLI`)
                    log(`Stopping Server`)
                    log(`Server Stopped`)
                }

                else if(opti.toLowerCase() == 'build -v'){
                    br()
                    log(`Build Version v1.0.0`)
                    EST()
                }
                
                else {
                    log(`Sorry. Looks like you entered Wrong Function. Please use 'full' for details.`)
                    EST()
                }
            } 
            EST()

        } else if (opt.toLowerCase() == 'cube()' || opt.toLowerCase() == 'cube'){
            br()
            log(`Starting Cube Function. [Running]`)
            br()
            log(`Whose Cube You Want`)
            function CUBE(){
                br()
                
                const cbe = prompt(`>>> `)
                if(cbe == '') {
                    CUBE()
                }
                else if(cbe.toLowerCase() == 'exit'){
                    br()
                    log($`{dim Module Math Js}`)
                    Tst()
                }
                else{br()
                log(`[Cube of ${cbe}]`)
                log(cube(cbe))
                check2()}
            }
            CUBE()
            function check2(){
                log(`Do you Want to run Cube Function Again..(Y/N)`)
                const check = prompt(`>>> `)
                br()
                if(check == 'n' ||check== 'No' ||check== 'N' || check == 'no'){
                    br()
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                } else if (check == 'Yes' || check == 'yes' || check == 'y' || check == 'Y'){
                    CUBE()
                } else {
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                }
            }
        } else if(opt.toLowerCase() == 'cbrt()' || opt.toLowerCase() == 'cbrt') {
            br()
            log(`Starting Cube Root Function. [Running]`)
            br()
            log(`Whose Cube Root You Want`)
            function CBRT(){
                br()
                const cbert = prompt(`>>> `)
                if(cbert == ''){
                    CBRT()
                }
                else if(cbert.toLowerCase() == 'exit'){
                    br()
                    log($`{dim Module Math Js}`)
                    Tst()
                }
                else{br()
                log(`[Cube Root of ${cbert}]`)
                log(cbrt(cbert))
                check3()}
            }
            CBRT()
            function check3(){
                log(`Do you Want to run Cube Root Function Again..(Y/N)`)
                const check = prompt(`>>> `)
                br()
                if(check == 'n' ||check== 'No' ||check== 'N' || check == 'no'){
                    br()
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                } else if (check == 'Yes' || check == 'yes' || check == 'y' || check == 'Y'){
                    CBRT()
                } else {
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                }
            }
        } else if (opt.toLowerCase() == 'addinverse()' || opt.toLowerCase() == 'additive inverse' || opt.toLowerCase() == 'addinverse'){
            br()
            log(`Starting Additive Inverse Function [Running]`)
            br()
            log(`Whose Additive inverse do you want:`)
            function ADDINV(){
                br()
                
                const adinv = prompt(`>>> `)
                if(adinv == '') {
                    ADDINV()
                }
                else if(adinv.toLowerCase() == 'exit'){
                    br()
                    log($`{dim Module Math Js}`)
                    Tst()
                }
                else{br()
                log(`[Additive inverse of ${adinv}]`)
                log(addInverse(adinv))
                br()
                check4()}
            }
            ADDINV()
            function check4(){
                log(`Do you Want to run Additive Inverse Function Again..(Y/N)`)
                const check = prompt(`>>> `)
                br()
                if(check == 'n' ||check== 'No' ||check== 'N' || check == 'no'){
                    br()
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                } else if (check == 'Yes' || check == 'yes' || check == 'y' || check == 'Y'){
                    ADDINV()
                } else {
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                }
            }
        } else if (opt.toLowerCase() == 'power' || opt.toLowerCase() == 'power()') {
            br()
            log(`Starting Power Function [Running]`)
            br()
            function POWE(){
                br()
                log(`What is The Base`)
                const base = prompt(`>>> `)
                log(`What is the exponent`)
                const exponent = prompt(`>>> `)
                br()
                if(base.toLowerCase() == 'exit' || exponent.toLowerCase() == 'exit'){
                    log(`Module Math Js`)
                    br()
                    Tst()
                }

                else if(base == '' || exponent == ''){
                    log(`Please Enter a number [ERR-892**w382]`)
                }
                
                else {
                    log(`[${base} raised to power ${exponent}]:`)
                    log(power(base,exponent))
                    br()
                }
                
                
                check5()
            }
            POWE()
            function check5(){
                log(`Do you Want to run Power Function Again..(Y/N)`)
                const check = prompt(`>>> `)
                br()
                if(check == 'n' ||check== 'No' ||check== 'N' || check == 'no'){
                    br()
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                } else if (check == 'Yes' || check == 'yes' || check == 'y' || check == 'Y'){
                    POWE()
                } else {
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                }
            }
        } else if(opt.toLowerCase() == 'help -b' || opt.toLowerCase() == 'help /b'){
            br()
            log(`Build v1.0.0`)
            log(`Created by Mohammed Ali`)
            log(`Appliaction CLI Prerelease Alpha v0.0.1`)
            br()
            Tst()
        }
        
        else {
            log(`Sorry.. Wrong Function. Please Enter Correct Function`)
            log(`Type help() for details`)
            log(`Type exit() for Leaving`)
            Tst()
        }
        
        

    }
    function wlcm () {    
        br()
        log($`{dim Welcome to Module Terminal v1.0}`)
        log($`{dim Please login to proceed}`)
        br()
    }
    
        function trm(){
            const Terminal = prompt($`{cyan.bold [Terminal]: }`)
            var Password = 'sayyedmohammed'
            var keyphrase = 'net user'
            function tests(){
                test1()
                function test1 (){
                    const y = Math.round(Math.round(Math.random() * 10000 )/ 10000 * 10000 * 10) / 10
                    var x = y.toString(10)
                    if(x.length == 3){
                        x = x+`0`
                    } else if (x.length == 2){
                        x = x+`00`
                    } else {
                        x=x
                    }
                    log($`{red HCaptza!!}`)
                    log($`{red Please enter the number here: ({yellow.dim Type ${y}})}`)
                    const prmpt = prompt($`{dim >> }`)
                    if(prmpt == x){
                        log($`{green.bold Passed!}`)
                        test2()
                    } else {
                        br()
                        log($`{red.dim ACCESS DENIED}`)
                        log($`{red.bold.underline Please Type In Correct Password}`)
                        log($`{red Try Again}`)
                        br()
                        trm()
                    }

                }

                function test2(){
                    const y = Math.round(Math.round(Math.random() * 10000 )/ 10000 * 10)
                    const z = Math.round(Math.round(Math.random() * 10000 )/ 10000 * 10)
                    var x = y.toString(10)
                    var o = z.toString(10)
                    br()
                    log($`{red TEST2}`)
                    br()
                    log($`{red Please enter the sum}`)
                    log($`{green.dim ${x} + ${o}}`)
                    const prmompt = prompt($`{dim >> }`)
                    const num1 = parseInt(x, 10)
                    const num2 = parseInt(o,10)
                    if(prmompt == num1 + num2){
                        br()
                        log($`{green Test 2 Passed!!}`)
                        verification()
                    } else {
                        br()
                        log($`{red.bold.underline Incorrect Sum!!}`)
                        log($`{red Try Again!!}`)
                        br()
                        trm()
                    }
                }

                function verification(){
                    br()
                    log($`{red Verification}`)
                    log($`{red Please enter the hash password you have}`)
                    var hshpswrd = prompt($`{white.bold >> }`)
                    passwordhash.compare(Password, hshpswrd).then(value => {
                        if(value == true){
                            log($`{green.bold Password Verified..!}`)
                            br()
                            log($`{green.bold Password: ${Password}}`)
                            br()
                            trm()
                        } else {
                            log(`Wrong Value`)
                            br()
                            trm()
                        }
                    })
                }
            }
            function logi(){
                br()
                const user = prompt($`{rgb(58,95,246) User: }`)
                if(user.toLowerCase() == 'admin -exit' || user.toLowerCase() == 'admin -e'){
                    br()
                    trm()
                }
                
                else if(user.toLowerCase() == 'sayyed ali'){
                    const password = prompt({ask: $`{rgb(58,95,246) [Hash or Plain] Password: }`, echo:'*'})
                    if(password == Password){
                        log(`Verifying`)
                        log($`{green.bold Verified}`)
                        br()
                        loading(function(){
                            br()
                            log($`[Server]: {green Successfully Loaded All Functions}`)
                            br()
                            log($`{green.bold Welcome to Module Mathjs App. type help() to get info}`)
                            log($`{red.bold Starting Application...}`)
                            log($`{green.bold Succesfully Logged IN as ${user}...}`)
                            br()
                            log($`{green.bold Application Started}`)
                            Tst()
                        })
                        
                    } else {
                        passwordhash.compare(Password, password).then(value => {
                            log(`Verifying`)
                            if(value == true){
                                log($`{green.bold Verification Successful}`)
                                br()
                                    log($`[Server]: {green Successfully Loaded All Functions}`)
                                    br()
                                    log($`{green.bold Welcome to Module Mathjs App. type help() to get info}`)
                                    log($`{red.bold Starting Application...}`)
                                    log($`{green.bold Succesfully Logged IN as ${user}...}`)
                                    br()
                                    log($`{green.bold Application Started}`)
                                    Tst()
                                
                            }else{
                                log($`{red.bold Verification Failed}`)
                                br()
                                log($`{red.bold Password is incorrect!}`)
                                log($`{green.dim please type in correct password}`)
                                log($`{dim Type {white.bold 'admin -e'} to return to terminal}`)
                                logi()
                            }
                        })
                    }
                }

                else if(user.toLowerCase() == 'admin'){
                    
                        br()
                        log($`[Server]: {green Successfully Loaded All Functions}`)
                        br()
                        log($`{green.bold Welcome to Module Mathjs App. type help() to get info}`)
                        log($`{red.bold Starting Application...}`)
                        log($`{green.bold Succesfully Logged IN as ${user}...}`)
                        br()
                        log($`{green.bold Application Started}`)
                        Tst()
                    
                }
                else if(user == ''){
                    log($`{red A username cannot be empty}`)
                    log($`{dim type {white.dim 'admin -e'} to exit}`)
                    logi()
                }
                else {
                    log($`{red.bold Username ${user} is incorrect!}`)
                    log($`{green.dim please type in correct username}`)
                    log($`{dim Type {white.bold 'admin -e'} to return to terminal}`);
                    br()
                    logi()
                }
            }
            function CHNG() {
                const Y = Math.round(Math.round(Math.random() * 10000) / 10000 * 10000 *10) /10
                const y = Y.toString(10)
                br()
                log($`{red.bold Warning!!}`)
                br()
                log(`This Application Wants To Make Changes To Your Device:`)
                log($`{dim Name: Account Control}`)
                log($`{dim Publisher: Sayyed Ali}`)
                br()
                const chn = prompt($`[{dim (Type in ${y})} {blue [Password]}]: `)
                if(chn != y){
                    br()
                    log($`{red Wrong Password!}`)
                    log($`{red Try Again}`)
                    br()
                    trm()
                } else {
                    log($`{green.bold Permission Granted!}`)
                    br()
                    logi()
                }
            }

            if(Terminal == ''){
                trm()
            }
            
            else if(Terminal.includes('syntax') == true) {
                const li2 = Terminal.slice(7)
                const $$ = ['net user', 'net user login', 'net user pass', 'net user list', 'gen num', 'exit', 'date']
                 
                
                if (li2 == ''){
                    br()
                    log($`{dim Correct Usage:} {bold syntax <command_name>}`)
                    br()
                    trm()
                }
                else if(li2 == $$[0]){
                    br()
                    log($`{bold {dim 'net user'} is a cmdlet used to do some functions with accounts}`)
                    br()
                    log($`{dim Correct Usage: }{bold net user <function>}`)
                    log($`{bold Functions: [list, pass, login]}`)
                    br()
                    trm()
                }
                else if (li2 == $$[1]){
                    br()
                    log($`{bold {dim 'net user login'} is a command of login function of CMDLET {dim 'net user'}}`)
                    log($`{red.bold You will have to pass the Account Control Prompt in order to acces the cmdlet function {white.dim 'login'}}`)
                    br()
                    log($`{cyan.bold This Will show up a following prompt:}`)
                    log($`{dim User: }`)
                    br()
                    log($`{white Type in the correct username to proceed}`)
                    br()
                    log($`{cyan.bold This Will show up another prompt:}`)
                    br()
                    log($`{dim (Hash or plain)[Password]: }`)
                    br()
                    log($`{white Type in the correct username to proceed}`)
                    br()
                    trm()
                }  
                else if(li2 == $$[2]) {
                    br()
                    log($`{bold {dim 'net user pass'} is a command of Verification function of CMDLET {dim 'net user'}}`)
                    log($`{red.bold You will have to pass 2 tests and verification in order to acces the cmdlet function {white.dim 'pass'}}`)
                    log($`{dim It will give yo the account password When you pass all the verfication}`)
                    br()
                    log(`1st Test: You have to type The number on screen in the text box`)
                    log(`2nd Test: You will have to enter the sum of numbers written on the screen`)
                    log(`Verification: You must have the Hashed Password In order to do the Verification`)
                    br()
                    log($`{white After all of this you will get your account password}`)
                    br()
                    trm()
                }
                else if(li2 == $$[3]){
                    br()
                    log($`{bold {dim 'net user list'} is a command of list function of CMDLET {dim 'net user'}}`)
                    log($`{dim It will give you the list of accounts and passwords({red Encrypted})}`)
                    br()
                    log($`{red.bold Remember it will only give you the hashed password...}`)
                    br()
                    trm()
                }
                else if(li2 == $$[4]){
                    br()
                    log($`{bold Gen Num (Generate Number) is function which lets you generate any numbers with infinite sets}`)
                    log($`{bold Syntax: {dim gen num <digit> [sets]}}`)
                    br()
                    trm()
                }
                else if(li2 == $$[5]){
                    br()
                    log($`{red Type {dim 'exit'} to exit from the application}`)
                    br()
                    trm()
                }
                else if(li2 == $$[6]){
                    br()
                    log($`{dim Prints the exact date and time of your place}`)
                    br()
                    trm()
                }
                else {
                    br()
                    log($`{red Invalid option >>{dim ${li2}}<<}`);
                    br()
                    trm()
                }
            }

            else if(Terminal == 'help' || Terminal == 'Help') {
                log
                ($`
                {cyan.dim Admin Terminal..
                Login In the Account to use Application
                Type net user login to proceed
                type net user list to get list of users}
                `)
                trm()
            } else if(Terminal == 'exit') {
                log($`{green.bold Exitted Server}`)
            } else if(Terminal == 'date' || Terminal == 'Date'){
                log($`{green ${Date()}}`)
                br()
                trm()
            }

            else if(Terminal.toLowerCase() == `${keyphrase}`){
                br()
                log($`{white.bold CMDLT 'net user' at command pipeline position 1..}`)
                log($`Please Enter The values for following array`)
                const arr = prompt($`{white.bold [TYPE[0, 1, 2]]: }`)
                if(arr == 'login' || arr == '0'){
                    br()
                    log($`{dim Running function {white 'login'}}`)
                    br()
                    CHNG()
                } else if(arr.toLowerCase() == 'pass' || arr == '1'){
                    br()
                    log($`{dim Running function {white 'pass'}}`)
                    br()
                    tests()
                } 
                
                else if(arr.toLowerCase() == 'list' || arr == '2') {
                    log($`{dim Running function {white 'list'}}`)
                    br()
                    passwordhash.hash(Password, 10, (err, hash) => {
                        try{
                            log($`{red (Encrypting)...}`)
                            log($`{green.bold Users:              Password:                                                                          Added:}
    {dim 1. Sayyed Ali       ${hash}({red.bold Encrypted})             May 22 (Monday) 10:01 AM (GMT +3:00)}
    {dim 2. Admin            NaN                                                                                    May 22 (Monday) 9:06 PM (GMT +3:00)}`)
                        br()
                        trm()
                        } catch{
                            log(err)
                        }
                    })
                }

                else if(arr == ''){
                    br()
                    log($`{red Command Error because no values for array is requested..}`)
                    br()
                    trm()
                }

                else {
                    log($`{red.bold Invalid Value For the Array at '{white.bold >>${arr}<<}'}`)
                    log($`{dim Correct Values:}`)
                    br()
                    log($`{white 0 or user}`)
                    log($`{white 1 or list}`)
                    log($`{white 2 or pass}`)
                    br()
                    trm()
                }
            }

            else if(Terminal.toLowerCase().includes('a b c d') == true){
                
                    br()
                    log($`[Server]: {green Successfully Loaded All Functions}`)
                    br()
                    log($`{green.bold Application Started}`)
                    Tst()
                
            }

            else if(Terminal.toLowerCase().includes('net user') == true){
                const spic = Terminal.slice(9)
                if(spic.toLowerCase() == 'pass'){
                    br()
                    tests()
                } else if (spic.toLowerCase() == 'list') {
                    passwordhash.hash(Password, 10, (err, hash) => {
                        try{
                            log($`{red (Encrypting)...}`)
                            log($`{green.bold Users:              Password:                                                                          Added:}
    {dim 1. Sayyed Ali       ${hash}({red.bold Encrypted})             May 22 (Monday) 10:01 AM (GMT +3:00)}
    {dim 2. Admin            NaN                                                                                    May 22 (Monday) 9:06 PM (GMT +3:00)}`)
                        br()
                        trm()
                        } catch{
                            log(err)
                        }
                    })
                } else if (spic.toLowerCase() == 'login') {
                    br()
                    CHNG()
                } else {
                    log($`{red.bold Invalid option at {white.bold 'net user >>${spic}<<'}}`)
                    trm()
                }
            } 
            
            else if(Terminal.toLowerCase().includes('gen num') == true){
                const dgt = Terminal.slice(8,10)
                const dgtnum = parseInt(dgt,10)
                if(dgt == ''){
                    br()
                    log($`{red A number was expected} {dim (ERR-cjs.loader:578  Class.err:No_number_Defiend)}`)
                    br()
                    trm()
                } 

                else if (isNaN(dgtnum) == false) {
                    var dgtset = Terminal.slice(10)
                    var dgtsetc = parseInt(dgtset,10)

                    if(dgtset == ''){
                        br()
                        genNum(dgtnum)
                        br()
                        trm()
                    }
                    else if(isNaN(dgtsetc) == false){
                        br()
                        genNum(dgt, dgtsetc)
                        br()
                        trm()
                    } else {
                        br()
                        genNum(dgtnum)
                        br()
                        trm()
                    }
                } else {
                    br();
                    log($`{red.bold ${dgt} is not a Number}`)
                    br()
                    trm()
                }
            }
            
            

            else {
                log($`{red.bold Sorry.. '{white.bold ${Terminal}}' Is Not Recognized as Command in the Application}`)
                trm()
            }
            
        }
        wlcm()
        trm()
    }
    
    

// execution ... Dont bother..


log($`[Server]: {green Loaded and Decrypted Successfully...}`)
TEST()