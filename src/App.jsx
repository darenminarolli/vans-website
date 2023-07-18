import './App.css'
import { Routes, Route } from 'react-router-dom'

import About from './components/About'
import Vans from './components/Vans/Vans'
import Home from './components/Home'
import Footer from './components/Footer'
import './server'
import VanDetail from './components/Vans/VanDetail'
import NotFound from './components/NotFound'
import Layout from './navigation/Layout'
import Income from './components/Host/Income'
import Reviews from './components/Host/Reviews'
import Dashboard from './components/Host/Dashboard'
import HostLayout from './components/Host/HostLayout'

import VanHostDetail from './components/Host/VanHostDetail'
import HostVans from './components/Host/HostVans'
import VanHostDeailPhotos from './components/Host/VanHostDeailPhotos'
import VanHostDetailPricing from './components/Host/VanHostDetailPricing'
import VanHostDetailDetails from './components/Host/VanHostDetailDetails'
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
