import {ConfigProvider} from 'antd'
import {useThemeContext} from "./ThemeContext";

export default function ConfigProviderForElements( { children } ) {
    const {theme} = useThemeContext();

    return(
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
                    Input: {
                        colorPrimary: '#eb2f96',
                        algorithm: true, // Enable algorithm
                    }
                },
            }}
        >
            {children}
        </ConfigProvider>
    )
}