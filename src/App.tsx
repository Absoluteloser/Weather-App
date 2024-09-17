import { createContext, useState } from 'react';
import Weather from './components/Weather';

const UserContext = createContext({});

const App = () => {
  const [weatherData, setWeatherData] = useState({}); // Define the state for weatherData and setWeatherData

  return (
    <div>
      <UserContext.Provider value={{ weatherData, setWeatherData }}>
        <Weather />
      </UserContext.Provider>
    </div>
  );
};

export default App;
export {UserContext}