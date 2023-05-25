/**
 * Get the Loss from SP and CP
 * @param SP SellingP
 * @param CP Cost P
 * @returns CP - SP
 */
declare const __getLoss: (SP: number, CP: number) => string;
/**
 * Gett the loss from Loss and CP
 * @param Loss Loss
 * @param CP CostPrice
 * @returns Loss
 */
declare const __LossPercentFromLoss: (Loss: number, CP: number) => string;
/**
 * Get loss from loss percent
 * @param LossPercent Loss%
 * @param CP CostPrice
 * @returns Loss
 */
declare const __LossFromLossPercent: (LossPercent: number, CP: number) => string;
/**
 * CP
 * @param Loss Loss
 * @param SP SP
 * @returns CP
 */
declare const __getCostPriceL: (Loss: number, SP: number) => string;
/**
 * SP
 * @param Loss Loss
 * @param CP CP
 * @returns SP
 */
declare const __getSellingPriceL: (Loss: number, CP: number) => string;
export { __LossFromLossPercent, __LossPercentFromLoss, __getLoss, __getCostPriceL, __getSellingPriceL };
