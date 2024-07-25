
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Popular from './components/popular/Popular'
import CreateTrip from './components/createTrip/CreateTrip'


function App() {

  return (
    <div id='box'>
        <Navbar />
      <main id='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/trips/popular' element={<Popular />} />
          <Route path='/trips/create' element={<CreateTrip />} />
        </Routes>
        </main>

    </div>
  )
}

export default App
