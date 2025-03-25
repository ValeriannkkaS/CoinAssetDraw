const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-pro-api-key': 'CG-fFYANEwdjEAEojrzbuRqd7jJ'}
};




export async function getPriceByTime(date, coin) {
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-api-key': 'CG-fFYANEwdjEAEojrzbuRqd7jJ'}
    };
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}/history?vs_currency=usd&date=${date}&localization=false`, options);
        const json = await response.json();
        return json.market_data.current_price.usd.toFixed(2);
    }catch (e) {
        throw e;
    }



}