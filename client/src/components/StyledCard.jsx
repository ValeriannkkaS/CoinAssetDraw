import { styled } from 'styled-components';
import { Card } from 'antd';
import { useThemeContext } from '../context/ThemeContext.jsx';

const StyledCardWrapper = styled(Card)`
    &.ant-card {
        background: ${({ theme }) => theme.cards.background};
        border: 1px solid ${({ theme }) => theme.cards.border};
        box-shadow: ${({ theme }) => theme.cards.boxShadow};
        color: ${({ theme }) => theme.cards.text};
        border-radius: 12px;
    }

    .ant-card-head {
        background: transparent;
        border-bottom: 1px solid ${({ theme }) => theme.cards.border};
    }

    .ant-card-head-title {
        color: ${({ theme }) => theme.cards.title};
        font-weight: 600;
    }

    .ant-card-body {
        color: ${({ theme }) => theme.cards.text};
        padding: 1.5rem;
    }
`;

export default function StyledCard(props) {
    const { theme } = useThemeContext();

    return <StyledCardWrapper theme={theme} {...props} />;
}
