import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useCryptoContext } from '../context/CryptoContext.jsx';
import { capitalize } from '../utils.js';
import CardForMainCharts from './CardForMainCharts.jsx';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PortfolioChartDistribution() {
    const { assets } = useCryptoContext();

    const data = {
        labels: assets.map((asset) => capitalize(asset.id)),
        datasets: [
            {
                label: 'Total amount ($)',
                data: assets.map((asset) => asset.totalInvested),
                backgroundColor: [
                    'rgba(0, 204, 255, 0.8)', // Голубой
                    'rgba(255, 105, 180, 0.8)', // Леденцовый розовый
                    'rgba(34, 193, 195, 0.8)', // Мятный
                    'rgba(253, 29, 29, 0.8)', // Ярко-красный
                    'rgba(186, 85, 211, 0.8)', // Средний фиолетовый
                    'rgba(255, 69, 0, 0.8)', // Огненно-красный
                    'rgba(255, 99, 132, 0.8)', // Красный
                    'rgba(54, 162, 235, 0.8)', // Синий
                    'rgba(255, 206, 86, 0.8)', // Желтый
                    'rgba(75, 192, 192, 0.8)', // Бирюзовый
                    'rgba(153, 102, 255, 0.8)', // Фиолетовый
                    'rgba(255, 159, 64, 0.8)', // Оранжевый
                ],
                borderColor: [
                    'rgba(0, 204, 255, 1)', // Голубой
                    'rgba(255, 105, 180, 1)', // Леденцовый розовый
                    'rgba(34, 193, 195, 1)', // Мятный
                    'rgba(253, 29, 29, 1)', // Ярко-красный
                    'rgba(186, 85, 211, 1)', // Средний фиолетовый
                    'rgba(255, 69, 0, 1)', // Огненно-красный
                    'rgba(255, 99, 132, 1)', // Красный
                    'rgba(54, 162, 235, 1)', // Синий
                    'rgba(255, 206, 86, 1)', // Желтый
                    'rgba(75, 192, 192, 1)', // Бирюзовый
                    'rgba(153, 102, 255, 1)', // Фиолетовый
                    'rgba(255, 159, 64, 1)', // Оранжевый
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <CardForMainCharts title={'Cryptocurrency distibution:'}>
            <Doughnut
                data={data}
                options={{
                    cutout: '85%',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'right',
                        },
                    },
                }}
            />
        </CardForMainCharts>
    );
}
