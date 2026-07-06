import { BrowserRouter } from 'react-router-dom'
import { CommerceProvider } from './context/CommerceContext.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeProvider>
            <CommerceProvider>
                <App />
            </CommerceProvider>
        </ThemeProvider>
    </BrowserRouter>
)

