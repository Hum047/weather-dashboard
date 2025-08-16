# Weather Dashboard (React + Vite + Tailwind)

A simple, responsive weather dashboard powered by the OpenWeatherMap API.

## 🧰 Tech
- React + Vite
- Tailwind CSS
- Fetch API

## ⚙️ Setup (Local)
```bash
# 1) Install dependencies
npm install

# 2) Add your API key
cp .env.example .env
# then edit .env and set VITE_OPENWEATHER_API_KEY=your_key_here

# 3) Start dev server
npm run dev
```

Your app runs at http://localhost:5173

## 🔑 Getting an API key
- Create a free account at https://openweathermap.org/
- Create an API key
- Put it into `.env` as `VITE_OPENWEATHER_API_KEY=...`

## 🏗️ Project Structure
```txt
src/
  components/
    ErrorMessage.jsx
    SearchBar.jsx
    WeatherCard.jsx
  hooks/
    useWeather.js
  App.jsx
  index.css
  main.jsx
```

## 🚀 Deployment
Deploy on Vercel or Netlify.

### Vercel
- Create a new project from your GitHub repository
- Add `VITE_OPENWEATHER_API_KEY` in *Project Settings → Environment Variables*
- Redeploy

### Netlify
- New site from Git
- Add `VITE_OPENWEATHER_API_KEY` in *Site settings → Environment variables*
- Build command: `npm run build`
- Publish directory: `dist`

## 🧪 Notes
- Auto-refresh runs every 5 minutes. Use the *Refresh* button for manual update.
- Errors (invalid city, network) are shown in a friendly alert.
