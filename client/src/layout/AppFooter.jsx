import { Layout } from 'antd';
import { useThemeContext } from '../context/ThemeContext.jsx';

const footerStyle = {
    height: 80,
};

export default function AppFooter() {
    const { theme } = useThemeContext();

    return (
        <Layout.Footer
            style={{
                backgroundColor: theme.footer.background,
                border: '2px solid' + theme.footer.border,
                ...footerStyle,
            }}
        ></Layout.Footer>
    );
}
