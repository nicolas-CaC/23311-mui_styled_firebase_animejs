import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App/App'
import { CssBaseline } from '@mui/material'
import { LoginProvider } from './Login/contexts/LoginContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>,
)
