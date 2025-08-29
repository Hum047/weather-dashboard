import { useState } from "react";
import useWeather from "./hooks/useWeather";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBanner from "./components/ErrorBanner";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [city, setCity] = useState("");
  const { data, loading, error, fetchWeather } = useWeather();

  function onSubmit(e) {
    e.preventDefault();
    fetchWeather(city);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">Weather Dashboard</h1>
          <p className="text-gray-600">Search a city to see the current weather.</p>
        </header>

        <form onSubmit={onSubmit} className="flex gap-2">
          <input
            className="flex-1 rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g., Nairobi"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-2xl px-5 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 active:scale-[0.99]"
          >
            Search
          </button>
        </form>

        <ErrorBanner message={error} />

        {loading && <LoadingSpinner />}

        {!loading && data && (
          <div className="mt-4">
            <WeatherCard
              name={data.name}
              country={data.country}
              temp={data.temp}
              condition={data.condition}
              description={data.description}
              icon={data.icon}
              humidity={data.humidity}
              wind={data.wind}
              dt={data.dt}
              timezone={data.timezone}
            />
          </div>
        )}
      </div>
    </div>
  );
}
