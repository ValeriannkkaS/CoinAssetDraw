import CoinImageDescription from './CoinImageDescription';
import { Divider, Flex, Typography } from 'antd';
import CoinTrendInformation from './CoinTrendInformation';
import PropTypes from 'prop-types';

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
        </>
    );
}
AssetInfoModal.propTypes = {
    coin: PropTypes.shape({
        price: PropTypes.number.isRequired,
    }),
};
