
import { CryptoContextProvider } from './context/crypto-context';
import AppLayout from './componetns/layout/AppLayout'

export default function App() {
  return (
    <CryptoContextProvider>

      <AppLayout />
    </CryptoContextProvider>
  )
}

//2.50