import CoinImageDescription from './CoinImageDescription';
import { Divider, Flex, Typography, Table, Tag } from 'antd';
import CoinTrendInformation from './CoinTrendInformation';
import PropTypes from 'prop-types';
import { useCryptoContext } from '../context/CryptoContext.jsx';
import { useState } from 'react';

export default function AssetInfoModal({ coin }) {
    const [pageSize, setPageSize] = useState('5');

    const { assets } = useCryptoContext();
    const currentAsset = assets.find((asset) => asset.id === coin.id);
    const dataSource = currentAsset.transactionsDetails;

    const columns = [
        {
            title: 'Date',
            width: 150,
            dataIndex: 'date',
            key: 'date',
            fixed: 'left',
        },
        {
            title: 'Amount',
            width: 150,
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Purchase Price',
            dataIndex: 'price',
            key: '1',
            width: 150,
            render: (price) => price + ' $',
        },
        {
            title: 'Total Invested',
            dataIndex: 'totalInvested',
            key: '2',
            width: 150,
            render: (totalInvested) => totalInvested.toFixed(2) + ' $',
        },
        {
            title: 'Total Profit',
            dataIndex: 'totalProfit',
            key: '3',
            width: 150,
            render: (profit, key) => (
                <Typography.Text
                    key={key}
                    type={profit >= 0 ? 'success' : 'danger'}
                >
                    {profit.toFixed(2) + ' $'}
                </Typography.Text>
            ),
        },
        {
            title: 'Profit (%)',
            dataIndex: 'growPercent',
            key: '4',
            width: 100,
            fixed: 'right',
            render: (profit, key) => (
                <Tag key={key} color={profit >= 0 ? 'green' : 'red'}>
                    {profit + ' %'}
                </Tag>
            ),
        },
    ];

    return (
        <>
            <CoinImageDescription coin={coin} />
            <Divider />
            <CoinTrendInformation coin={coin} />
            <Typography.Paragraph>
                <Typography.Text strong>Current price: </Typography.Text>
                {coin.price.toFixed(2)}$
            </Typography.Paragraph>
            <Divider />
            <Flex
                align="center"
                gap="1rem"
                style={{
                    flexDirection: 'column',
                }}
            >
                <Typography.Text strong>
                    Information about your purchases:
                </Typography.Text>
            </Flex>
            <Table
                columns={columns}
                dataSource={dataSource}
                scroll={{ x: 700 }}
                pagination={{
                    position: ['none', 'bottomCenter'],
                    pageSize,
                    showSizeChanger: true,
                    pageSizeOptions: ['5', '10', '15'],
                    onShowSizeChange: (_, size) => setPageSize(size),
                }}
                size={'small'}
            />
        </>
    );
}
AssetInfoModal.propTypes = {
    coin: PropTypes.shape({
        price: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    }),
};
