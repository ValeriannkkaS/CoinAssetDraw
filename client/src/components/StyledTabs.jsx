import { styled } from 'styled-components';
import { Tabs } from 'antd';
import { useThemeContext } from '../context/ThemeContext.jsx';

const StyledTabsWrapper = styled(Tabs)`
    .ant-tabs-tab {
        margin: 0 !important;
        padding: 1rem;
        color: ${({ theme }) => theme.form.label};
        font-size: 16px;
    }
`;

export default function StyledTabs(props) {
    const { theme } = useThemeContext();
    return <StyledTabsWrapper theme={theme} {...props} />;
}
