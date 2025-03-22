import {Layout, Card, Statistic, List, Typography, Spin, Tag} from 'antd';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons'
import {useEffect, useState} from 'react'
import {fakeFetchAssets, fakeFetchCrypto} from "../../api";
import {percentDiffCounter, capitalize} from '../../utils'

const siderStyle = {
   padding: '0.5rem',
   backgroundColor: '#087ea4',
};

export default function AppSider() {

    const [loading, setLoading] = useState(true); // state загрузочного экрана
    const [assets, setAssets] = useState([]);
    const [crypto, setCrypto] = useState([]);

    useEffect(() => {
        async function preload() {
            setLoading(true);
            const assets = await fakeFetchAssets();
            const {result} = await fakeFetchCrypto();

            setAssets(assets.map((asset) => {
                const coin = result.find((c) => c.id === asset.id);
                return {
                    grow: asset.price  <  coin.price, // boolean
                    growPercent: percentDiffCounter(asset.price, coin.price),
                    totalAmount: asset.amount * coin.price,
                    totalProfit: asset.amount * coin.price - asset.amount * asset.price,
                    ...asset,
                }
            }));
            setCrypto(result);

            setLoading(false);
        }
        preload()
    }, []);
    
    if (loading) { //Спин во время загрузки
        return(
            <Spin spinning={loading} fullscreen/>
        )
    }
    
    return(
        <Layout.Sider width="25%" style={siderStyle}>
            {assets.map((asset) => (
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