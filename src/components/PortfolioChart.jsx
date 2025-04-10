import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useCryptoContext } from '../context/CryptoContext';
import { capitalize } from '../utils';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PortfolioChart() {
    const { assets } = useCryptoContext();

    const data = {
        labels: assets.map((asset) => capitalize(asset.id)),
        datasets: [
            {
                label: 'Total amount ($)',
                data: assets.map((asset) => asset.totalAmount),
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
                marginBottom: '1rem',
                justifyContent: 'center',
                height: '50vh',
            }}
        >
            <Doughnut data={data} />
        </div>
    );
}
