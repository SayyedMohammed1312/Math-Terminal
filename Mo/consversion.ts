/**
 * Money Converter function used to convert money between 4 Currencies.
 * EUR,IND,SAR,USD
 * 
 * ```js
 * __moneyConverter('Usd', 'Ind', 95)
 * ```
 * This converts 95 USD to indian rupees (₹)
 * @param from Currency type from which you want to convert. 
 * @param to Currency type to which you want to convert.
 * @param value how much money you want to convert
 * @returns Converted money "[from] to [to]"
 * 
 * Note that you Can only type currency in short format.
 * 
 * Typing it fully will give you error message
 */

function __moneyConverter (from:string, to:string, value:number):string{
    if(from == 'usd' || from == 'Usd' || from == 'USD'){
        if(to == `ind` || to == `Ind` || to == 'IND'){
            return (`
            [Server]> ${value}$ >> Indian Rupees
            [Server]> ${Math.round(value * 82.76 * 100) / 100} ₹
            `)
        } else if (to == `sar` || to == `Sar` || to == 'SAR'){
            return (`
            [Server]> ${value}$ >> Saudi riyals
            [Server]> ${Math.round(value * 3.75 * 100) / 100} Riyals
            `)
        } else if (to == `eur` || to==`Eur` || to == 'EUR'){
            return (`
            [Server]> ${value}$ >> Euros
            [Server]> ${Math.round(value * 0.93 * 100) / 100} Euros
            `)
        } else{
            return (`
            Please enter "TO" statement Correctly
            Supported Currencies: IND, EUR, SAR
            `)
        }
    } else if (from == 'Ind' || from == 'ind' || from == 'IND') {
        if(to == 'usd' || to == 'Usd' || to == 'USD'){
            return (`
            [Server]> ${value}₹ >> Dollars
            [Server]> ${Math.round(value / 82.76 * 100) / 100}$
            `)
        } else if (to == 'eur' || to == 'Eur' || to == 'EUR') {
            return (`
            [Server]> ${value}₹ >> Euros
            [Server]> ${Math.round(value / 89.09 * 100) / 100} Euros
            `)
        } else if(to == 'Sar' || to == 'sar' || to == 'SAR') {
            return (`
            [Server]> ${value}₹ >> Saudi Riyals
            [Server]> ${Math.round(value / 22.07 * 100) / 100} SAR
            `)
        } else {
            return (`
            Please enter "TO" statement Correctly
            Supported Currencies: USD, EUR, SAR
            `)
        }
    } else if (from == 'eur' || from == 'Eur' || from == 'EUR') {
        if(to == 'Ind' || to == 'IND' || to == 'ind'){
            return (`
            [Server]> ${value} Euros >> Indian Rupees
            [Server]> ${Math.round(value * 89.09 * 100) / 100}₹
            `)
        } else if(to == 'USD' || to =='usd' ||to == 'Usd'){
            return (`
            [Server]> ${value} Euros >> US Dollars
            [Server]> ${Math.round(value * 1.08 * 100) / 100}$
            `)
        } else if (to == 'Sar' || to == 'SAR' || to == 'sar') {
            return (`
            [Server]> ${value} Euros >> Saudi Riyals
            [Server]> ${Math.round(value * 4.04 * 100) / 100} Riyals
            `)
        } else {
            return (`
            Please enter "TO" statement Correctly
            Supported Currencies: USD, IND, SAR
            `)
        }
    } else if (from == 'Sar' || from == 'SAR' || from == 'sar') {
        if(to == 'eur' || to == 'Eur' || to == 'EUR'){
            return (`
            [Server]> ${value} SAR >> Euros
            [Server]> ${Math.round(value / 4.04 * 100) / 100} Euros
            `)
        } else if (to == 'Ind' || to == 'IND' || to == 'ind') {
            return (`
            [Server]> ${value} SAR >> Indian Rupees
            [Server]> ${Math.round(value * 22.07 * 100) / 100}₹
            `)
        } else if (to == 'USD' || to == 'usd' || to == 'Usd') {
            return (`
            [Server]> ${value} SAR >> US Dollars
            [Server]> ${Math.round(value / 3.75 * 100) / 100}$
            `)
        } else {
            return (`
            Please enter "TO" statement Correctly
            Supported Currencies: USD, IND, SAR
            `)
        }
    } else {
        return (`
            Please enter "FROM" statement Correctly
            Supported Currencies: USD, IND, SAR, EUR
        `)
    }
}

export{__moneyConverter}