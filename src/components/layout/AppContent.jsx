import {Layout} from "antd";
import {useThemeContext} from "../../context/ThemeContext";

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    padding: '1rem'
};

export default function AppContent() {
    const {theme} = useThemeContext();

    return(
        <Layout.Content style={{
            backgroundColor: theme.content.background,
            color: theme.content.text,
            ...contentStyle
        }}>
            Content
        </Layout.Content>
    )
}