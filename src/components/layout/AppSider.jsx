import {Layout, Card, Statistic, List, Typography, Tag} from 'antd';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons'
import {capitalize} from '../../utils'
import {useCryptoContext} from "../../context/CryptoContext";
import {useThemeContext} from "../../context/ThemeContext";

const siderStyle = {
   padding: '0.5rem',
   height: 'calc(100vh - 60px)',
   overflowY: 'scroll',
   scrollbarWidth: 'thin',
};

export default function AppSider() {
    const cryptoContext = useCryptoContext();
    const {theme} = useThemeContext();

    return(
        <Layout.Sider width="24%" style={{
            backgroundColor: theme.sidebar.background,
            scrollbarColor: theme.sidebar.scrollbar,
            ...siderStyle
        }}>
            {cryptoContext.assets.map((asset) => (
                <Card key={asset.id} style={{marginBottom: '1rem'}}>
                    <Statistic
                        title={capitalize(asset.id)}
                        value={asset.totalAmount}
                        precision={3}
                        valueStyle={{
                            color: (asset.grow) ? theme.cards.positiveText : theme.cards.negativeText,
                        }}
                        prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                        suffix="$"
                    />
                    <List
                        size='small'
                        dataSource={[
                            {title: 'Total Profit', value: asset.totalProfit, withTag: true},
                            {title: 'Asset Amount', value: asset.amount, isPlain: true},
                        ]}
                        renderItem={(item) => (
                            <List.Item>
                                <span>{item.title}</span>
                                <span>
                                    {item.withTag && (
                                        <Tag color={asset.grow ? 'green' : 'red'}>{asset.growPercent}%</Tag>
                                    )}
                                    {item.isPlain && (
                                            <>
                                                {item.value.toFixed(2)}
                                            </>
                                    )}
                                    {!item.isPlain && (
                                        <Typography.Text type={asset.grow ? 'success' : 'danger'}>
                                            {item.value.toFixed(2)}$
                                        </Typography.Text>
                                    )}
                                </span>
                            </List.Item>
                        )}
                    />
                </Card>
            ))}
        </Layout.Sider>
    )
}