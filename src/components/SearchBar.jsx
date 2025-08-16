import React, { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const v = value.trim()
    if (!v) return
    onSearch(v)
    setValue('')
  }

  return (
    <form onSubmit={submit} className="flex gap-2">
      <input
        type="text"
        placeholder="Search city e.g., Nairobi, London, Tokyo…"
        className="flex-1 px-4 py-3 rounded-xl border border-slate-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label="City name"
      />
      <button
        type="submit"
        className="px-5 py-3 rounded-xl bg-sky-600 text-white hover:bg-sky-700 transition shadow"
      >
        Search
      </button>
    </form>
  )
}
