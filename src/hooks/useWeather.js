import { useEffect, useRef, useState } from 'react'

const API_BASE = 'https://api.openweathermap.org/data/2.5/weather'
const REFRESH_MS = 5 * 60 * 1000 // 5 minutes

export default function useWeather(city) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const timerRef = useRef(null)

  const fetchWeather = async () => {
    if (!city) return
    setLoading(true)
    setError('')
    try {
      const key = import.meta.env.VITE_OPENWEATHER_API_KEY
      if (!key) {
        throw new Error('Missing API key. Create a .env file with VITE_OPENWEATHER_API_KEY=your_key')
      }
      const url = new URL(API_BASE)
      url.searchParams.set('q', city)
      url.searchParams.set('appid', key)
      url.searchParams.set('units', 'metric')
      const res = await fetch(url.toString())
      if (!res.ok) {
        let msg = `Request failed (${res.status})`
        try {
          const j = await res.json()
          if (j?.message) msg = j.message
        } catch {}
        throw new Error(msg)
      }
      const json = await res.json()
      setData(json)
    } catch (e) {
      setError(e.message || 'Failed to fetch weather')
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  const refresh = () => {
    fetchWeather()
  }

  useEffect(() => {
    fetchWeather()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])

  useEffect(() => {
    timerRef.current = setInterval(fetchWeather, REFRESH_MS)
    return () => clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])

  return { data, loading, error, refresh }
}
