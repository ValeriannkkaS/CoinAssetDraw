import AppHeader from './AppHeader.jsx';
import { Layout, Spin } from 'antd';
import AppSider from './AppSider.jsx';
import AppContent from './AppContent.jsx';
import { useCryptoContext } from '../context/CryptoContext.jsx';
import AppFooter from './AppFooter.jsx';

export default function AppLayout() {
    const { loading } = useCryptoContext();
    if (loading) {
        //Спин во время загрузки
        return <Spin spinning={loading} fullscreen />;
    }
    return (
        <Layout>
            <AppHeader />
            <Layout>
                <AppSider />
                <AppContent />
            </Layout>
            <AppFooter />
        </Layout>
    );
}
