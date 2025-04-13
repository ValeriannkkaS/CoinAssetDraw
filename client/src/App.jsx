import { CryptoContextProvider } from './context/CryptoContext.jsx';
import AppLayout from './layout/AppLayout.jsx';
import { ThemeContextProvider } from './context/ThemeContext.jsx';
import ConfigProviderForElements from './context/ConfigProviderForElements.jsx';
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
