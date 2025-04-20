import styled from 'styled-components';
import { Avatar } from 'antd';

export const GradientAvatar = styled(Avatar)`
    position: relative;
    overflow: hidden;
    background: transparent !important;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, #6a11cb 0%, #00f2fe 100%);
        z-index: 0;
        transition: opacity 0.3s ease;
        opacity: 1;
    }

    &:hover::before {
        opacity: 0.8;
    }

    img {
        position: relative;
        z-index: 1;
    }

    // Если используешь иконки, а не src:
    .anticon {
        position: relative;
        z-index: 1;
        color: white;
    }
`;
