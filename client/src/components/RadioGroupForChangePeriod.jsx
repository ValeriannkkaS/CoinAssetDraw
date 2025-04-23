import { PropTypes } from 'prop-types';
import { Radio } from 'antd';
import { useChartDataContext } from '../context/ChartDataContext.jsx';
import StyledRadioButton from './StyledRadioButtonGroup.jsx';

export default function RadioGroupForChangePeriod() {
    const { changePeriod } = useChartDataContext();

    const optionsForRadio = [
        { label: 'All', value: 'all' },
        { label: '24 hours', value: '24h' },
        { label: '1 Week', value: '1w' },
        { label: '1 month', value: '1m' },
        { label: '3 months', value: '3m' },
        { label: '6 months', value: '6m' },
        { label: '1 year', value: '1y' },
    ];

    return (
        <>
            <StyledRadioButton
                block
                options={optionsForRadio}
                defaultValue="all"
                optionType="button"
                buttonStyle="solid"
                onChange={(event) => changePeriod(event.target.value)}
            />
        </>
    );
}
