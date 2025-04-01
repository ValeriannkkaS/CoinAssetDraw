import AppHeader from './AppHeader';
import { Layout, Spin } from 'antd';
import AppSider from './AppSider';
import AppContent from './AppContent';
import { useCryptoContext } from '../../context/CryptoContext';
import AppFooter from './AppFooter';

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
