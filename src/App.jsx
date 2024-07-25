// rafce for the react snippet

import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import ConfirmOrder from './pages/ConfirmOrder/ConfirmOrder'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/Loginpopup/Loginpopup'
import ReviewOrder from './pages/ReviewOrder/ReviewOrder'
import Thankyou from './pages/Thankyou/Thankyou'

const App = () => {

  const [showlogin, setshowlogin] = useState(false)

  return (
    <>
      {showlogin ? <Loginpopup setshowlogin={setshowlogin} /> : <></>}
      <div className='app'>
        <Navbar setshowlogin={setshowlogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/booking' element={<ConfirmOrder />} />
          <Route path='/review' element={<ReviewOrder />} />
          <Route path='/booking-confirmed' element={<Thankyou />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
