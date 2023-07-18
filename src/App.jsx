import './App.css'
import { Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Vans from './pages/Vans/Vans'
import Home from './pages/Home'
import Footer from './components/Footer'
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
function App() {
  return (
    <>

   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='vans' element={<Vans/>}/>
      <Route path='vans/:id' element={<VanDetail/>}/>

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
    </Route>
      <Route path='*' element={<NotFound/>}/>
   </Routes><br/>
     <Footer/>
    </>
  )
}

export default App
