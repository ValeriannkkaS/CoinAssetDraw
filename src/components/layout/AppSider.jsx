import {Layout, Card, Statistic, List, Typography, Tag} from 'antd';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons'
import {capitalize} from '../../utils'
import {useCryptoContext} from "../../context/CryptoContext";

const siderStyle = {
   padding: '0.5rem',
   backgroundColor: '#087ea4',
   height: 'calc(100vh - 60px)',
   overflowY: 'scroll',
   scrollbarWidth: 'thin',
   scrollbarColor: '#84bfd2 white',
};

export default function AppSider() {
    const cryptoContext = useCryptoContext();

    return(
        <Layout.Sider width="24%" style={siderStyle}>
            {cryptoContext.assets.map((asset) => (
                <Card key={asset.id} style={{marginBottom: '1rem'}}>
                    <Statistic
                        title={capitalize(asset.id)}
                        value={asset.totalAmount}
                        precision={3}
                        valueStyle={{
                            color: (asset.grow) ? '#3f8600' : '#cf1322',
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
                                        <Typography.Text>
                                            {item.value.toFixed(2)}
                                            </Typography.Text>
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