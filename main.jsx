
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import T, { Test } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <T/>
    <Test />
  </StrictMode>,
)
