
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import TripsPopular from './components/trips-popular/TripsPopular'
import TripCreate from './components/trip-create/TripCreate'
import Profile from './components/profile/Profile'
import Footer from './components/footer/Footer'
import TripsAll from './components/trips-all/TripsAll'
import TripDetails from './components/trip-details/TripDetails'
import useScrollToTop from './hooks/useScrollToTop'
import { useState } from 'react'
import { AuthContext } from './contexts/AuthContext'


function App() {
  useScrollToTop();

  //TODO: move this outside the app
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    setAuthState(state)
  }

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  }

  return (
    <AuthContext.Provider value={contextData}>
    <div id='box'>
        <Navbar />
      <main id='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/user/profile' element={<Profile />} />
          <Route path='/trips/popular' element={<TripsPopular />} />
          <Route path='/trips/all' element={<TripsAll />} />
          <Route path='/trips/:tripId/details' element={<TripDetails />} />
          <Route path='/trip/create' element={<TripCreate />} />
        </Routes>
        </main>

      <footer>
        <Footer />
      </footer>
      </div>
      </AuthContext.Provider>
  )
}

export default App
