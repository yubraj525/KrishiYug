import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  RouterProvider } from 'react-router'
import Route from './Route.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <RouterProvider router={Route}></RouterProvider>
    <App />
  </StrictMode>
)
