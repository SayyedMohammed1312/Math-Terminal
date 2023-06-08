function subtract(number:number, num2:number) {
    return(number > num2 ? number - num2 : `Will be in negative ${number - num2}`)
}

export {subtract}