function formatLocal(dt, timezone) {
  if (!dt) return "";
  const ms = (dt + (timezone ?? 0)) * 1000; // dt is UTC seconds; add shift
  return new Date(ms).toLocaleString();
}

export default function WeatherCard({
  name,
  country,
  temp,
  condition,
  description,
  icon,
  humidity,
  wind,
  dt,
  timezone,
}) {
  const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : null;

  return (
    <div className="rounded-2xl shadow-lg p-5 bg-white/80 backdrop-blur border border-gray-100">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">{name}{country ? `, ${country}` : ""}</h2>
          <p className="text-sm text-gray-500">{formatLocal(dt, timezone)}</p>
        </div>
        {iconUrl && <img src={iconUrl} alt={description || condition} className="h-16 w-16" />}
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-xl bg-gray-50 p-3">
          <p className="text-xs text-gray-500">Temperature</p>
          <p className="text-lg font-medium">{Math.round(temp)}°C</p>
        </div>
        <div className="rounded-xl bg-gray-50 p-3">
          <p className="text-xs text-gray-500">Condition</p>
          <p className="text-lg font-medium">{condition}</p>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
        <div className="rounded-xl bg-gray-50 p-3">
          <p className="text-xs text-gray-500">Humidity</p>
          <p className="text-lg font-medium">{humidity}%</p>
        </div>
        <div className="rounded-xl bg-gray-50 p-3">
          <p className="text-xs text-gray-500">Wind</p>
          <p className="text-lg font-medium">{wind} m/s</p>
        </div>
      </div>
    </div>
  );
}
