"use strict";
/**
 * Get the Loss from SP and CP
 * @param SP SellingP
 * @param CP Cost P
 * @returns CP - SP
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.__getSellingPriceL = exports.__getCostPriceL = exports.__getLoss = exports.__LossPercentFromLoss = exports.__LossFromLossPercent = void 0;
const __getLoss = (SP, CP) => {
    return (SP > CP ? 'SP should be Geater Than CP' : `
        -----------------------------
        Loss: ${CP - SP}
        -----------------------------
    `);
};
exports.__getLoss = __getLoss;
/**
 * Gett the loss from Loss and CP
 * @param Loss Loss
 * @param CP CostPrice
 * @returns Loss
 */
const __LossPercentFromLoss = (Loss, CP) => {
    return (`
        Loss: ${(Loss / CP) * 100},
        Selling_price: ${CP - Loss}
    `);
};
exports.__LossPercentFromLoss = __LossPercentFromLoss;
/**
 * Get loss from loss percent
 * @param LossPercent Loss%
 * @param CP CostPrice
 * @returns Loss
 */
const __LossFromLossPercent = (LossPercent, CP) => {
    var Loss = (LossPercent * CP) / 100;
    return (`
        Loss: ${Loss},
        Selling_price: ${CP - Loss}
    `);
};
exports.__LossFromLossPercent = __LossFromLossPercent;
/**
 * CP
 * @param Loss Loss
 * @param SP SP
 * @returns CP
 */
const __getCostPriceL = (Loss, SP) => {
    return (`
        CP: ${SP + Loss}
    `);
};
exports.__getCostPriceL = __getCostPriceL;
/**
 * SP
 * @param Loss Loss
 * @param CP CP
 * @returns SP
 */
const __getSellingPriceL = (Loss, CP) => {
    return (`
        SP: ${CP - Loss}
    `);
};
exports.__getSellingPriceL = __getSellingPriceL;
