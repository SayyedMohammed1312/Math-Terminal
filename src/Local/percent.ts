function percentOf(what:number, of:number){
    return(
        `${what}% of ${of} = ${(what/100) * of}`
    )
}

function whatPercent(number:number, of_number:number){
    return(
        `${number} is ${(number / of_number) * 100}% of ${of_number}`
    )
}

export {percentOf,whatPercent} 