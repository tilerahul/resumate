import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '../Reducers/Authentication/AuthContext.jsx'
import AppProvider from './Context/appContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <AppProvider>
      <App />
    </AppProvider>
      <Toaster />
  </AuthProvider>
)
