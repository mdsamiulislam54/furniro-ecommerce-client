import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './Styles/style.css'

import MainLayout from './Layouts/MainLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component:MainLayout,
    children:[
      {
        index: true,
        element: <App />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
   
  </StrictMode>,
)
