import { ConfigProvider } from 'antd';
import { useThemeContext } from './ThemeContext.jsx';
import { PropTypes } from 'prop-types';

export default function ConfigProviderForElements({ children }) {
    const { theme } = useThemeContext();

    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        colorPrimary: theme.buttons.primary.background,
                        algorithm: true, // Enable algorithm
                    },
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
                    Modal: {
                        contentBg: theme.modal.background,
                        colorText: theme.modal.text,
                        titleColor: theme.modal.text,
                        headerBg: theme.modal.background,
                        colorIcon: theme.modal.text,
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
