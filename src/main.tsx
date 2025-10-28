import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { store } from './App/store.ts'
import { Provider } from 'react-redux'
import { ThemeProvider } from './DashboardDesign/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
      <ThemeProvider>
    <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)