import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {UserContext} from './Hooks/Context'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <UserContext>
         <App />
    </UserContext>
    </BrowserRouter>
  </StrictMode>
)
