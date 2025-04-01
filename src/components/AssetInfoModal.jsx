import CoinImageDescription from './CoinImageDescription';
import { Divider, Typography } from 'antd';
import CoinTrendInformation from './CoinTrendInformation';
import PropTypes from 'prop-types';
import AssetInfoTableForModal from './AssetInfoTableForModal.jsx';

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
            <AssetInfoTableForModal coin={coin} />
        </>
    );
}
AssetInfoModal.propTypes = {
    coin: PropTypes.shape({
        price: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    }),
};
