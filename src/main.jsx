import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'animate.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css'

// importing components
import Root from './root.jsx'
import Home from './home/home.jsx'
import Update from './update/update.jsx'
import Login from './login/login.jsx'
import Register from './register/register.jsx'
import AuthProvider from './authProvider/authProvider.jsx'
import PrivateRoute from './privateRoute/privateRoute.jsx';
import NotFound from './404Route/404.jsx';
import EstateDetails from './estateDetails/estateDetails.jsx';
import Profile from './profile/profile.jsx'
import Favorites from './profile/favorites.jsx'
import News from './news/news.jsx'


const router = createBrowserRouter([
  {
    element: <Root/>,
    path: '/',
    errorElement: <NotFound/>,
    children:[
      {
        element:<Home/>,
        path: '/',
        loader: async ()=>{
          return fetch('/data.json')
        }
      },
      {
        path: '/update',
        element: <PrivateRoute><Update/></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Register/>
      },
      {
        path: `/details/:id`,
        element: <PrivateRoute><EstateDetails/></PrivateRoute>,
        loader: ()=>{
            return fetch('/data.json')
        }
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile/></PrivateRoute>,
        children:[
          {
            path:'/profile/favorites',
            element: <PrivateRoute><Favorites/></PrivateRoute>
          },
          {
            path:'/profile/news',
            element: <PrivateRoute><News/></PrivateRoute>
          },
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router}/>
   </AuthProvider>
  </React.StrictMode>,
)
