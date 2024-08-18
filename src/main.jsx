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
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import ScrollToTop from './components/ScrollToTop';



const router = createBrowserRouter([
  {
    path: "/",
    element:(<>
    <ScrollToTop />
    <Root/>
    </>),
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/service',
        element:<Services/>
      },
      {
        path:'/project',
        element:<Projects/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
