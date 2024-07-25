import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-cyan-100 via-lime-100 to-amber-100 text-cyan-950 font-bold py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} KidVentures. All rights reserved.
          </p>
        </div>
        <nav className="mt-4 flex space-x-4">
          <Link className="hover:text-cyan-600" to="/">Home</Link>
        </nav>
      </div>
    </footer>
  )
}