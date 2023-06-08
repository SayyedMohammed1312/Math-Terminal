function factorial (num:number)  {
    const number = num
    if (num === 0 || num === 1) return (`[0! or 1! = ${1}]`);
    for (var i = num - 1; i >= 1; i--) { num *= i; };
    return (`${number}! = ${num}`);
}

export {factorial}