import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { NotFoundPage } from './pages/NotFoundPage'
import HotelsPage from './pages/HotelsPage'
import HotelPage from './pages/HotelPage'
import FoodsPage from './pages/FoodsPage'
import ShikarasPage from './pages/ShikarasPage'

const router = createBrowserRouter(
  createRoutesFromElements( 
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/hotels' element={<HotelsPage />} />
    <Route path='/hotel/:id' element={<HotelPage />} />
    <Route path='/shikaras' element={<ShikarasPage />} />
    <Route path='/foods' element={<FoodsPage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
  )
)

export default () => {
  return <RouterProvider router={router} />
}