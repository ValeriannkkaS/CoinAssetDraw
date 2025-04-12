import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Card, Typography } from 'antd';
import { Doughnut } from 'react-chartjs-2';
import { useCryptoContext } from '../context/CryptoContext';
import { capitalize } from '../utils';
import { useThemeContext } from '../context/ThemeContext.jsx';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PortfolioChart() {
    const { assets } = useCryptoContext();
    const { theme } = useThemeContext();

    const data = {
        labels: assets.map((asset) => capitalize(asset.id)),
        datasets: [
            {
                label: 'Total amount ($)',
                data: assets.map((asset) => asset.totalInvested),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div
            style={{
                display: 'flex',
                padding: '0.5rem',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                width: '50%',
                borderRadius: '1rem',
                border: '1px solid ',
                borderColor: theme.cards.border,
                backgroundColor: theme.cards.background,
            }}
        >
            <Typography.Title level={3}>
                Сryptocurrency distribution:
            </Typography.Title>
            <div
                style={{ height: '50vh', width: '100%', position: 'relative' }}
            >
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
                            }, // или position: 'bottom'
                        },
                    }}
                />
            </div>
        </div>
    );
}
