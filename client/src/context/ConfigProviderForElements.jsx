import { ConfigProvider } from 'antd';
import { useThemeContext } from './ThemeContext.jsx';
import { PropTypes } from 'prop-types';

export default function ConfigProviderForElements({ children }) {
    const { theme } = useThemeContext();

    return (
        <ConfigProvider
            theme={{
                components: {
                    Statistic: {
                        colorTextDescription: theme.cards.text,
                    },
                    List: {
                        colorText: theme.cards.text,
                    },
                    Table: {
                        colorPrimary: theme.buttons.primary.background,
                        colorBgContainer: theme.table.rowBackground,
                        headerBg: theme.table.headerBackground,
                        borderColor: theme.table.border,
                        headerColor: theme.table.headerText,
                        colorText: theme.table.rowText,
                        algorithm: true, // Enable algorithm
                    },
                    Typography: {
                        colorText: theme.table.rowText,
                        colorTextHeading: theme.modal.text,
                    },
                    Result: {
                        colorTextHeading: theme.table.headerText,
                        colorTextDescription: theme.table.rowText,
                    },
                    Popover: {
                        colorText: theme.cards.text,
                        colorTextHeading: theme.cards.text,
                        colorBgElevated: theme.menu.colorBgContainer,
                        colorBorderSecondary: theme.cards.border,
                    },
                    Menu: {
                        colorItemText: theme.menu.colorItemText,
                        colorItemTextHover: theme.menu.colorItemTextHover,
                        colorItemTextSelected: theme.menu.colorItemTextSelected,
                        colorBgContainer: theme.menu.colorBgContainer,
                        colorBgMenuItemSelected:
                            theme.menu.colorBgMenuItemSelected,
                        colorBgMenuItemHover: theme.menu.colorBgMenuItemHover,
                        itemHeight: 48,
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
}
ConfigProviderForElements.propTypes = {
    children: PropTypes.node,
};
