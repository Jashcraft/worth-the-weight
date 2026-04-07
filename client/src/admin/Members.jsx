import { useState } from 'react'

const MOCK_MEMBERS = [
  { id: 1, name: 'Admin', email: 'admin@worththeweight.com', role: 'admin', instrument: 'Guitar' },
]

const EMPTY_FORM = { name: '', email: '', role: 'member', instrument: '' }

export default function Members() {
  const [members, setMembers] = useState(MOCK_MEMBERS)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(EMPTY_FORM)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setMembers([...members, { ...form, id: Date.now() }])
    setForm(EMPTY_FORM)
    setShowForm(false)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xs tracking-widest uppercase text-gray-500">Members</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="border border-white text-white text-xs tracking-widest uppercase px-6 py-2.5 hover:bg-white hover:text-black transition-all"
        >
          {showForm ? 'Cancel' : '+ Add Member'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="border border-white/10 p-6 mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-gray-500 mb-4 border-b border-white/10 pb-3">New Member</p>
          </div>
          {[
            { label: 'Full Name', name: 'name', placeholder: 'Jane Smith' },
            { label: 'Email', name: 'email', placeholder: 'jane@band.com' },
            { label: 'Instrument / Role', name: 'instrument', placeholder: 'e.g. Drums' },
          ].map(({ label, name, placeholder }) => (
            <div key={name}>
              <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">{label}</label>
              <input
                name={name} value={form[name]} onChange={handleChange} required placeholder={placeholder}
                className="w-full bg-transparent border border-white/20 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/60 transition-colors placeholder-gray-700"
              />
            </div>
          ))}
          <div>
            <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Portal Access</label>
            <select
              name="role" value={form.role} onChange={handleChange}
              className="w-full bg-[#0d0d0d] border border-white/20 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/60"
            >
              <option value="member">Member — can view and edit</option>
              <option value="admin">Admin — full access</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs text-gray-600 mb-4">
              A temporary password will be set to <span className="text-gray-400">ChangeMe123!</span> — remind them to update it on first login.
            </p>
            <button type="submit" className="border border-white text-white text-xs tracking-widest uppercase px-8 py-3 hover:bg-white hover:text-black transition-all">
              Add Member
            </button>
          </div>
        </form>
      )}

      <div className="flex flex-col gap-2">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-between border border-white/10 px-4 py-4 hover:border-white/20 transition-colors gap-4"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 border border-white/20 flex items-center justify-center text-xs text-gray-400 uppercase shrink-0">
                {member.name[0]}
              </div>
              <div className="min-w-0">
                <p className="text-white text-sm truncate">{member.name}</p>
                <p className="text-gray-600 text-xs truncate">{member.email}</p>
                {member.instrument && (
                  <p className="text-gray-700 text-xs mt-0.5">{member.instrument}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className={`hidden sm:inline text-xs tracking-widest uppercase px-2 py-0.5 border ${
                member.role === 'admin' ? 'border-white/30 text-gray-300' : 'border-white/10 text-gray-600'
              }`}>
                {member.role}
              </span>
              <button
                onClick={() => setMembers(members.filter((m) => m.id !== member.id))}
                className="text-gray-600 hover:text-red-400 text-xs tracking-widest uppercase transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
