import {Layout, Card, Statistic, List, Typography, Spin} from 'antd';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons'
import {useEffect, useState} from 'react'
import {fakeFetchAssets, fakeFetchCrypto} from "../../api";
import {percentDiffCounter} from '../../utils'

const siderStyle = {
   padding: '1rem',

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
                    grow: asset.price >  coin.price, // boolean
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
    
    if (loading) {
        return(
            <Spin spinning={loading} fullscreen/>
        )
    }
    
    return(
        <Layout.Sider width="25%" style={siderStyle}>
            {assets.map((asset) => (
                <Card key={asset.id} style={{marginBottom: '1rem'}}>
                    <Statistic
                        title={asset.id}
                        value={asset.totalAmount}
                        precision={3}
                        valueStyle={{
                            color: (asset.grow) ? '#cf1322' : '#3f8600',
                        }}
                        prefix={asset.grow ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                        suffix="$"
                    />
                    <List
                        size='small'
                        dataSource={[
                            {title: 'Total Profit', value: asset.totalProfit},
                            {title: 'Asset Amount', value: asset.amount},
                            {title: 'Difference', value: asset.growPercent},
                        ]}
                        renderItem={(item) => (
                            <List.Item>
                                <span>{item.title}</span>
                                <span>{item.value}</span>
                            </List.Item>
                        )}
                    />
                </Card>
            ))}
        </Layout.Sider>
    )
}