export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm tracking-widest uppercase">
          Worth the Weight
        </p>
        <div className="flex gap-6">
          {/* Social links — swap hrefs when ready */}
          {['Instagram', 'Facebook', 'YouTube', 'Spotify'].map((platform) => (
            <a
              key={platform}
              href="#"
              className="text-gray-500 text-sm tracking-wider uppercase hover:text-white transition-colors"
            >
              {platform}
            </a>
          ))}
        </div>
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} Worth the Weight. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
