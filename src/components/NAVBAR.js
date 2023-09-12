import { AppBar, Toolbar } from "@mui/material";
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import './navbarstyles/navbar.css';
import Search from "./Search";
import { WEATHER_API_URL, WEATHER_API_KEY, TIMEZONE_API } from "./api";
import { useCallback } from "react";

const NAVBAR = ({ onValueChange }) => {
  const HandleOnSearchChange = useCallback((f) => {
    const [lat, lon] = f.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`);
    const forecastWeatherFetch = fetch(`${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`);
    const timeZoneFetch = fetch(`${TIMEZONE_API}position&lat=${lat}&lng=${lon}`);

    Promise.all([currentWeatherFetch, forecastWeatherFetch, timeZoneFetch])
      .then(async (responses) => {
        const weatherData = await responses[0].json();
        const forecastData = await responses[1].json();
        const timeZoneData = await responses[2].json();

        onValueChange(weatherData, forecastData, timeZoneData);
      })
      .catch((err) => console.log(err));
  }, [onValueChange]);

  return (
    <AppBar>
      <Toolbar className="custom-navbar1">
        <AcUnitSharpIcon fontSize="large" />
        <div className="search-navbar1">
          <Search color='red' onSearchChange={HandleOnSearchChange} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NAVBAR;
