import React from 'react'
import './App.scss'
import Akmal from './Components/AboutCreator/Akmal'
import ColorCard from './Components/Colorcard/ColorCard'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AdminPanel from './pages/AdminPanel'
import MainList from './Components/MainList/MainList'
import Universal from './Components/Universal/Universal'
import Footer from './Components/Footer/Footer'
import Education from './Components/Education/Education'
import Generation from './Components/Generation/GEneration'
import Strange from './Components/Strange/Strange'

const App = () => {
  return (
    <>
    {/* <Header/> */}

<Routes>
 <Route path='/' element={<Home/>}/>
<Route path='/admin' element={<AdminPanel/>}/>
<Route path='/Akmal' element ={<Akmal/>}/>
<Route path='/Edu' element={<Education/>}/>
<Route path='/gen' element={<Generation/>}/>
<Route path='/strange' element={<Strange/>}/>
<Route path='/Universal' element ={<Universal/>}/>
<Route path='/insta' element={''}/>
</Routes>




   
    {/* <Akmal/> */}

<ColorCard/>

    {/* <Footer/> */}
    
    </>
  )
}

export default App