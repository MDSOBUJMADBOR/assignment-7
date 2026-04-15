import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { router } from './router/Routes';
import { RouterProvider } from 'react-router';
import InstalledAppsProvider from './context/InstalledAppsProvider';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstalledAppsProvider>

    <RouterProvider router={router} />
    </InstalledAppsProvider>
  </StrictMode>,
)
