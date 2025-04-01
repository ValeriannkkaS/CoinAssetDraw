export async function getPriceByTime(date, coin) {
    const options = {
        //временное решение (дает только на дату, не на время)
        method: 'GET',
        headers: {
            accept: 'application/json',
            'x-cg-api-key': 'CG-fFYANEwdjEAEojrzbuRqd7jJ',
        },
    };
    try {
        const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/${coin}/history?vs_currency=usd&date=${date}&localization=false`,
            options,
        );
        const json = await response.json();
        return json.market_data.current_price.usd.toFixed(2);
    } catch (e) {
        throw e;
    }
}
async function getChartsdata(coin, period) {
    const options = {
        //приблизительная функция для запросов
        method: 'GET',
        headers: {
            'X-API-KEY': 'LofoS1PFtXimDDDNvfCdMSh9OoJWY83QWMbIcgfLrFI=',
        },
    };
    const response = await fetch(
        `https://openapiv1.coinstats.app/coins/${coin}/charts?period=${period}`,
        options,
    );
    const json = await response.json();
    return json;
}
