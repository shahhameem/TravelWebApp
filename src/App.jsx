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
import HotelPage from './pages/HotelPage'

const router = createBrowserRouter(
  createRoutesFromElements( 
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/hotel' element={<HotelPage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
  )
)

export default () => {
  return <RouterProvider router={router} />
}