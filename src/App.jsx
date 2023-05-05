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
        <Route path='hostvans' element={<HostVans/>}/>
        <Route path='hostvans/:id' element={<VanHostDetail/>}/>
        <Route path='review' element={<Reviews/>}/>
    </Route>
    </Route>
      
      <Route path='*' element={<NotFound/>}/>
   </Routes>
     <Footer/>
    </>
  )
}

export default App
