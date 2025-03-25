import {Flex, Typography, Tag, Divider, QRCode, Card} from 'antd'
import { RedditOutlined, TwitterOutlined} from '@ant-design/icons'
import CoinImageDescription from "./CoinImageDescription";


export default function CoinInfoModal({ coin }) {
    return(
        <>
            <Flex align="center">
                <CoinImageDescription coin={coin}/>{/*элемент иконка монеты + название*/}
            </Flex>
            <Divider />
            <Typography.Paragraph>
                <Typography.Text strong>1 hour:</Typography.Text>
                <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>
                    {coin.priceChange1h}%
                </Tag>
                <Typography.Text strong>1 day:</Typography.Text>
                <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>
                    {coin.priceChange1d}%
                </Tag>
                <Typography.Text strong>1 week:</Typography.Text>
                <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>
                    {coin.priceChange1w}%
                </Tag>
            </Typography.Paragraph>
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
            <Divider/>

            <Flex
                align='center'
                gap='1rem'
                style={{
                flexDirection: 'column',
            }}>
                <Typography.Paragraph
                style={{
                    margin: 0
                }}
                >
                    <Typography.Text strong>Social Network:</Typography.Text>
                </Typography.Paragraph>
                <div style={{
                    border: '1px solid #8c8c8c',
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                }}>
                    <Tag icon={<TwitterOutlined />} color="#55acee">
                        <a
                            href={coin.twitterUrl}
                            target="_blank"
                        >
                            Twitter
                        </a>
                    </Tag>
                    <Tag icon={<RedditOutlined />} color="#FF4500" style={{
                        margin: '0'
                    }}>
                        <a
                            href={coin.redditUrl}
                            target="_blank"
                        >
                            Reddit
                        </a>
                    </Tag>
                </div>
                <Typography.Text strong>Website QR-Code: </Typography.Text>
                <QRCode
                    errorLevel="H"
                    value={coin.websiteUrl}
                    icon={coin.icon}
                />
                <Typography.Paragraph>
                    <Typography.Text strong>Website URL: </Typography.Text>
                    <a href={coin.websiteUrl}>{coin.websiteUrl}</a>
                </Typography.Paragraph>
            </Flex>
        </>
    )
}