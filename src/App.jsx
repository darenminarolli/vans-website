import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './components/About'
import Vans from './components/Vans'
import Home from './components/Home'
import Footer from './components/Footer'
import './server'
import VanDetail from './components/VanDetail'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <NavBar/>
   <Routes>
   <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
      <Route path='/vans' element={<Vans/>}/>
      <Route path='/vans/:id' element={<VanDetail/>}/>
   </Routes>
     <Footer/>
    </>
  )
}

export default App
