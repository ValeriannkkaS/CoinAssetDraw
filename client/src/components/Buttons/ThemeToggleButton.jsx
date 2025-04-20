import styled from 'styled-components';
import { Moon, Sun } from 'lucide-react';
import { PropTypes } from 'prop-types';

const ToggleButton = styled.button`
    all: unset;
    cursor: pointer;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: rotate(15deg) scale(1.2);
    }

    svg {
        transition:
            transform 0.3s ease,
            opacity 0.3s ease;
    }
`;

export default function ThemeToggleButton({ isDark, toggleTheme }) {
    return (
        <ToggleButton
            onClick={toggleTheme}
            title="toggle theme"
            style={{
                background: isDark
                    ? 'linear-gradient(135deg, #facc15, #f97316)'
                    : 'linear-gradient(135deg, #6a11cb 0%, #00f2fe 100%)',
            }}
        >
            {isDark ? (
                <Sun color="white" size={20} />
            ) : (
                <Moon color="white" size={20} />
            )}
        </ToggleButton>
    );
}
ThemeToggleButton.propTypes = {
    isDark: PropTypes.bool,
    toggleTheme: PropTypes.func,
};
