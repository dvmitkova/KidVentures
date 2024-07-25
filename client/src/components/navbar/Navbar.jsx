import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
<header className="bg-lime-100 text-white py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl text-cyan-900 font-bold hover:text-cyan-600">
          <Link className="home" to="/">KidVentures</Link>
        </h1>
        <nav className="flex space-x-4 text-cyan-900 font-bold">
          <Link className="hover:text-cyan-600" to="/trips/popular">Popular trips</Link>
          {/* Logged-in users */}
          <div id="user" className="flex space-x-4 hidden">
            <Link className="hover:text-cyan-600" to="/trips/create">Create a trip</Link>
            <Link className="hover:text-cyan-600" to="/user/profile">Profile</Link>
            <Link className="hover:text-cyan-600" to="/logout">Logout</Link>
          </div>
          {/* Guest users */}
          <div id="guest" className="flex space-x-4">
            <Link className="hover:text-cyan-600" to="/login">Login</Link>
            <Link className="hover:text-cyan-600" to="/register">Register</Link>
          </div>
        </nav>
      </div>
    </header>
    )
}