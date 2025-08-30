import { useState, useRef } from "react";
console.log("API KEY:", import.meta.env.VITE_WEATHER_API_KEY);

const API = "https://api.openweathermap.org/data/2.5/weather";

export default function useWeather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortRef = useRef(null);

  async function fetchWeather(city) {
    if (!city || !city.trim()) {
      setError("Please enter a city name.");
      setData(null);
      return;
    }
    setLoading(true);
    setError(null);

    if (abortRef.current) abortRef.current.abort();
    abortRef.current = new AbortController();

    try {
      const url = `${API}?q=${encodeURIComponent(city)}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`;
      console.log("Fetching:", url);
      const res = await fetch(url, { signal: abortRef.current.signal });

      if (!res.ok) {
        if (res.status === 404) throw new Error("City not found. Try another name.");
        throw new Error("Failed to fetch weather. Please try again.");
      }

      const json = await res.json();
  
      const cleaned = {
        name: json?.name,
        country: json?.sys?.country,
        temp: json?.main?.temp,
        humidity: json?.main?.humidity,
        wind: json?.wind?.speed, // m/s from OpenWeather
        condition: json?.weather?.[0]?.main,
        description: json?.weather?.[0]?.description,
        icon: json?.weather?.[0]?.icon,
        dt: json?.dt,             // UTC timestamp (s)
        timezone: json?.timezone, // shift from UTC in seconds
      };

      setData(cleaned);
    } catch (err) {
      if (err.name !== "AbortError") setError(err.message || "Something went wrong.");
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, fetchWeather };
}
