import { useState, useEffect } from 'react';

export default function useWeather(city) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    async function fetchWeather() {
      setLoading(true);
      setError(null);

      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error('City not found');
        }

        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  return { weather, loading, error };
}
