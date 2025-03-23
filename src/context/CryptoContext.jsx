import {createContext, useEffect, useState, useContext} from 'react'
import {cryptoAssets} from "../data";
import {fakeFetchAssets, fakeFetchCrypto} from "../api";
import {percentDiffCounter} from "../utils";


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

    useEffect(() => {
        async function preload() {
            setLoading(true);
            const assets = await fakeFetchAssets();
            const {result} = await fakeFetchCrypto();

            setAssets(assets.map((asset) => {
                const coin = result.find((c) => c.id === asset.id);
                return {
                    grow: asset.price  <  coin.price, // boolean
                    growPercent: percentDiffCounter(asset.price, coin.price),
                    totalAmount: asset.amount * coin.price,
                    totalProfit: asset.amount * coin.price - asset.amount * asset.price,
                    ...asset,
                }
            }));
            setCrypto(result);

            setLoading(false);
        }
        preload()
    }, []);

    return(
        <CryptoContext.Provider value={{
            loading: loading,
            assets: assets,
            crypto: crypto,
        }}>
            {children}
        </CryptoContext.Provider>
    )
}