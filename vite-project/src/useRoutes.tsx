import Login from './pages/Login'
import ProductLists from './pages/ProductLists'
import { useRoutes } from 'react-router-dom'
import Register from './pages/Register'

export default function useRoutesElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <ProductLists />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/login',
      element: <Login />
    }
  ])
  return routeElements
}
