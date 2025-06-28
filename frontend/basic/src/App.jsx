import React from 'react'
import Navbar from './components/Navbar'
import UserLogin from './pages/UserLogin'
import Start from './pages/Start'
import { Route, Routes } from 'react-router-dom'
import UserSignUp from './pages/UserSignUp'
import Home from './pages/Home'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignIn from './pages/CaptainSignIn'
import CaptainHome from './pages/CaptainHome'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignUp />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/captainLogin' element={<CaptainLogin />} />
        <Route path='/captainSignup' element={<CaptainSignIn />} />
        <Route path='/captainHome' element={<CaptainHome />} />
      </Routes>
    </div>
  )
}
export default App
