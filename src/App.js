import React from 'react'
// import './app.scss'
import './App.scss'

// ROUTES
import { Routes, Route, Navigate } from 'react-router-dom'
// =======

// COMPONENTS
// import Footer from './components/Footer'
import NavBar from './components/navBar'
import Filter from './components/Filter'
// PAGES
import Home from './pages/Home'
import Cars from './pages/Cars'
import CarsMore from './pages/СarsMore/CarsMore'
import Category from './pages/Category/Category'
// import Loader from './components/Loader'
import FAQ from './pages/FAQ'
import Advantages from './pages/Advantages'
import Promo from './pages/Promo'
import Contacts from './pages/Contacts'
import Login from './pages/Login'
import Send_Ads from './pages/Send_ads'
import Anchor from './components/Anchor'
import Support from './components/Support'
import PrivateRoute from './components/Private/PrivateRoute'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Favorites from './pages/Favorites'
// ========

// Database


function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Navigate to='/' />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/advantages' element={<Advantages />} />
          <Route path='/auth/register' element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path='/send_ads' element={<Send_Ads />} />
            <Route path='/auth/login' element={<Login />} />
          </Route>
          <Route path='/rent' element={<Promo />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/filter' element={<Filter />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/saved' element={<Favorites />} />

          {/* <Route path='/register' element={<Register />} /> */}
          <Route path='/carsmore/:id' element={<CarsMore />} />
          <Route path='/info' element={<Filter />} />
          {/* <Route path='/cars/:category' element={<Category />} /> */}
          {/* <Route path='/register' element={<Register />} /> */}
        </Routes>
      </main>

      <Support />
      <Anchor />
    </div>

  )
}

export default App
