const stats = [
  { label: 'Upcoming Shows', value: '—' },
  { label: 'Private Events', value: '—' },
  { label: 'Merch Items', value: '—' },
  { label: 'Band Members', value: '—' },
]

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-xs tracking-widest uppercase text-gray-500 mb-8">
        Overview
      </h1>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {stats.map(({ label, value }) => (
          <div key={label} className="border border-white/10 p-6 hover:border-white/20 transition-colors">
            <p className="text-2xl font-light text-white mb-1">{value}</p>
            <p className="text-xs tracking-widest uppercase text-gray-600">{label}</p>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <h2 className="text-xs tracking-widest uppercase text-gray-500 mb-4">
        Quick Actions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Add Public Event', to: '/manage/events' },
          { label: 'Update Site Content', to: '/manage/content' },
          { label: 'Add Merch Item', to: '/manage/merch' },
        ].map(({ label, to }) => (
          <a
            key={label}
            href={to}
            className="border border-white/10 px-6 py-4 text-xs tracking-widest uppercase text-gray-400 hover:border-white/30 hover:text-white transition-all"
          >
            {label} →
          </a>
        ))}
      </div>
    </div>
  )
}
