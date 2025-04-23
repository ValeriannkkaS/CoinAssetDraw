import { styled } from 'styled-components';
import { Radio } from 'antd';
import { useThemeContext } from '../context/ThemeContext.jsx';

const StyledRadioGroupWrapper = styled(Radio.Group)`
    .ant-radio-button-wrapper {
        background: ${({ theme }) => theme.form.commonFieldsBg};
        color: ${({ theme }) => theme.form.label};
        font-size: 16px;
        height: 2rem;
        &:hover {
            background: ${({ theme }) => theme.form.commonFieldsBgHover};
        }
    }
    .ant-radio-button-wrapper.ant-radio-button-wrapper-checked {
        background: linear-gradient(135deg, #6a11cb 0%, #00f2fe 100%);
        transition: 0.5s all;
        &:hover {
            background: linear-gradient(135deg, #6a11cb 0%, #00f2fe 100%);
            opacity: 0.8;
            transition: 0.5s all;
        }
    }
`;

export default function StyledRadioButtonGroup(props) {
    const { theme } = useThemeContext();

    return (
        <StyledRadioGroupWrapper
            theme={theme}
            {...props}
        ></StyledRadioGroupWrapper>
    );
}
