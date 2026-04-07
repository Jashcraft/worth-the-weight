import { useState } from 'react'

const sections = [
  { id: 'hero', label: 'Hero Section', description: 'Main photo and headline on the homepage' },
  { id: 'bio', label: 'Band Bio', description: 'The bio text shown on the Bio page' },
  { id: 'music', label: 'Music Links', description: 'Streaming links and album info' },
  { id: 'social', label: 'Social Links', description: 'Instagram, Facebook, YouTube, Spotify URLs' },
]

export default function SiteContent() {
  const [active, setActive] = useState('hero')

  return (
    <div>
      <h1 className="text-xs tracking-widest uppercase text-gray-500 mb-8">
        Site Content
      </h1>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Section picker */}
        <aside className="md:w-48 md:shrink-0">
          <nav className="flex flex-row md:flex-col gap-1 overflow-x-auto pb-1 md:pb-0">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`shrink-0 text-left px-3 py-2.5 text-xs tracking-widest uppercase transition-colors rounded-sm ${
                  active === id
                    ? 'bg-white/10 text-white'
                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Editor panel */}
        <div className="flex-1 border border-white/10 p-4 md:p-6">
          {active === 'hero' && <HeroEditor />}
          {active === 'bio' && <BioEditor />}
          {active === 'music' && <MusicEditor />}
          {active === 'social' && <SocialEditor />}
        </div>
      </div>
    </div>
  )
}

function HeroEditor() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader title="Hero Section" description="Controls what visitors see first on the homepage." />
      <Field label="Headline" placeholder="e.g. New Album Out Now" />
      <Field label="Subtext" placeholder="e.g. Available on all platforms" />
      <div>
        <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">
          Hero Photo
        </label>
        <div className="border border-dashed border-white/20 p-8 text-center text-gray-600 text-xs tracking-wider hover:border-white/40 transition-colors cursor-pointer">
          Click to upload — recommended 1920×1080
        </div>
      </div>
      <SaveButton />
    </div>
  )
}

function BioEditor() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader title="Band Bio" description="Displayed on the Bio page." />
      <div>
        <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Bio Text</label>
        <textarea
          rows={8}
          className="w-full bg-transparent border border-white/20 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/60 transition-colors resize-none placeholder-gray-700"
          placeholder="Write your band bio here..."
        />
      </div>
      <SaveButton />
    </div>
  )
}

function MusicEditor() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader title="Music Links" description="Streaming and download links shown on the Music page." />
      <Field label="Spotify URL" placeholder="https://open.spotify.com/..." />
      <Field label="Apple Music URL" placeholder="https://music.apple.com/..." />
      <Field label="Bandcamp URL" placeholder="https://yourband.bandcamp.com/..." />
      <Field label="YouTube Music URL" placeholder="https://music.youtube.com/..." />
      <SaveButton />
    </div>
  )
}

function SocialEditor() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader title="Social Links" description="These appear in the site footer and header." />
      <Field label="Instagram" placeholder="https://instagram.com/..." />
      <Field label="Facebook" placeholder="https://facebook.com/..." />
      <Field label="YouTube" placeholder="https://youtube.com/..." />
      <Field label="TikTok" placeholder="https://tiktok.com/..." />
      <SaveButton />
    </div>
  )
}

function SectionHeader({ title, description }) {
  return (
    <div className="border-b border-white/10 pb-4">
      <h2 className="text-white text-sm font-medium mb-1">{title}</h2>
      <p className="text-gray-600 text-xs">{description}</p>
    </div>
  )
}

function Field({ label, placeholder }) {
  return (
    <div>
      <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent border border-white/20 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/60 transition-colors placeholder-gray-700"
      />
    </div>
  )
}

function SaveButton() {
  return (
    <div>
      <button className="border border-white text-white text-xs tracking-widest uppercase px-8 py-3 hover:bg-white hover:text-black transition-all">
        Save Changes
      </button>
    </div>
  )
}
