import styled from 'styled-components';
import { Button } from 'antd';

export const CancelButton = styled(Button)`
    position: relative;
    overflow: hidden;
    color: white !important;
    border: none !important;
    background: transparent !important;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, #facc15 0%, #eab308 100%);
        z-index: 0;
        transition: opacity 0.3s ease;
        opacity: 1;
    }

    &:hover::before {
        opacity: 0.8;
    }

    & > span {
        position: relative;
        z-index: 1;
    }
`;
