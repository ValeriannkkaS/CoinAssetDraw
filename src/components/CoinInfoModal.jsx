import { Flex, Typography, Tag, Divider, QRCode } from 'antd';
import { RedditOutlined, TwitterOutlined } from '@ant-design/icons';
import CoinImageDescription from './CoinImageDescription';
import { useThemeContext } from '../context/ThemeContext';
import CoinTrendInformation from './CoinTrendInformation';
import PropTypes from 'prop-types';

export default function CoinInfoModal({ coin }) {
    const { theme } = useThemeContext();

    return (
        <>
            <CoinImageDescription coin={coin} />
            {/*элемент иконка монеты + название*/}
            <Divider />
            <CoinTrendInformation coin={coin} />
            <Typography.Paragraph>
                <Typography.Text strong>Price: </Typography.Text>
                {coin.price.toFixed(2)}$
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Price BTC: </Typography.Text>
                {coin.priceBtc}
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Market Cap: </Typography.Text>
                {coin.marketCap}$
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Contract address: </Typography.Text>
                {coin.contractAddress ? coin.contractAddress : 'none'}
            </Typography.Paragraph>
            <Divider />

            <Flex
                align="center"
                gap="1rem"
                style={{
                    flexDirection: 'column',
                }}
            >
                <Typography.Paragraph
                    style={{
                        margin: 0,
                    }}
                >
                    <Typography.Text strong>Social Network:</Typography.Text>
                </Typography.Paragraph>
                <div
                    style={{
                        border: '1px solid #8c8c8c',
                        padding: '0.5rem',
                        borderRadius: '0.5rem',
                    }}
                >
                    <Tag icon={<TwitterOutlined />} color="#55acee">
                        <a
                            href={coin.twitterUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Twitter
                        </a>
                    </Tag>
                    <Tag
                        icon={<RedditOutlined />}
                        color="#FF4500"
                        style={{
                            margin: '0',
                        }}
                    >
                        <a
                            href={coin.redditUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Reddit
                        </a>
                    </Tag>
                </div>
                <Typography.Text strong>Website QR-Code: </Typography.Text>
                <QRCode
                    errorLevel="H"
                    color={theme.qrCode.foreground}
                    value={coin.websiteUrl}
                    icon={coin.icon}
                />
                <Typography.Paragraph>
                    <Typography.Text strong>Website URL: </Typography.Text>
                    <a href={coin.websiteUrl}>{coin.websiteUrl}</a>
                </Typography.Paragraph>
            </Flex>
        </>
    );
}
CoinInfoModal.propTypes = {
    coin: PropTypes.shape({
        price: PropTypes.number.isRequired,
        icon: PropTypes.string,
        websiteUrl: PropTypes.string,
        redditUrl: PropTypes.string,
        twitterUrl: PropTypes.string,
        contractAddress: PropTypes.string,
        priceBtc: PropTypes.number,
        marketCap: PropTypes.number,
    }),
};
