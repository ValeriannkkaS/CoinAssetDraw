import { CryptoContextProvider } from './context/CryptoContext';
import AppLayout from './components/layout/AppLayout';
import { ThemeContextProvider } from './context/ThemeContext';
import ConfigProviderForElements from './context/ConfigProviderForElements';

export default function App() {
    return (
        <ThemeContextProvider>
            <ConfigProviderForElements>
                <CryptoContextProvider>
                    <AppLayout />
                </CryptoContextProvider>
            </ConfigProviderForElements>
        </ThemeContextProvider>
    );
}
