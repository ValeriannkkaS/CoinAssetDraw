import { styled } from 'styled-components';
import { Select } from 'antd';
import { useThemeContext } from '../context/ThemeContext.jsx';

const StyledSelectWrapper = styled(Select)`
    .ant-select-selector {
        background: ${({ theme }) => theme.select.background} !important;
        color: ${({ theme }) => theme.select.text};
    }
    .anticon {
        color: ${({ theme }) => theme.select.icon};
    } // Стили для дропдауна селекта находятся в GlobalDrawerStyle
`;

export default function StyledSelect(props) {
    const { theme } = useThemeContext();

    return <StyledSelectWrapper {...props} theme={theme} />;
}
