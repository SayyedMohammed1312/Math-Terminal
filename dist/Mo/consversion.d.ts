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
declare function __moneyConverter(from: string, to: string, value: number): string;
export { __moneyConverter };
