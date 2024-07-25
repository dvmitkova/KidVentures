
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'


function App() {

  return (
    <div id='box'>
        <Navbar />
      <Header />

      <main id='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        </main>

    </div>
  )
}

export default App
