import './App.css'
import { Routes, Route,  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import About from './pages/About'
import Vans from './pages/Vans/Vans'
import {loader as VansLoader} from './pages/Vans/Vans'
import Home from './pages/Home'
import './server'
import VanDetail from './pages/Vans/VanDetail'
import NotFound from './pages/NotFound'
import Layout from './Layout/Layout'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import Dashboard from './pages/Host/Dashboard'
import HostLayout from './Layout/HostLayout'
import VanHostDetail from './pages/Host/VanHostDetail'
import HostVans from './pages/Host/HostVans'
import VanHostDeailPhotos from './pages/Host/VanHostDeailPhotos'
import VanHostDetailPricing from './pages/Host/VanHostDetailPricing'
import VanHostDetailDetails from './pages/Host/VanHostDetailDetails'
import Login from './formValidation/Login'


const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='vans' element={<Vans/>} loader={VansLoader}/>
    <Route path='vans/:id' element={<VanDetail/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='host' element={<HostLayout/>}>
      <Route index element={<Dashboard/>} />
      <Route path='income' element={<Income/>}/>
      <Route path='review' element={<Reviews/>}/>
      <Route path='vans' element={<HostVans/>}/>
      <Route path='vans/:id/' element={<VanHostDetail/>}>
          <Route index element={<VanHostDetailDetails/>}/> 
          <Route path='pricing' element={<VanHostDetailPricing/>}/>
          <Route path='photos' element={<VanHostDeailPhotos/>}/>
     </Route>
   </Route>
    <Route path='*' element={<NotFound/>}/>
  </Route>
  </>
))
export default function App() {
  return (
    <RouterProvider router={router} />
  )
}


