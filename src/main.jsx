import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './layout/RootLayout';
import Apps from './pages/apps/Apps';
import InstallApps from './pages/installApps/InstallApps';
import Homepage from './pages/homepage/Homepage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        // path: '/',
        index: true,
        element: <Homepage></Homepage>
      },
      {
        path: '/apps',
        element: <Apps></Apps>
      },
      {
        path: '/installApps',
        element: <InstallApps></InstallApps>
      }
    ],
    errorElement: <NotFoundPage></NotFoundPage>
  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
