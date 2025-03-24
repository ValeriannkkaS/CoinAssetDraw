import {CryptoContextProvider} from "./context/CryptoContext";
import AppLayout from "./components/layout/AppLayout";
import {ThemeContextProvider} from "./context/ThemeContext";


export default function App() {
    return (
        <ThemeContextProvider>
            <CryptoContextProvider>
               <AppLayout/>
            </CryptoContextProvider>
        </ThemeContextProvider>
    )
}

