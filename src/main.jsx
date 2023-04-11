import React from 'react'
import ReactDOM from 'react-dom/client'
import Action from './Action'
import App from './App'
import './index.css'
import Overlay from './Overlay'
import { SettingProvider } from './SettingProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingProvider>
      <App />
      <Overlay />
      <Action />
    </SettingProvider>
  </React.StrictMode>,
)
