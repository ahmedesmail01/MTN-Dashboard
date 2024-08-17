# MTN-Dashboard

================

MTN-Dashboard is a React-based dashboard application built with TypeScript, Vite, and various modern web technologies. It provides a comprehensive set of features including todo management, weather forecasts, post browsing, and profile information display.

## Demo on Netlify:

- Demo : "https://mtn-dashboard.netlify.app/"

## Technologies Used

---

- React
- TypeScript
- Vite
- Redux Toolkit
- Axios
- Chakra UI
- React Router DOM
- Jest (for testing)

## Features

---

The dashboard consists of 4 main pages:

### Todo Page

- Manage todos with local storage
- Mark todos as complete
- Delete todos
- State management using Redux

### Weather Page

- Fetch weather data from OpenWeather API
- Display today's weather and 5-day forecast
- Search functionality for different cities

### Posts Page

- Fetch posts from "https://dummyjson.com/posts"
- Implement pagination for post display
- Search functionality to find posts by title

### Profile Page

- Display GitHub profile information for Quincy Larson (founder of freeCodeCamp)
- Fetch data from "https://api.github.com/users/QuincyLarson"

All pages implement loading and error states for improved user experience.

## Installation

---

1.  Clone the repository: https://github.com/ahmedesmail01/MTN-Dashboard.git
2.  Navigate to the project directory: `cd MTN-Dashboard`
3.  Install dependencies: `npm install`
4.  Demo on netlify: https://mtn-dashboard.netlify.app/

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

---

To create a production build: `npm run build`

## Running Tests

---

To run the test suite: `npm test`

## Contributing

---

Contributions are welcome! Please feel free to submit a Pull Request.
