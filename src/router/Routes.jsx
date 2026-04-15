import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import Timeline from "../pages/Timeline/Timeline";
import Stats from "../pages/Stats/Stats";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AppDetails from "../pages/appDetails/AppDetails";

export const router = createBrowserRouter([
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
      },
      {
          path: '/:id',
          element: <AppDetails></AppDetails>
      }
    ],
    errorElement: <NotFoundPage></NotFoundPage>
  },
  
]);