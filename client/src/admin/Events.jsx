import { useState } from 'react'

const MOCK_EVENTS = [
  { id: 1, title: 'The Marquis Theater', date: '2025-05-10', venue: 'Denver, CO', type: 'public', ticketUrl: '#' },
  { id: 2, title: 'Band Rehearsal', date: '2025-04-15', venue: 'Studio B', type: 'private', notes: 'Run full set' },
  { id: 3, title: 'Auditions — Drummer', date: '2025-04-20', venue: 'Practice Space', type: 'private', notes: '3 candidates' },
]

const EMPTY_FORM = { title: '', date: '', venue: '', type: 'public', ticketUrl: '', notes: '' }

export default function Events() {
  const [tab, setTab] = useState('all')
  const [events, setEvents] = useState(MOCK_EVENTS)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(EMPTY_FORM)

  const filtered = tab === 'all' ? events : events.filter((e) => e.type === tab)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setEvents([...events, { ...form, id: Date.now() }])
    setForm(EMPTY_FORM)
    setShowForm(false)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xs tracking-widest uppercase text-gray-500">Events</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="border border-white text-white text-xs tracking-widest uppercase px-6 py-2.5 hover:bg-white hover:text-black transition-all"
        >
          {showForm ? 'Cancel' : '+ Add Event'}
        </button>
      </div>

      {/* Add event form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="border border-white/10 p-6 mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-gray-500 mb-4 border-b border-white/10 pb-3">New Event</p>
          </div>

          <FormField label="Event Title" name="title" value={form.title} onChange={handleChange} required />
          <FormField label="Date" name="date" type="date" value={form.date} onChange={handleChange} required />
          <FormField label="Venue / Location" name="venue" value={form.venue} onChange={handleChange} required />

          <div>
            <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Visibility</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full bg-[#0d0d0d] border border-white/20 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/60 transition-colors"
            >
              <option value="public">Public — shown on the website</option>
              <option value="private">Private — band only</option>
            </select>
          </div>

          {form.type === 'public' && (
            <FormField label="Ticket URL" name="ticketUrl" value={form.ticketUrl} onChange={handleChange} placeholder="https://..." />
          )}

          {form.type === 'private' && (
            <FormField label="Internal Notes" name="notes" value={form.notes} onChange={handleChange} placeholder="e.g. Bring gear" />
          )}

          <div className="md:col-span-2">
            <button
              type="submit"
              className="border border-white text-white text-xs tracking-widest uppercase px-8 py-3 hover:bg-white hover:text-black transition-all"
            >
              Save Event
            </button>
          </div>
        </form>
      )}

      {/* Tabs */}
      <div className="flex gap-6 border-b border-white/10 mb-6">
        {['all', 'public', 'private'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`text-xs tracking-widest uppercase pb-3 transition-colors ${
              tab === t
                ? 'text-white border-b border-white'
                : 'text-gray-600 hover:text-gray-400'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Event list */}
      <div className="flex flex-col gap-2">
        {filtered.length === 0 && (
          <p className="text-gray-600 text-sm py-8">No events yet.</p>
        )}
        {filtered.map((event) => (
          <div
            key={event.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between border border-white/10 px-4 py-4 hover:border-white/20 transition-colors gap-3"
          >
            <div className="flex items-start gap-4 min-w-0">
              <p className="text-gray-600 text-xs tabular-nums shrink-0 mt-0.5">{event.date}</p>
              <div className="min-w-0">
                <p className="text-white text-sm">{event.title}</p>
                <p className="text-gray-600 text-xs mt-0.5">{event.venue}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 shrink-0 sm:ml-4">
              <span
                className={`text-xs tracking-widest uppercase px-2 py-0.5 border ${
                  event.type === 'public'
                    ? 'border-white/20 text-gray-400'
                    : 'border-white/10 text-gray-600'
                }`}
              >
                {event.type}
              </span>
              <button className="text-gray-600 hover:text-white text-xs tracking-widest uppercase transition-colors">
                Edit
              </button>
              <button
                onClick={() => setEvents(events.filter((e) => e.id !== event.id))}
                className="text-gray-600 hover:text-red-400 text-xs tracking-widest uppercase transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FormField({ label, name, value, onChange, type = 'text', placeholder = '', required = false }) {
  return (
    <div>
      <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border border-white/20 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/60 transition-colors placeholder-gray-700"
      />
    </div>
  )
}
