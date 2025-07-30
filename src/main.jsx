import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact.jsx'
import Error from '../components/Error.jsx'
import RestaurantContainer from '../components/RestaurantContainer.jsx'
import Cart from '../components/Cart.jsx'


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<RestaurantContainer/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement:<Error/>
  },
  
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />,
)
