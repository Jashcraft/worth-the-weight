import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const links = [
  { label: 'NEWS', to: '/news' },
  { label: 'BIO', to: '/bio' },
  { label: 'MUSIC', to: '/music' },
  { label: 'VIDEO', to: '/video' },
  { label: 'TOUR', to: '/tour' },
  { label: 'CONTACT', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Worth the Weight"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm tracking-widest uppercase transition-colors ${
                pathname === to
                  ? 'text-white border-b border-white pb-0.5'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`text-sm tracking-widest uppercase transition-colors ${
                pathname === to ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
