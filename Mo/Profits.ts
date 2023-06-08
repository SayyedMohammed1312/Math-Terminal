const __getProfit = (cost_price:number, selling_price:number) => {

    return (selling_price < cost_price ? 'Selling_price must be greater than Cost_price' : `
        ------------------
        Profit: ${selling_price - cost_price}₹
        ------------------
    `)
}

const __profitPercentFromProfit = (profit:number, CP:number) => {

    var ProfitPercent = (profit / CP) * 100;
    var Selling_price = profit + CP;
    // var Profit = Selling_price - Cost_price


    return (`
        Selling_price: ${Selling_price}
        Profit%: ${ProfitPercent}%
    `)
}

const __profitFromProfitPercent = (profitpercent:number, CP:number) => {
    var profit = (profitpercent * CP) / 100
    var selling_price = CP + profit


    return (
        `
        Profit: ${profit}
        Selling_price: ${selling_price}
        `
    );
}

const __getCost_priceP = (Profit:number,  SP:number) => {
    return (`
        CP: ${SP - Profit}
    `)
}

const __getSelling_priceP = (Profit:number, CP:number) => {
    return (`
        SP: ${CP + Profit}
    `)
}

export{__getCost_priceP,__getProfit,__getSelling_priceP,__profitFromProfitPercent,__profitPercentFromProfit}