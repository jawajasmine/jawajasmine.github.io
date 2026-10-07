import React from 'react'
import ReactDOM from 'react-dom/client'
// Global styles first so component styles can override them
import './index.scss'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
