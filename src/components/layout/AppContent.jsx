import { Flex, Layout, Typography } from 'antd';
import { useThemeContext } from '../../context/ThemeContext';
import { useCryptoContext } from '../../context/CryptoContext';
import PortfolioChartDistribution from '../PortfolioChartDistribution.jsx';
import AssetsTable from '../AssetsTable';
import PortfolioChartValueChange from '../PortfolioChartValueChange.jsx';

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    padding: '1rem',
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
            <Typography.Title
                level={3}
                style={{
                    textAlign: 'center',
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
            <Flex gap={15}>
                <PortfolioChartValueChange />
                <PortfolioChartDistribution />
            </Flex>
            <AssetsTable />
        </Layout.Content>
    );
}
