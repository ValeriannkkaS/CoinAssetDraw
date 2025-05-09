import {
    Layout,
    Card,
    Statistic,
    List,
    Typography,
    Tag,
    Modal,
    Popover,
} from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { capitalize } from '../utils/utils.js';
import { useCryptoContext } from '../context/CryptoContext.jsx';
import { useThemeContext } from '../context/ThemeContext.jsx';
import { useState } from 'react';
import AssetInfoModal from '../components/AssetInfoModal.jsx';
import StyledModal from '../components/StyledModal.jsx';
import StyledCard from '../components/StyledCard.jsx';

const siderStyle = {
    padding: '0.5rem',
    minHeight: 'calc(100vh - 60px)',
    maxHeight: '120vh',
    overflowY: 'scroll',
    scrollbarWidth: 'thin',
};

export default function AppSider() {
    const [modal, setModal] = useState(false);
    const [coin, setCoin] = useState(null);

    const { assets, crypto } = useCryptoContext();
    const { theme } = useThemeContext();

    return (
        <Layout.Sider
            width="24%"
            style={{
                backgroundColor: theme.sidebar.background,
                scrollbarColor: theme.sidebar.scrollbar,
                ...siderStyle,
            }}
        >
            {assets.map((asset) => (
                <Popover
                    key={asset.id}
                    content={'about your purchases of ' + capitalize(asset.id)}
                    title="Click to see more detailed information"
                >
                    <StyledCard
                        key={asset.id}
                        hoverable
                        style={{ marginBottom: '1rem' }}
                        onClick={() => {
                            setModal(true);
                            setCoin(
                                crypto.find((coin) => coin.id === asset.id),
                            );
                        }}
                    >
                        <Statistic
                            title={capitalize(asset.id)}
                            value={asset.totalInvested}
                            precision={3}
                            valueStyle={{
                                color: asset.grow
                                    ? theme.cards.positiveText
                                    : theme.cards.negativeText,
                            }}
                            prefix={
                                asset.grow ? (
                                    <ArrowUpOutlined />
                                ) : (
                                    <ArrowDownOutlined />
                                )
                            }
                            suffix="$"
                        />
                        <List
                            size="small"
                            dataSource={[
                                {
                                    title: 'Total Profit',
                                    value: asset.totalProfit,
                                    withTag: true,
                                },
                                {
                                    title: 'Asset Amount',
                                    value: asset.totalAmount,
                                    isPlain: true,
                                },
                            ]}
                            renderItem={(item) => (
                                <List.Item>
                                    <span>{item.title}</span>
                                    <span>
                                        {item.withTag && (
                                            <Tag
                                                color={
                                                    asset.grow ? 'green' : 'red'
                                                }
                                            >
                                                {asset.growPercent.toFixed(2)}%
                                            </Tag>
                                        )}
                                        {item.isPlain && <>{item.value}</>}
                                        {!item.isPlain && (
                                            <Typography.Text
                                                type={
                                                    asset.grow
                                                        ? 'success'
                                                        : 'danger'
                                                }
                                            >
                                                {item.value.toFixed(3)}$
                                            </Typography.Text>
                                        )}
                                    </span>
                                </List.Item>
                            )}
                        />
                    </StyledCard>
                </Popover>
            ))}
            <StyledModal
                title="information about your asset:"
                open={modal}
                onOk={() => setModal(false)}
                onCancel={() => setModal(false)}
                footer={null}
                width="60%"
                destroyOnClose
            >
                <AssetInfoModal coin={coin} />
            </StyledModal>
        </Layout.Sider>
    );
}
