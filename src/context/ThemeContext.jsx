import { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme } from '../lightVsDarkTheme';
import { PropTypes } from 'prop-types';

const ThemeContext = createContext({
    theme: lightTheme,
    toggleTheme: () => {},
});

export const useThemeContext = () => {
    return useContext(ThemeContext);
};

export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
