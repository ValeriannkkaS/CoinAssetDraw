export function percentDiffCounter(priceInitial, priceNow) {
    return 100 * Math.abs((priceInitial - priceNow) / ((priceInitial + priceNow) / 2) )
}