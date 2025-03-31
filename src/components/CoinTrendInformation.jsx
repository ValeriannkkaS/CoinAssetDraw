import {Tag, Typography} from "antd";

export default function CoinTrendInformation({coin}) {
    return(
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
    )
}