import styled from 'styled-components';
import { Card, Typography } from 'antd';
import { useThemeContext } from '../context/ThemeContext.jsx';

const ChartStyledCard = styled(Card)`
    &.ant-card {
        background: ${({ theme }) => theme.cards.background};
        border: 1px solid ${({ theme }) => theme.cards.border};
        box-shadow: ${({ theme }) => theme.cards.boxShadow};
        color: ${({ theme }) => theme.cards.text};
        border-radius: 16px;
        padding: 1rem 1.5rem;
    }

    .ant-card-head {
        background: transparent;
        border-bottom: none;
    }

    .ant-card-head-title {
        color: ${({ theme }) => theme.cards.title};
        font-weight: 600;
    }

    .ant-card-body {
        padding: 0.5rem;
        height: 50vh;
    }
`;

export default function CardForMainCharts({ children, title, centered }) {
    const { theme } = useThemeContext();

    return (
        <ChartStyledCard
            style={{ width: centered ? '100%' : '50%', marginBottom: '1rem' }}
            theme={theme}
            title={
                <Typography.Title
                    level={4}
                    style={{
                        margin: 0,
                        textAlign: centered ? 'center' : 'left',
                    }}
                >
                    {title}
                </Typography.Title>
            }
        >
            {children}
        </ChartStyledCard>
    );
}
