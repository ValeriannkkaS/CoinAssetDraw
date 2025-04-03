import { useChartDataContext } from '../context/ChartDataContext.jsx';
import { Result, Spin, Button } from 'antd';
import { PropTypes } from 'prop-types';
import { styled } from 'styled-components';

const ContainerForChart = styled.div`
    width: 100%;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function ChartForModal({ coin }) {
    const { loading, error, changeCoin, changeError } = useChartDataContext();

    changeCoin(coin.id);

    if (loading) {
        return (
            <ContainerForChart>
                <Spin size="large"></Spin>
            </ContainerForChart>
        );
    }
    if (error) {
        return (
            <ContainerForChart>
                <Result
                    status="warning"
                    title="No luck uploading the information."
                    extra={
                        <Button
                            type="primary"
                            key="console"
                            onClick={() => changeError(false)}
                        >
                            Try again
                        </Button>
                    }
                />
            </ContainerForChart>
        );
    }
    return <ContainerForChart></ContainerForChart>;
}
ChartForModal.propTypes = {
    coin: PropTypes.shape({
        id: PropTypes.string,
    }),
};
