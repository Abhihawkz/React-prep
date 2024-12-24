import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pulsingbutton from './Pulsingbutton.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Pulsingbutton />
  </StrictMode>,
)
