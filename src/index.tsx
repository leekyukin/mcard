import { Global } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'
import App from './App'
import AuthGuard from './components/auth/AuthGuard'
import { AlertContextProvider } from './contexts/AlertContext'
import './index.css'
import reportWebVitals from './reportWebVitals'
import globalStyles from './styles/globalStyles'

const client = new QueryClient({
  defaultOptions: {},
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <AlertContextProvider>
          <AuthGuard>
            <App />
          </AuthGuard>
        </AlertContextProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
)

reportWebVitals()
