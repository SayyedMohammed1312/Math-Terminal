/**
 * Get the Loss from SP and CP
 * @param SP SellingP
 * @param CP Cost P
 * @returns CP - SP
 */

const __getLoss = (SP:number, CP:number) =>{
    return (SP > CP ? 'SP should be Geater Than CP' : `
        -----------------------------
        Loss: ${CP - SP}
        -----------------------------
    `)
}

/**
 * Gett the loss from Loss and CP
 * @param Loss Loss
 * @param CP CostPrice
 * @returns Loss
 */

const __LossPercentFromLoss = (Loss:number,CP:number) => {
    return (`
        Loss: ${(Loss / CP) * 100},
        Selling_price: ${CP - Loss}
    `)
}

/**
 * Get loss from loss percent
 * @param LossPercent Loss%
 * @param CP CostPrice
 * @returns Loss
 */

const __LossFromLossPercent = (LossPercent:number, CP:number) => {
    var Loss = (LossPercent * CP) / 100

    return (`
        Loss: ${Loss},
        Selling_price: ${CP - Loss}
    `)
}

/**
 * CP
 * @param Loss Loss
 * @param SP SP
 * @returns CP
 */

const __getCostPriceL = (Loss:number, SP:number) => {
    return (`
        CP: ${SP + Loss}
    `)
}

/**
 * SP
 * @param Loss Loss
 * @param CP CP
 * @returns SP
 */

const __getSellingPriceL = (Loss:number, CP:number) => {
    return (`
        SP: ${CP - Loss}
    `)
}

export {
    __LossFromLossPercent,
    __LossPercentFromLoss,
    __getLoss,
    __getCostPriceL,
    __getSellingPriceL
}