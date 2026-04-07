import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.jpg'
import logo from '../assets/logo.png'

export default function Home() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dark gradient overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0d0d0d] z-10" />

        {/* Hero photo */}
        <img
          src={heroImg}
          alt="Worth the Weight"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="relative z-20 text-center px-6">
          {/* Band logo instead of text heading */}
          <img
            src={logo}
            alt="Worth the Weight"
            className="w-full max-w-xl mx-auto mb-8"
          />
          <p className="text-gray-400 text-sm md:text-base tracking-[0.4em] uppercase mb-10">
            New Album Out Now
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/music"
              className="px-8 py-3 border border-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all"
            >
              Listen Now
            </Link>
            <Link
              to="/tour"
              className="px-8 py-3 border border-white/30 text-sm tracking-widest uppercase text-gray-300 hover:border-white hover:text-white transition-all"
            >
              Tour Dates
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </section>

      {/* Latest news teaser */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-xs tracking-widest uppercase text-gray-500 mb-8">Latest</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-white/10 p-6 hover:border-white/30 transition-colors">
              <p className="text-gray-600 text-xs tracking-widest uppercase mb-3">Apr 2025</p>
              <h3 className="text-white font-medium mb-2">News headline placeholder {i}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                News content will appear here once the backend is connected.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/news"
            className="text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors border-b border-gray-700 hover:border-white pb-0.5"
          >
            All News →
          </Link>
        </div>
      </section>
    </>
  )
}
