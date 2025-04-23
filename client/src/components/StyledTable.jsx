import { styled } from 'styled-components';
import { Table } from 'antd';
import { useThemeContext } from '../context/ThemeContext.jsx';

const StyledTableWrapper = styled(Table)`
    .ant-table-container {
        box-shadow: 0 4px 24px rgba(0, 98, 255, 0.08) !important;
        border: 1px solid ${({ theme }) => theme.form.disabledFieldsBorder};
    }

    th.ant-table-cell {
        background: ${({ theme }) => theme.form.commonFieldsBg} !important;
        color: ${({ theme }) => theme.form.inputColor} !important;
    }

    td.ant-table-cell {
        background: ${({ theme }) => theme.form.commonFieldsBgHover} !important;
        color: ${({ theme }) => theme.form.label} !important;
    }

    .ant-pagination-item.ant-pagination-item-active,
    .ant-select-selector {
        background: ${({ theme }) => theme.form.commonFieldsBgHover} !important;
        border-color: ${({ theme }) => theme.form.label};
        color: ${({ theme }) => theme.form.label} !important;
    }
    .ant-select-dropdown {
        color: ${({ theme }) => theme.form.label} !important;
    }
    .anticon {
        color: ${({ theme }) => theme.form.icon};
    }
`;

export default function StyledTable(props) {
    const { theme } = useThemeContext();

    return <StyledTableWrapper theme={theme} {...props} />;
}
