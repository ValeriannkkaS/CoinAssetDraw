import { CryptoContextProvider } from './context/CryptoContext';
import AppLayout from './components/layout/AppLayout';
import { ThemeContextProvider } from './context/ThemeContext';
import ConfigProviderForElements from './context/ConfigProviderForElements';
import ChartDataContext from './context/ChartDataContext.jsx';

export default function App() {
    return (
        <ThemeContextProvider>
            <ConfigProviderForElements>
                <CryptoContextProvider>
                    <ChartDataContext>
                        <AppLayout />
                    </ChartDataContext>
                </CryptoContextProvider>
            </ConfigProviderForElements>
        </ThemeContextProvider>
    );
}
