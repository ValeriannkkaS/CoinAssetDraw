import { Typography } from 'antd';
import { useThemeContext } from '../context/ThemeContext.jsx';

export default function CardForMainCharts({ children, title }) {
    const { theme } = useThemeContext();

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
            <Typography.Title level={3}>{title}</Typography.Title>
            <div
                style={{ height: '50vh', width: '100%', position: 'relative' }}
            >
                {children}
            </div>
        </div>
    );
}
