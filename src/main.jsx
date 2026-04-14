import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './layout/RootLayout';


import Homepage from './pages/homepage/Homepage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Timeline from './pages/Timeline/Timeline';
import Stats from './pages/Stats/Stats';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        // path: '/',
        index: true,
        element: <Homepage></Homepage>,
        loader: ()=> fetch("/data.json")
      },
      {
        path: '/Timeline',
        element: <Timeline></Timeline>
      },
      {
        path: '/Stats',
        element: <Stats></Stats>
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
