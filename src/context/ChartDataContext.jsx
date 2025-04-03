import { createContext, useContext, useEffect, useState } from 'react';
import { fetchChartsData } from '../fetch.js';

const ChartDataContext = createContext({
    data: [],
    loading: true,
});

export const useChartDataContext = () => {
    return useContext(ChartDataContext);
};
export default function ChartDataContextProvider({ children }) {
    const [chartData, setChartData] = useState(null);
    const [period, setPeriod] = useState('24h');
    const [coin, setCoin] = useState(null);
    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                //const data = await fetchChartsData(coin, period);
                const data = 1;
                setChartData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setTimeout(() => setLoading(false), 2000);
            }
        };
        fetchData();
    }, [period]);

    const changePeriod = (period) => {
        setPeriod(period);
    };
    const changeCoin = (coin) => {
        setCoin(coin);
    };
    const changeError = (value) => {
        setError(value);
    };

    return (
        <ChartDataContext.Provider
            value={{
                chartData: chartData,
                loading: loading,
                error: error,
                changePeriod: changePeriod,
                changeCoin: changeCoin,
                changeError: changeError,
            }}
        >
            {children}
        </ChartDataContext.Provider>
    );
}
