# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

🌤️ Weather App — React + TypeScript + TailwindCSS

- A modern, fully responsive weather application built with React, TypeScript, and TailwindCSS. The app allows users to view real-time weather data, five-day forecasts, search for weather information across Vietnam, and save search history locally.

🚀 Features
📍 Real-time Weather Information

- Current temperature, humidity, pressure, visibility, and general weather conditions.

- Ability to switch temperature units between °C and °F.

🔍 Search & Local Storage

- Search for weather data across all cities and provinces in Vietnam.

- Search history is automatically stored in localStorage.

- Quickly re-search using saved history.

📅 5-Day Forecast

View a detailed 5-day weather forecast with temperature trends and key metrics.

Forecast displayed with a clean and modern layout for easier reading.

🗺️ Browse Other Cities

Explore weather information for different locations without refreshing the app.

📱 Responsive Modern UI

UI built with TailwindCSS

Fully responsive on mobile, tablet, and desktop.

Clean, modern, and intuitive interface.

🛠️ Tech Stack

React (TypeScript) — Frontend framework with type safety

Vite — Fast development build tool

TailwindCSS — Utility-first CSS for styling

OpenWeatherMap API — Real-time and forecast weather data

localStorage — Persistent search history

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
