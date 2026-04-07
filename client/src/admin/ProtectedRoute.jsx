import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
  const [status, setStatus] = useState('checking') // 'checking' | 'authed' | 'denied'

  useEffect(() => {
    fetch('/api/auth/me', { credentials: 'include' })
      .then((res) => setStatus(res.ok ? 'authed' : 'denied'))
      .catch(() => setStatus('denied'))
  }, [])

  if (status === 'checking') {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
      </div>
    )
  }

  if (status === 'denied') {
    return <Navigate to="/manage" replace />
  }

  return <Outlet />
}
