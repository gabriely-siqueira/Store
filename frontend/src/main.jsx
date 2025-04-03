import { createRoot } from 'react-dom/client' 
import './index.css'
import App from './App.jsx'
import * as React from 'react'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider>
    <App />
  </ChakraProvider>
</React.StrictMode>,
)
