import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../LayOuts/Main';
import Home from '../Pages/Home/Home/Home';
import Category from '../Pages/Home/Category/Category';
import NewsLayout from '../LayOuts/NewsLayout';
import News from '../Pages/News/News';
// import { FaEarlybirds, FaObjectGroup, FaThemeco } from 'react-icons/fa';
import LoginLayout from '../LayOuts/LoginLayout';
import Login from '../Pages/Login/Login/Login';
import Register from '../Pages/Login/Register/Register';
import PrivateRoute from './PrivateRoute';
import Terms from '../Pages/Shared/Terms/Terms';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/category/0"></Navigate>
  },
  {
    path: '/',
    element: <LoginLayout/>,
    children:[
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/terms',
        element: <Terms/>
      }
    ]
  },
  {
    path: 'category',
    element: <Main />,
    children: [
      {
        path: ':id',
        element: <Category />,
        loader: ({ params }) => fetch(`https://the-news-dragon-server-seven-murex.vercel.app/categories/${params.id}`)
      },
    ]
  },
  {
    path: '/news',
    element: <NewsLayout />,
    children: [
      {
        path: ':id',
        element:  <PrivateRoute><News/></PrivateRoute>,
        loader: ({ params }) => fetch(`https://the-news-dragon-server-seven-murex.vercel.app/news/${params.id}`)
      }
    ]
  }
])

export default router;

