import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const c = city.trim();
    if (!c) return;
    onSearch(c);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center w-full max-w-xl mx-auto">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search city e.g. Nairobi"
        aria-label="City"
        className="flex-1 rounded-xl border px-4 py-2 outline-none focus:ring focus:ring-blue-200"
      />
      <button type="submit" className="rounded-xl px-4 py-2 shadow bg-blue-600 text-white hover:bg-blue-700">
        Search
      </button>
    </form>
  );
}
