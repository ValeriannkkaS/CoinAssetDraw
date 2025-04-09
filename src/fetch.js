const COIN_STATS_API_KEY = import.meta.env.VITE_COIN_STATS_API_KEY;
const COIN_GECKO_API_KEY = import.meta.env.VITE_COIN_GECKO_API_KEY;

const optionsForFetchPriceByTime = {
    //временное решение (дает только на дату, не на время)
    method: 'GET',
    headers: {
        accept: 'application/json',
        'x-cg-api-key': COIN_GECKO_API_KEY,
    },
};
export const getPriceByTime = async (date, coin) => {
    try {
        const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/${coin}/history?vs_currency=usd&date=${date}&localization=false`,
            optionsForFetchPriceByTime,
        );
        if (!response.ok) throw new Error('Could not fetch coin price');

        const json = await response.json();
        return json.market_data.current_price.usd.toFixed(2);
    } catch (error) {
        console.log(error);
        throw error;
    }
};
const optionsForFetchChartData = {
    //приблизительная функция для запросов
    method: 'GET',
    headers: {
        accept: 'application/json',
        'X-API-KEY': COIN_STATS_API_KEY,
    },
};
export const fetchChartsData = async (coin, period) => {
    try {
        const response = await fetch(
            `https://openapiv1.coinstats.app/coins/${coin}/charts?period=${period}`,
            optionsForFetchChartData,
        );
        if (!response.ok) throw new Error('Coins not found');
        return await response.json();
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};
