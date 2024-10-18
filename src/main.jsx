import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Route/Root';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import ScrollToTop from './components/ScrollToTop';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<>
      <ScrollToTop />
      <Root />
    </>),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
