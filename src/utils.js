export function percentDiffCounter(priceInitial, priceNow) {
    return +(100 * Math.abs((priceInitial - priceNow) / ((priceInitial + priceNow) / 2) )).toFixed(2)
}

export function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
}