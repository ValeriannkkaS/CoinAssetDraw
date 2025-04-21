import { ConfigProvider } from 'antd';
import { useThemeContext } from './ThemeContext.jsx';
import { PropTypes } from 'prop-types';

export default function ConfigProviderForElements({ children }) {
    const { theme } = useThemeContext();

    return (
        <ConfigProvider
            theme={{
                components: {
                    Card: {
                        colorTextDescription: theme.cards.text,
                        colorBgContainer: theme.cards.background,
                        colorBorderSecondary: theme.cards.border,
                    },
                    Statistic: {
                        colorTextDescription: theme.cards.text,
                    },
                    Switch: {
                        colorPrimary: theme.buttons.primary.background,
                        algorithm: true,
                    },
                    Select: {
                        colorBgContainer: theme.select.background,
                        colorBgElevated: theme.select.background,
                        colorBorder: theme.select.border,
                        colorText: theme.select.text,
                    },
                    List: {
                        colorText: theme.cards.text,
                    },
                    Drawer: {
                        colorBgElevated: theme.slidingSidebar.background,
                        colorText: theme.slidingSidebar.text,
                        colorIcon: theme.slidingSidebar.text,
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
                    Input: {
                        colorBgContainer: theme.form.background,
                        colorBgContainerDisabled:
                            theme.form.inputDisabledBackground,
                        colorTextPlaceholder: theme.form.inputPlaceholder,
                        colorText: theme.form.inputText,
                        colorTextDisabled: theme.form.inputDisabledText,
                        labelColor: theme.cards.text,
                    },
                    InputNumber: {
                        colorBgContainer: theme.form.background,
                        colorBgContainerDisabled:
                            theme.form.inputDisabledBackground,
                        colorTextPlaceholder: theme.form.inputPlaceholder,
                        colorText: theme.form.inputText,
                        colorTextDisabled: theme.form.inputDisabledText,
                    },
                    DatePicker: {
                        colorBgContainer: theme.form.background,
                        colorTextPlaceholder: theme.form.inputPlaceholder,
                        colorText: theme.form.inputText,
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
