import { Typography } from 'antd';
import { Flex } from 'antd';
import PropTypes from 'prop-types';

export default function CoinImageDescription({ coin }) {
    return (
        <Flex align="center">
            <img
                src={coin.icon}
                alt={coin.name}
                title={coin.id}
                style={{
                    width: 45,
                    aspectRatio: 1,
                }}
            />
            <Typography.Title
                level={2}
                style={{
                    margin: '0 1rem',
                    padding: '',
                }}
            >
                ( {coin.symbol} ) {coin.name}
            </Typography.Title>
        </Flex>
    );
}
CoinImageDescription.propTypes = {
    coin: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.string,
        symbol: PropTypes.string.isRequired,
    }).isRequired,
};
