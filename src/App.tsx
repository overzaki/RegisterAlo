import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import { LanguageProvider } from './context/LanguageContext'

/**
 * Root application component that wires up routing and global providers.
 */
export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </LanguageProvider>
  )
}
