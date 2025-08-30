export default function WeatherCard({ name, country, temp, condition, description, icon, humidity, wind, dt, timezone }) {
  if (!name) return null;

  const localTime = new Date((dt + timezone) * 1000).toUTCString();

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold">{name}, {country}</h2>
      <p className="text-gray-500">{localTime}</p>

      <div className="flex items-center gap-4 mt-4">
        {icon && <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />}
        <div>
          <p className="text-3xl font-bold">{Math.round(temp)}°C</p>
          <p className="text-gray-600">{condition} - {description}</p>
          <p className="text-gray-600">Humidity: {humidity}%</p>
          <p className="text-gray-600">Wind: {wind} m/s</p>
        </div>
      </div>
    </div>
  );
}
