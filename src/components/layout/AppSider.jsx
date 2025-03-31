import {Layout, Card, Statistic, List, Typography, Tag, Modal, Divider, Popover} from 'antd';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons'
import {capitalize} from '../../utils'
import {useCryptoContext} from "../../context/CryptoContext";
import {useThemeContext} from "../../context/ThemeContext";
import CoinInfoModal from "../CoinInfoModal";
import {useState} from 'react'
import AssetInfoModal from "../AssetInfoModal";

const siderStyle = {
   padding: '0.5rem',
   height: 'calc(100vh - 60px)',
   overflowY: 'scroll',
   scrollbarWidth: 'thin',
};

export default function AppSider() {
    const [modal, setModal] = useState(false);
    const [coin, setCoin] = useState(null);

    const {assets, crypto} = useCryptoContext();
    const {theme} = useThemeContext();



    return(
        <Layout.Sider width="24%" style={{
            backgroundColor: theme.sidebar.background,
            scrollbarColor: theme.sidebar.scrollbar,
            ...siderStyle
        }}>
            {assets.map((asset) => (
                <Popover content={'about your purchases of ' + capitalize(asset.id)} title="Click to see more detailed information">
                    <Card
                        key={asset.id}
                        style={{marginBottom: '1rem'}}
                        hoverable
                        onClick={() => {
                            setModal(true);
                            setCoin(crypto.find((coin) => coin.id === asset.id));
                            console.log(asset.id)
                        }}
                    >
                        <Statistic
                            title={capitalize(asset.id)}
                            value={asset.totalInvested}
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
                                {title: 'Asset Amount', value: asset.totalAmount, isPlain: true},
                            ]}
                            renderItem={(item) => (
                                <List.Item>
                                    <span>{item.title}</span>
                                    <span>
                                        {item.withTag && (
                                            <Tag color={asset.grow ? 'green' : 'red'}>{asset.growPercent.toFixed(2)}%</Tag>
                                        )}
                                        {item.isPlain && (
                                                <>
                                                    {item.value}
                                                </>
                                        )}
                                        {!item.isPlain && (
                                            <Typography.Text type={asset.grow ? 'success' : 'danger'}>
                                                {console.log(item.value)}
                                                {item.value.toFixed(3)}$
                                            </Typography.Text>
                                        )}
                                    </span>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Popover>
            ))}
            <Modal
                title="information about your asset:"
                open={modal}
                onOk={() => setModal(false)}
                onCancel={() => setModal(false)}
                footer={null}
            >
                <AssetInfoModal
                    coin={coin}
                    assets={

}
                />

            </Modal>
        </Layout.Sider>
    )
}