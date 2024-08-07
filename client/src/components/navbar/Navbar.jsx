import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Navbar() {
  const { isAuthenticated, email } = useAuthContext();

  return (
    <header className="bg-gradient-to-r from-cyan-100 via-lime-100 to-amber-100 text-cyan-900 py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">
          <Link className="hover:text-cyan-600 transition" to="/">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-36 h-auto"
            />
          </Link>
        </h1>
        <nav className="flex space-x-2 md:space-x-4 font-bold">
          <div className="flex space-x-2 md:space-x-4">
            <Link className="text-xs md:text-sm lg:text-base hover:text-cyan-600 transition" to="/trips/all">
              All trips
            </Link>
            <Link
              className="text-xs md:text-sm lg:text-base hover:text-cyan-600 transition"
              to="/trips/latest"
            >
              Latest trips
            </Link>
          </div>
          {!isAuthenticated ? (
            <div className="flex space-x-2 md:space-x-4">
              <Link className="text-xs md:text-sm lg:text-base hover:text-cyan-600 transition" to="/register">
                Register
              </Link>
              <Link className="text-xs md:text-sm lg:text-base hover:text-cyan-600 transition" to="/login">
                Login
              </Link>
            </div>
          ) : (
            <div className="flex space-x-2 md:space-x-4">
              <Link
                className="text-xs md:text-sm lg:text-base hover:text-cyan-600 transition"
                to="/trips/create"
              >
                Create a trip
              </Link>
              <Link
                className="text-xs md:text-sm lg:text-base hover:text-cyan-600 transition"
                to="/user/profile"
              >
                {email} Profile
              </Link>
              <Link className="text-xs md:text-sm lg:text-base hover:text-cyan-600 transition" to="/logout">
                Logout
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
