import { Routes, Route } from 'react-router-dom'

// Public layout
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Public pages
import Home from './pages/Home'
import News from './pages/News'
import Bio from './pages/Bio'
import Music from './pages/Music'
import Video from './pages/Video'
import Tour from './pages/Tour'
import Contact from './pages/Contact'

// Admin
import Login from './admin/Login'
import ProtectedRoute from './admin/ProtectedRoute'
import AdminLayout from './admin/AdminLayout'
import Dashboard from './admin/Dashboard'
import SiteContent from './admin/SiteContent'
import Events from './admin/Events'
import Merch from './admin/Merch'
import Members from './admin/Members'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d0d] text-white">
      <Routes>
        {/* Hidden admin login — no chrome */}
        <Route path="/manage" element={<Login />} />

        {/* Admin portal — protected, left sidebar layout */}
        <Route path="/manage/*" element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="content" element={<SiteContent />} />
            <Route path="events" element={<Events />} />
            <Route path="merch" element={<Merch />} />
            <Route path="members" element={<Members />} />
          </Route>
        </Route>

        {/* Public site */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/bio" element={<Bio />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/video" element={<Video />} />
                  <Route path="/tour" element={<Tour />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  )
}
