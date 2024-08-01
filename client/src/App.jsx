
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
import { AuthContextProvider } from './contexts/AuthContext'
import Logout from './components/logout/Logout'
import TripEdit from './components/trip-edit/TripEdit'


function App() {
  useScrollToTop();

  return (
    <AuthContextProvider>
    <div id='box'>
        <Navbar />
      <main id='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/user/profile' element={<Profile />} />
          <Route path='/trips/popular' element={<TripsPopular />} />
          <Route path='/trips/all' element={<TripsAll />} />
          <Route path='/trips/:tripId/details' element={<TripDetails />} />
          <Route path='/trips/:tripId/edit' element={<TripEdit />} />
          <Route path='/trip/create' element={<TripCreate />} />
        </Routes>
        </main>

      <footer>
        <Footer />
      </footer>
      </div>
      </AuthContextProvider>
  )
}

export default App
