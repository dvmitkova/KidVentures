import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-lime-100 text-cyan-900 py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} KidVentures. All rights reserved.
          </p>
        </div>
        <nav className="mt-4 flex space-x-4">
          <Link className="hover:text-cyan-600" to="/about">About</Link>
          <Link className="hover:text-cyan-600" to="/contact">Contact</Link>
          <Link className="hover:text-cyan-600" to="/privacy">Privacy Policy</Link>
          <Link className="hover:text-cyan-600" to="/terms">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  )
}