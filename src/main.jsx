import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Components/Root.jsx'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Home from './Components/Home.jsx';
import Order from './Components/Order.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/order',
        element: <PrivateRoute><Order></Order></PrivateRoute>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
