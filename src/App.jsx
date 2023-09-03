import './App.css'
import { Routes, Route,  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  redirect
} from 'react-router-dom'

import About from './pages/About'
import Vans, {loader as VansLoader} from './pages/Vans/Vans'
import Home from './pages/Home'
import './server'
import VanDetail , {loader as VansDetailLoader } from './pages/Vans/VanDetail'
import NotFound from './pages/NotFound'
import Layout from './Layout/Layout'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import Dashboard from './pages/Host/Dashboard'
import HostLayout from './Layout/HostLayout'
import HostVans, {loader as VasHostLoader} from './pages/Host/HostVans'
import VanHostDetail, {loader as VansHostDetailLoader} from './pages/Host/VanHostDetail'
import VanHostDeailPhotos from './pages/Host/VanHostDeailPhotos'
import VanHostDetailPricing from './pages/Host/VanHostDetailPricing'
import VanHostDetailDetails from './pages/Host/VanHostDetailDetails'
import Login, {action as LoginAction} from './formValidation/Login'
import SignIn from './formValidation/SignIn'
import SignInSucces from './formValidation/SignInSucces'
import { requireAuth } from './utils'




const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='vans' element={<Vans/>} loader={VansLoader}/>
    <Route path='vans/:id' element={<VanDetail/>} loader={VansDetailLoader}/>
    <Route path='login' element={<Login/>} action={LoginAction} />
    <Route path='signin' element={<SignIn/>}/>
    <Route path='signInSuccess' element={<SignInSucces/>}/>
    <Route path='host' element={<HostLayout/>}  >
      <Route index element={<Dashboard/>}  />
      <Route path='income' element={<Income/>}/>
      <Route path='review' element={<Reviews/>}/>
      <Route path='vans' element={<HostVans/>} loader={VasHostLoader}/>
      <Route path='vans/:id/' element={<VanHostDetail/>} loader={VansHostDetailLoader} >
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


