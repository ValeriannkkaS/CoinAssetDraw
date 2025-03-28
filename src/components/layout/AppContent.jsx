import {Layout, Typography} from "antd";
import {useThemeContext} from "../../context/ThemeContext";
import {useCryptoContext} from "../../context/CryptoContext";
import PortfolioChart from "../PortfolioChart";
import AssetsTable from "../AssetsTable";

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    padding: '1rem',
    overflowY: 'scroll',
    scrollbarWidth: 'thin',
};

export default function AppContent() {
    const {theme} = useThemeContext();
    const {assets, crypto} = useCryptoContext();

    const cryptoPriceMap = crypto.reduce((accum, coin) => {
        accum[coin.id] = coin.price;
        return accum;
    }, {});

    return(
        <Layout.Content style={{
            backgroundColor: theme.content.background,
            scrollbarColor: theme.sidebar.scrollbar,
            ...contentStyle
        }}>
            <Typography.Title level={3} style={{
                textAlign: 'left'
            }}>
                Portfolio {assets.map((asset) => {
                    return asset.amount * cryptoPriceMap[asset.id]
            }).reduce((accum, value) => accum += value, 0).toFixed(2)}$
            </Typography.Title>
            <PortfolioChart/>
            <AssetsTable/>
        </Layout.Content>
    )
}