import { useState } from 'react'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Login failed')
      // Redirect to dashboard once it exists
      window.location.replace('/manage/dashboard')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <h1 className="text-xs tracking-widest uppercase text-gray-500">
            Worth the Weight
          </h1>
          <p className="text-gray-600 text-xs mt-2 tracking-wider">Member Access</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-xs tracking-widest uppercase text-gray-500"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className="bg-transparent border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors placeholder-gray-700"
              placeholder="you@band.com"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-xs tracking-widest uppercase text-gray-500"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
              className="bg-transparent border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors placeholder-gray-700"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-red-500 text-xs tracking-wide">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 border border-white text-white text-xs tracking-widest uppercase px-8 py-3 hover:bg-white hover:text-black transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
