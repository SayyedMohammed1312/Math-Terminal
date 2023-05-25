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
    power
} = require('../dist/index.js')
var prompt = require('prompt-sync')()
var $ = require(`chalk`)
var passwordhash = require(`bcrypt`)

const br = () => log(`                 `)
br()
log($`{green.bold [Server Started]}`)
log($`{green.bold [Initializing]}`)

function TEST(){
    
    
    

    //Main Test
    function Tst(){
        br()
        const opt = prompt($.cyan.bold(`[module mjs]>>> `))

        if(opt == `Area()` || opt == `Area` || opt == 'area'){
            br()
            log($`{dim AreaOf() function.. [Running]}`)
            br()
            log($`{red.dim Which Shape you want to Take the area?}`)
            function Area(){
                br();
                const Shape = prompt($`{cyan.bold [Shape]>>> }`)
                if(Shape == 'exit'){
                    br()
                    log($`{dim Module Math Js}`)
                    Tst()
                }
                
                else if(Shape == ''){
                    Area()
                }
                
                else{
                    br()
                    log(__AreaOf(Shape))
                    br()
                    CHECK()
                }
                
            }
            Area()
            
            function CHECK() {
                log($`{red.bold Do you Want to Run Area Function Again..{green.bold (Y/N)}}`)
                const check = prompt(`>>> `)
                if(check == 'n' ||check== 'No' ||check== 'N' || check == 'no'){
                    br()
                    log($`{dim @module-mathjs v1.2.5}`)
                    Tst()
                } 
                
                else if (check == 'Yes' || check == 'yes' || check == 'y' || check == 'Y'){
                    br()
                    log($`{dim Area()}`)
                    Area()
                } 
                
                else {
                    log($`{dim @module-mathjs v1.2.5}`)
                    Tst()
                }
            }
        }else if(opt == 'Volume()' || opt == 'Volume' || opt == 'volume'){
            br()
            log($`{dim VolumeOf() function.. [Running]}`)
            br()
            log($`{red.dim Which Shape You Want to Take the Volume}`)
            function Volume(){
                br()
                const Shape = prompt($`{cyan.bold [Shape]>>> }`)
                if(Shape == 'exit'){
                    br()
                    log($`{dim Module Math Js}`)
                    Tst()
                }
                
                else if(Shape == ''){
                    Volume()
                } 
                
                else {
                    br()
                    log(__volumeOf(Shape))
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
        } else if(opt == 'distance' || opt == 'Distance()' || opt== 'Distance') {
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
                if(from == 'exit' || to == 'exit' || value == 'exit') {
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
                    log(__distanceConverter(from, to, value))
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
        } else if(opt == 'Temprature()' || opt == 'temprature' || opt == 'Temprature'){
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
                if(from == 'exit' || to == 'exit' || value == 'exit') {
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
                    log(`[${value}°${from} to ${to}] : `)
                    br()
                    log(__tempConverter(from,to,value))
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
        } else if (opt == 'Table()' || opt == 'table' || opt == 'Table') {
            br()
            log(`Running Table Function [Started]`)
            br()
            log(`Tip: You Can do Unlimited...!!`)
            br()
            function Table(){
                const from = prompt('From:  ')
                const to = prompt('To:  ')
                if(from == 'exit' || to == 'exit'){
                    br()
                    log(`Module Math Js`)
                    br()
                    Tst()
                }
                else if(from == '' || to == '' ){
                    log(`Please Enter The Values Correctly and Type In the Number`)
                    Table()
                }
                else {
                    __table(from, to)
                    br()
                    Check()
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
        } else if(opt == 'Time()' || opt == 'Time' || opt == 'time'){
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
                if(from == 'exit' || to == 'exit' || value == 'exit') {
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
        } else if (opt == 'abs()' || opt == 'Abs' || opt == 'abs' || opt == 'Abs()') {
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
                else {
                    br()
                    log(`[Absolute Value Of ${value}]: `)
                    log(abs(value))
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
        } else if (opt == 'money()' || opt == 'Money()' || opt == 'Money' || opt == 'money') {
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
        } else if(opt == 'Factorial()' || opt == 'Factorial' || opt == 'factorial()' || opt == 'factorial') {
            br()
            log(`Starting Factorial Function [Running]`)
            br()
            log(`Of Which Number You want The factorial`)
            function Factorial(){
                const fal = prompt(`>>> `)
                if(fal == '') {
                    Factorial()
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
        } else if (opt == 'Square' || opt == 'square' || opt=='Square()' || opt == 'square()') {
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
        } else if (opt == 'sqrt()' || opt == 'Sqrt' || opt == 'sqrt') {
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
        } else if (opt == 'exit()' || opt == 'exit'){
            log(`Exitting Application`)
            Login()
        } else if(opt == 'help()' || opt == 'help'){
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
                } else if (opti == 'exit()' || opti == 'exit'){
                    br()
                    log(`@module-mathjs v1.2.5`)
                    Tst()
                } else if(opti == 'full()' || opti == 'full'){
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
                } else if (opti == 'build' || opti == 'build()') {
                    log(`Build version 1.0.0`)
                    log(`Module-Mathjs Prerelease app valpha0.0.1`)
                    log(`Created By Mohammed Ali..`)
                    log(`Used For Doing operations on cli`)
                    br()
                    log(`[BUILD] : @@module-mathjs v1.2.5`)
                    br()
                    EST()
                } else if (opti == 'exit -f') {
                    br()
                    log(`[Server]: Exitting Help Terminal`)
                    log(`[Server]: Exitting CLI`)
                    log(`Stopping Server`)
                    log(`Server Stopped`)
                }

                else if(opti == 'build -v'){
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

        } else if (opt == 'cube()' || opt == 'Cube' || opt == 'cube'){
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
        } else if(opt == 'cbrt()' || opt == 'cbrt' || opt == 'Cbrt') {
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
        } else if (opt == 'addinverse()' || opt == 'additive inverse' || opt == 'Addinverse' || opt == 'addinverse'){
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
        } else if (opt == 'power' || opt == 'power()' || opt == 'Power') {
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
                if(base == 'exit' || exponent == 'exit'){
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
        } else if(opt == 'help -b' || opt == 'help /b'){
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
    function Login(){
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
                const password = prompt($`{rgb(58,95,246) [Hash or Plain] Password: }`)
                if(user == 'Admin -exit' || user == 'admin -exit' || user == 'admin -e' || user == 'Admin -e'){
                    br()
                    trm()
                }
                
                else if(user == 'Sayyed Ali' || user == 'Sayyed ali' || user == 'sayyed Ali' || user == 'sayyed ali'){
                    if(password == Password){
                        log(`Verifying`)
                        log($`{green.bold Verified}`)
                        br()
                        log($`{green.bold Welcome to Module Mathjs App. type help() to get info}`)
                        log($`{red.bold Starting Application...}`)
                        log($`{green.bold Succesfully Logged IN as ${user}...}`)
                        br()
                        log($`{green.bold Application Started}`)
                        Tst()
                    } else {
                        passwordhash.compare(Password, password).then(value => {
                            log(`Verifying`)
                            if(value == true){
                                log($`{green.bold Verification Successful}`)
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
                                log($`{red.bold username or Password is incorrect!}`)
                                log($`{green.dim please type in correct username or password}`)
                                log($`{dim Type {white.bold 'admin -e'} to return to terminal}`)
                                logi()
                            }
                        })
                    }
                }

                else if(user == 'admin' || user == 'Admin'){
                    br()
                    log($`{green.bold Welcome to Module Mathjs App. type help() to get info}`)
                    log($`{red.bold Starting Application...}`)
                    log($`{green.bold Succesfully Logged IN as ${user}...}`)
                    br()
                    log($`{green.bold Application Started}`)
                    Tst()
                }

                else {
                    log($`{red.bold username or Password is incorrect!}`)
                    log($`{green.dim please type in correct username or password}`)
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
            

            else if(Terminal == 'help' || Terminal == 'Help') {
                log
                ($`
                {cyan.dim Admin Terminal..
                Login In the Account to use Application
                Type login to proceed
                type users to get list of users}
                `)
                trm()
            } else if(Terminal == 'net user list') {
                
                passwordhash.hash(Password, 19).then(hash => {
                    log($`{green.bold Users:              Password:                                                                          Added:}
{dim 1. Sayyed Ali       ${hash}({red.bold Encrypted})             May 22 (Monday) 10:01 AM (GMT +3:00)}
{dim 2. Admin            NaN                                                                                  May 22 (Monday) 9:06 PM (GMT +3:00)}`)
                    br()
                    trm()
                })
            } else if(Terminal == 'exit') {
                log($`{green.bold Exitted Server}`)
            } else if(Terminal == 'date' || Terminal == 'Date'){
                log($`{green ${Date()}}`)
                br()
                trm()
            }

            else if(Terminal == `${keyphrase}`){
                br()
                log($`{white.bold CMDLT 'net user' at command pipeline position 1..}`)
                log($`Please Enter The values for following array`)
                const arr = prompt($`{white.bold [TYPE[0]]: }`)
                if(arr == 'login'){
                    br()
                    CHNG()
                } else if(arr == 'pass'){
                    br()
                    tests()
                } 
                
                else if(arr == 'list') {
                    passwordhash.hash(Password, 19).then(hash => {
                        log($`{green.bold Users:              Password:                                                                          Added:}
    {dim 1. Sayyed Ali       ${hash}({red.bold Encrypted})             May 22 (Monday) 10:01 AM (GMT +3:00)}
    {dim 2. Admin            NaN                                                                                    May 22 (Monday) 9:06 PM (GMT +3:00)}`)
                        br()
                        trm()
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
                    log($`{white 1. user}`)
                    log($`{white 2. list}`)
                    log($`{white 3. pass}`)
                    br()
                    trm()
                }
            }

            else if(Terminal.includes('net user') == true){
                const spic = Terminal.slice(9)
                if(spic == 'pass'){
                    br()
                    tests()
                } else if (spic == 'list') {
                    passwordhash.hash(Password, 10).then(hash => {
                        log($`{green.bold Users:              Password:                                                                          Added:}
    {dim 1. Sayyed Ali       ${hash}({red.bold Encrypted})             May 22 (Monday) 10:01 AM (GMT +3:00)}
    {dim 2. Admin            NaN                                                                                    May 22 (Monday) 9:06 PM (GMT +3:00)}`)
                        br()
                        trm()
                    })
                } else if (spic == 'login') {
                    br()
                    CHNG()
                } else {
                    log($`{red.bold Invalid option at {white.bold 'net user >>${spic}<<'}}`)
                    trm()
                }
            } 
            
            
            

            else {
                log($`{red.bold Sorry.. '{white.bold ${Terminal}}' Is Not Recognized as Command in the Application}`)
                trm()
            }
            
        }
        trm()
    }
    wlcm()
    Login()
    
}
// execution ... Dont bother..
TEST();