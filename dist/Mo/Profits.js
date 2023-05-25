"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__profitPercentFromProfit = exports.__profitFromProfitPercent = exports.__getSelling_priceP = exports.__getProfit = exports.__getCost_priceP = void 0;
const __getProfit = (cost_price, selling_price) => {
    return (selling_price < cost_price ? 'Selling_price must be greater than Cost_price' : `
        ------------------
        Profit: ${selling_price - cost_price}₹
        ------------------
    `);
};
exports.__getProfit = __getProfit;
const __profitPercentFromProfit = (profit, CP) => {
    var ProfitPercent = (profit / CP) * 100;
    var Selling_price = profit + CP;
    // var Profit = Selling_price - Cost_price
    return (`
        Selling_price: ${Selling_price}
        Profit%: ${ProfitPercent}%
    `);
};
exports.__profitPercentFromProfit = __profitPercentFromProfit;
const __profitFromProfitPercent = (profitpercent, CP) => {
    var profit = (profitpercent * CP) / 100;
    var selling_price = CP + profit;
    return (`
        Profit: ${profit}
        Selling_price: ${selling_price}
        `);
};
exports.__profitFromProfitPercent = __profitFromProfitPercent;
const __getCost_priceP = (Profit, SP) => {
    return (`
        CP: ${SP - Profit}
    `);
};
exports.__getCost_priceP = __getCost_priceP;
const __getSelling_priceP = (Profit, CP) => {
    return (`
        SP: ${CP + Profit}
    `);
};
exports.__getSelling_priceP = __getSelling_priceP;
