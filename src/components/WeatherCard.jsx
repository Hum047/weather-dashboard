import React from 'react'

export default function WeatherCard({ weather }) {
  const { name, sys, main, wind, weather: w } = weather
  const cond = w && w.length ? w[0] : null
  const icon = cond ? `https://openweathermap.org/img/wn/${cond.icon}@2x.png` : null

  return (
    <section className="rounded-2xl bg-white shadow border border-slate-200 p-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{name}{sys?.country ? `, ${sys.country}` : ''}</h2>
          <p className="text-slate-500">{cond?.main}{cond?.description ? ` • ${cond.description}` : ''}</p>
        </div>
        {icon && (
          <img
            src={icon}
            alt={cond?.description || 'weather icon'} width="80" height="80"
            className="select-none"
          />
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="p-4 rounded-xl bg-sky-50 border border-sky-100">
          <div className="text-xs text-slate-500">Temperature</div>
          <div className="text-2xl font-semibold">{Math.round(main.temp)}°C</div>
          <div className="text-xs text-slate-500">Feels like {Math.round(main.feels_like)}°C</div>
        </div>
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
          <div className="text-xs text-slate-500">Humidity</div>
          <div className="text-2xl font-semibold">{Math.round(main.humidity)}%</div>
        </div>
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
          <div className="text-xs text-slate-500">Wind</div>
          <div className="text-2xl font-semibold">{Math.round(wind.speed)} m/s</div>
        </div>
        <div className="p-4 rounded-xl bg-violet-50 border border-violet-100">
          <div className="text-xs text-slate-500">Pressure</div>
          <div className="text-2xl font-semibold">{Math.round(main.pressure)} hPa</div>
        </div>
      </div>
    </section>
  )
}
