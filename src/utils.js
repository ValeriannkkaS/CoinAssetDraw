export function percentDiffCounter(priceInitial, priceNow) {
    return +(100 * Math.abs((priceInitial - priceNow) / ((priceInitial + priceNow) / 2) )).toFixed(2)
}

export function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
}

export function dateToString(value) {
    const date = value.$d;
    const day = '' + date.getDate();
    const month = 1 + date.getMonth() + '';
    const year = date.getFullYear() + '';
    const str = `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${year}`;
    return str;
}

export function calculateAveragePrice(transactions){//array
    const totalCost = transactions.reduce((sum, current) => sum + current.price * current.amount , 0);
    const totalAmount = transactions.reduce((sum, current) => sum + current.amount, 0);

    return (totalCost / totalAmount);//number
}//функция для вычисления средней цены покупки на основании массива транзакций по одной монете