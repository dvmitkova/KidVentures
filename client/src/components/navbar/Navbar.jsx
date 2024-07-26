import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
      <header className="bg-gradient-to-r from-cyan-100 via-lime-100 to-amber-100 text-cyan-900 py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link className="hover:text-cyan-600 transition" to="/">
            KidVentures
          </Link>
        </h1>
        <nav className="flex space-x-4 font-bold">
          <Link className="hover:text-cyan-600 transition" to="/trips/popular">
            Popular trips
          </Link>
          <Link className="hover:text-cyan-600 transition" to="/trips/all">
            All trips
          </Link>
          <div className="flex space-x-4">
            <Link className="hover:text-cyan-600 transition" to="/trip/create">
              Create a trip
              </Link>
              <Link className="hover:text-cyan-600 transition" to="/register">
              Register
              </Link>
              <Link className="hover:text-cyan-600 transition" to="/login">
              Login
            </Link>
            <Link className="hover:text-cyan-600 transition" to="/user/profile">
              Profile
            </Link>
            <Link className="hover:text-cyan-600 transition" to="/logout">
              Logout
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}