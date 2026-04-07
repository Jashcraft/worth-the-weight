import { useState } from 'react'

const MOCK_MERCH = [
  { id: 1, name: 'Logo Tee — Black', category: 'Apparel', price: 25, stock: 12 },
  { id: 2, name: 'Logo Tee — White', category: 'Apparel', price: 25, stock: 0 },
  { id: 3, name: 'Self-Titled LP (Vinyl)', category: 'Music', price: 30, stock: 5 },
  { id: 4, name: 'Sticker Pack', category: 'Accessories', price: 5, stock: 50 },
]

const EMPTY_FORM = { name: '', category: 'Apparel', price: '', stock: '' }

export default function Merch() {
  const [items, setItems] = useState(MOCK_MERCH)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(EMPTY_FORM)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setItems([...items, { ...form, id: Date.now(), price: Number(form.price), stock: Number(form.stock) }])
    setForm(EMPTY_FORM)
    setShowForm(false)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xs tracking-widest uppercase text-gray-500">Merch</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="border border-white text-white text-xs tracking-widest uppercase px-6 py-2.5 hover:bg-white hover:text-black transition-all"
        >
          {showForm ? 'Cancel' : '+ Add Item'}
        </button>
      </div>

      {/* Add item form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="border border-white/10 p-6 mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-gray-500 mb-4 border-b border-white/10 pb-3">New Item</p>
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Item Name</label>
            <input
              name="name" value={form.name} onChange={handleChange} required
              className="w-full bg-transparent border border-white/20 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/60 transition-colors placeholder-gray-700"
              placeholder="e.g. Logo Tee — Black"
            />
          </div>
          <div>
            <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Category</label>
            <select
              name="category" value={form.category} onChange={handleChange}
              className="w-full bg-[#0d0d0d] border border-white/20 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/60 transition-colors"
            >
              {['Apparel', 'Music', 'Accessories', 'Other'].map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Price ($)</label>
            <input
              type="number" name="price" value={form.price} onChange={handleChange} required min="0" step="0.01"
              className="w-full bg-transparent border border-white/20 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/60 transition-colors placeholder-gray-700"
              placeholder="0.00"
            />
          </div>
          <div>
            <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Stock</label>
            <input
              type="number" name="stock" value={form.stock} onChange={handleChange} required min="0"
              className="w-full bg-transparent border border-white/20 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/60 transition-colors placeholder-gray-700"
              placeholder="0"
            />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="border border-white text-white text-xs tracking-widest uppercase px-8 py-3 hover:bg-white hover:text-black transition-all">
              Save Item
            </button>
          </div>
        </form>
      )}

      {/* Desktop table */}
      <div className="hidden sm:block border border-white/10">
        <div className="grid grid-cols-4 px-5 py-3 border-b border-white/10">
          {['Item', 'Category', 'Price', 'Stock'].map((h) => (
            <span key={h} className="text-xs tracking-widest uppercase text-gray-600">{h}</span>
          ))}
        </div>
        {items.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-4 px-5 py-4 border-b border-white/5 hover:bg-white/5 transition-colors items-center"
          >
            <span className="text-sm text-white">{item.name}</span>
            <span className="text-xs text-gray-500 tracking-wider">{item.category}</span>
            <span className="text-sm text-gray-300">${item.price.toFixed(2)}</span>
            <div className="flex items-center gap-4">
              <span className={`text-sm ${item.stock === 0 ? 'text-red-500' : item.stock < 5 ? 'text-yellow-500' : 'text-gray-300'}`}>
                {item.stock === 0 ? 'Out of stock' : item.stock}
              </span>
              <button
                onClick={() => setItems(items.filter((i) => i.id !== item.id))}
                className="text-gray-700 hover:text-red-400 text-xs tracking-widest uppercase transition-colors ml-auto"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.id} className="border border-white/10 p-4">
            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <p className="text-white text-sm">{item.name}</p>
                <p className="text-gray-600 text-xs mt-0.5">{item.category}</p>
              </div>
              <button
                onClick={() => setItems(items.filter((i) => i.id !== item.id))}
                className="text-gray-700 hover:text-red-400 text-xs tracking-widest uppercase transition-colors shrink-0"
              >
                Remove
              </button>
            </div>
            <div className="flex items-center gap-6">
              <div>
                <p className="text-xs tracking-widest uppercase text-gray-600 mb-0.5">Price</p>
                <p className="text-sm text-gray-300">${item.price.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-gray-600 mb-0.5">Stock</p>
                <p className={`text-sm ${item.stock === 0 ? 'text-red-500' : item.stock < 5 ? 'text-yellow-500' : 'text-gray-300'}`}>
                  {item.stock === 0 ? 'Out of stock' : item.stock}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
