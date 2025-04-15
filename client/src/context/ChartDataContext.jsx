import { createContext, useContext, useEffect, useState } from 'react';
import { fetchChartsData } from '../fetch.js';
import { PropTypes } from 'prop-types';

const ChartDataContext = createContext({
    chartData: [],
    loading: true,
});

export const useChartDataContext = () => {
    return useContext(ChartDataContext);
};
export default function ChartDataContextProvider({ children }) {
    const [chartData, setChartData] = useState(null);
    const [period, setPeriod] = useState('all');
    const [coin, setCoin] = useState(null);
    const [error, setError] = useState(null);
    const [grow, setGrow] = useState(true);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            if (!coin || !period) return;
            try {
                const data = await fetchChartsData(coin, period);
                setChartData(data);
                setGrow(data[0][1] < data.at(-1)[1]);
            } catch (error) {
                setError(error.message);
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [period, coin, error]);

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
                coin: coin,
                grow: grow,
                changePeriod: changePeriod,
                changeCoin: changeCoin,
                changeError: changeError,
            }}
        >
            {children}
        </ChartDataContext.Provider>
    );
}
ChartDataContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
