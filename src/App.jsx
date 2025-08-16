import React, { useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import WeatherCard from './components/WeatherCard.jsx'
import ErrorMessage from './components/ErrorMessage.jsx'
import useWeather from './hooks/useWeather.js'

export default function App() {
  const [city, setCity] = useState('Nairobi')
  const { data, loading, error, refresh } = useWeather(city)

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-slate-100 text-slate-900">
      <header className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">🌦️ Weather Dashboard</h1>
        <p className="text-sm text-slate-600 mt-1">Powered by OpenWeatherMap</p>
      </header>

      <main className="max-w-3xl mx-auto px-4 pb-16 space-y-6">
        <SearchBar onSearch={setCity} />
        <div className="flex items-center gap-3">
          <button
            onClick={refresh}
            className="px-4 py-2 rounded-xl bg-sky-600 text-white hover:bg-sky-700 transition shadow"
            aria-label="Refresh weather"
          >
            Refresh
          </button>
          <span className="text-xs text-slate-500">
            Auto-updates every 5 minutes
          </span>
        </div>

        {loading && (
          <div className="p-4 rounded-xl bg-white shadow border border-slate-200">Loading current weather…</div>
        )}

        {error && <ErrorMessage message={error} />}

        {data && !error && <WeatherCard weather={data} />}
      </main>

      <footer className="max-w-3xl mx-auto px-4 pb-8 text-center text-xs text-slate-500">
        Built with React + Tailwind. © {new Date().getFullYear()}
      </footer>
    </div>
  )
}
