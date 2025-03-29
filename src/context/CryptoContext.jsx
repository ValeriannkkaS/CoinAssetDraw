import {createContext, useEffect, useState, useContext} from 'react'
import {cryptoAssets} from "../data";
import {fakeFetchAssets, fakeFetchCrypto} from "../api";
import {calculateAveragePrice, percentDiffCounter} from "../utils";


const CryptoContext = createContext({
    assets: [],
    crypto: [],
    loading: false,
});

export const useCryptoContext = () => {
    return useContext(CryptoContext);
};//CryptoContext - приватная переменная, получать контекст через эту функцию

export function CryptoContextProvider({children}) {
    const [loading, setLoading] = useState(true); // state загрузочного экрана
    const [assets, setAssets] = useState([]);
    const [crypto, setCrypto] = useState([]);
    
    function revertingAssets(result, assets) {

        return assets.map((asset) => {
            const coin = result.find( (coin) => coin.id === asset.id);
            const currentPrice = asset.transactions.reduce((sum, current) => sum + coin.price * current.amount , 0);
            const totalInvested = asset.transactions.reduce((sum, current) => sum + current.price * current.amount , 0);
            const totalAmount = asset.transactions.reduce((sum, current) => sum + current.amount, 0);
            return {
                id: asset.id,
                averagePrice: calculateAveragePrice(asset.transactions),
                totalInvested: totalInvested,
                totalAmount: totalAmount,
                currentPrice: currentPrice,
                grow: currentPrice > totalInvested,
                growPercent: (currentPrice - totalInvested) / totalInvested * 100,
                totalProfit: currentPrice - totalInvested,
                ...asset
            }
        })
    }

    function mapAsset(result, asset) {
        const coin = result.find((c) => c.id === asset.id);
        return {
            grow: asset.price  <  coin.price, // boolean
            growPercent: percentDiffCounter(asset.price, coin.price),
            totalAmount: asset.amount * coin.price,
            totalProfit: asset.amount * coin.price - asset.amount * asset.price,
            ...asset,
        }
    }

    useEffect(() => {
        async function preload() {
            setLoading(true);
            const assets = await fakeFetchAssets();
            const {result} = await fakeFetchCrypto();

            setAssets(revertingAssets(result, assets));
            setCrypto(result);

            setLoading(false);
        }
        preload()
    }, []);

    function addNewAsset(newAsset, crypto) {//нужно оптимизировать, чтобы можно было добавить монету,
        //которая уже есть в портфеле, и высчитывать окончательную прибыль, убыль(формула???)
        //+ нужно сделать так, чтобы изменения сохранялись
        console.log(crypto);
        setAssets((prev) => [...prev, mapAsset(crypto, newAsset)])
    }

    return(
        <CryptoContext.Provider value={{
            loading: loading,
            assets: assets,
            crypto: crypto,
            addNewAsset: addNewAsset,
        }}>
            {children}
        </CryptoContext.Provider>
    )
}