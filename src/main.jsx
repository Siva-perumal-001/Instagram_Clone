import { createRoot } from 'react-dom/client'
import './Styles/index.css'
import App from './Components/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ViewStory from './Components/ViewStory';
import Profile from './Components/Profile'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element : <App/>
    },
    {
      path:'/story/:id/:tot',
      element : <ViewStory/>
    },
    {
      path:'/profile',
      element : <Profile/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
