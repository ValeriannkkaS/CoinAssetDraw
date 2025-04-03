import { useChartDataContext } from '../context/ChartDataContext.jsx';
import { Result, Spin, Button } from 'antd';
import { PropTypes } from 'prop-types';
import { styled } from 'styled-components';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useState, useRef } from 'react';

const ContainerForChart = styled.div`
    width: 100%;
    min-height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
);

export default function ChartForModal({ coin }) {
    const [gradient, setGradient] = useState('rgb(205, 0, 0)');

    const chartRef = useRef(null);

    const { loading, error, changeCoin, changeError, chartData, grow } =
        useChartDataContext();

    useEffect(() => {
        changeCoin(coin.id);
    }, []);
    useEffect(() => {
        const ctx = chartRef.current.ctx;
        const chartArea = chartRef.current.chartArea;
        const gradientFill = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom,
        );
        gradientFill.addColorStop(
            0,
            grow ? 'rgb(0, 185, 45)' : 'rgb(255, 0, 0)',
        ); // Верх - голубой
        gradientFill.addColorStop(1, 'rgb(205, 205, 205)'); // Низ - розовый

        setGradient(gradientFill);

        if (!chartArea) return;
    }, [chartData]);

    if (loading) {
        return (
            <ContainerForChart>
                <Spin size="large"></Spin>
            </ContainerForChart>
        );
    }
    if (error) {
        return (
            <ContainerForChart>
                <Result
                    status="warning"
                    title="No luck uploading the information."
                    extra={
                        <Button
                            type="primary"
                            key="console"
                            onClick={() => changeError(false)}
                        >
                            Try again
                        </Button>
                    }
                />
            </ContainerForChart>
        );
    }
    const optionsForChart = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
    };
    const dataForChart = {
        labels: chartData.map((slice) =>
            new Date(slice[0] * 1000).toLocaleDateString(),
        ),
        datasets: [
            {
                fill: true,
                label: 'Dataset 2',
                data: chartData.map((slice) => slice[1]),
                borderColor: grow ? 'rgb(0, 129, 31)' : 'rgb(161, 0, 0)',
                backgroundColor: gradient,
                pointRadius: 0,
                pointHoverRadius: 5,
            },
        ],
    };

    return (
        <ContainerForChart>
            <Line
                ref={chartRef}
                data={dataForChart}
                options={optionsForChart}
            />
        </ContainerForChart>
    );
}
ChartForModal.propTypes = {
    coin: PropTypes.shape({
        id: PropTypes.string,
    }),
};
