# Weather Dashboard (React + Vite + Tailwind)

A modern, responsive weather dashboard powered by the **OpenWeatherMap API**.  
Search any city to view real-time weather data including temperature, condition, humidity, wind speed, and local date/time.

---

## Features
- Search any city for live weather
- Display temperature, humidity, and wind speed
- Show local date & time for the searched city
- Weather icons and conditions (clear, cloudy, rainy, etc.)
- Error handling for invalid city names and network issues
- Loading indicators while fetching data
- Auto-refresh every 5 minutes (manual refresh available)
- Responsive design (mobile to desktop)

---

## Tech Stack
- React + Vite  
- Tailwind CSS  
- Fetch API  

---

## Setup (Local Development)
```bash
# 1) Install dependencies
npm install

# 2) Add your API key
cp .env.example .env
# then edit .env and set:
VITE_OPENWEATHER_API_KEY=your_api_key_here

# 3) Start dev server
npm run dev
