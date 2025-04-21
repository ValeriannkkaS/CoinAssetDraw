import { Flex, Layout, Typography } from 'antd';
import { useThemeContext } from '../context/ThemeContext.jsx';
import { useCryptoContext } from '../context/CryptoContext.jsx';
import PortfolioChartDistribution from '../components/PortfolioChartDistribution.jsx';
import MarketCapBarChart from '../components/MarketCapBarChart.jsx';
import PortfolioChartValueChange from '../components/PortfolioChartValueChange.jsx';
import StyledCard from '../components/StyledCard.jsx';

const contentStyle = {
    textAlign: 'center',
    padding: '1rem',
    minHeight: 'calc(100vh - 60px)',
    maxHeight: '120vh',
    overflowY: 'scroll',
    scrollbarWidth: 'thin',
};

export default function AppContent() {
    const { theme } = useThemeContext();
    const { assets, crypto } = useCryptoContext();

    const cryptoPriceMap = crypto.reduce((accum, coin) => {
        accum[coin.id] = coin.price;
        return accum;
    }, {});

    return (
        <Layout.Content
            style={{
                backgroundColor: theme.content.background,
                scrollbarColor: theme.sidebar.scrollbar,
                ...contentStyle,
            }}
        >
            <StyledCard style={{ marginBottom: '1rem' }}>
                <Typography.Title
                    level={3}
                    style={{
                        textAlign: 'start',
                    }}
                >
                    Portfolio {/*потом будет для каждого портфеля*/}
                    {assets
                        .map((asset) => {
                            return asset.totalAmount * cryptoPriceMap[asset.id];
                        })
                        .reduce((accum, value) => (accum += value), 0)
                        .toFixed(2)}
                    $
                </Typography.Title>
            </StyledCard>
            <Flex gap={15}>
                <PortfolioChartValueChange />
                <PortfolioChartDistribution />
            </Flex>
            <MarketCapBarChart />
        </Layout.Content>
    );
}
