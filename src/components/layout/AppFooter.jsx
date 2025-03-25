import {Layout} from 'antd'
import {useThemeContext} from "../../context/ThemeContext";

const footerStyle = {
    textAlign: 'center',
};

export default function AppFooter(){
    const {theme} = useThemeContext();


    return(
        <Layout.Footer style={{
            color: '#fff',
            backgroundColor: theme.header.background,
            border: '1px solid' + `${theme.header.text}`,
            ...footerStyle
        }}>Footer</Layout.Footer>
    )
}