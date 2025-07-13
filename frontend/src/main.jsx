import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/*//ability to change the components showing on the screen on the basis of slash route /favorite */}
    <App />
    </BrowserRouter>
  </StrictMode>,
)
