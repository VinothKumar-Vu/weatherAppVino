import NAVBAR from './components/NAVBAR';
import CurrentWeatherWidget from './components/CurrentWeatherWidget';
import ForecastWidget from './components/ForecastWidget';
import TodaysWeather from './components/TodaysWeather';
import { useState } from 'react';
import Map from './components/MapWidget';
import Welcome from './components/Welcome';

function App() {
  const [weatherData, setWeatherData] = useState({
    weatherResponse: null,
    forecastResponse: null,
    timeZoneResponce: null,
  });

  const [showBeforeCondition, setShowBeforeCondition] = useState(true);

  const valueChange = (weatherRep, forecastRep, timezoneVal) => {
    setWeatherData((previousState) => ({
      ...previousState,
      weatherResponse: weatherRep,
      forecastResponse: forecastRep,
      timeZoneResponce: timezoneVal,
    }));

    // After changing the navbar, hide the component
    setShowBeforeCondition(false);
  };

  return (
    <>
      <NAVBAR onValueChange={valueChange} />

      {/* Render the component before the condition */}
      {showBeforeCondition && <Welcome />}

      {weatherData.weatherResponse !== null && weatherData.forecastResponse !== null && (
        <>
          <CurrentWeatherWidget data={weatherData.weatherResponse} timeZone={weatherData.timeZoneResponce} />
          <Map data={weatherData.weatherResponse} />
          <ForecastWidget data={weatherData.forecastResponse} timeZone={weatherData.timeZoneResponce} />
          <TodaysWeather data={weatherData.weatherResponse} />
        </>
      )}
    </>
  );
}

export default App;
