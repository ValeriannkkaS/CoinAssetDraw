import CoinImageDescription from './CoinImageDescription.jsx';
import { Divider, Tabs, Typography } from 'antd';
import CoinTrendInformation from './CoinTrendInformation.jsx';
import PropTypes from 'prop-types';
import AssetInfoTableForModal from './AssetInfoTableForModal.jsx';
import RadioGroupForChangePeriod from './RadioGroupForChangePeriod.jsx';
import ChartForModal from './ChartForModal.jsx';
import { useChartDataContext } from '../context/ChartDataContext.jsx';
import { useEffect } from 'react';
import StyledTabs from './StyledTabs.jsx';

export default function AssetInfoModal({ coin }) {
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
            <StyledTabs
                defaultActiveKey="1"
                items={[
                    {
                        key: '1',
                        label: 'Information about your transaction',
                        children: [
                            <AssetInfoTableForModal key="1" coin={coin} />,
                        ],
                    },
                    {
                        key: '2',
                        label: 'Dynamic chart of price',
                        children: [
                            <RadioGroupForChangePeriod key="1" coin={coin} />,
                            <ChartForModal key="2" coin={coin} />,
                        ],
                    },
                ]}
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
