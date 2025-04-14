import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
    ],
  },
])

export default router
