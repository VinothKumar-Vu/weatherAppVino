import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Widgetstyles/currentweather.css';
import { DateTime } from 'luxon';

import ThermostatIcon from '@mui/icons-material/Thermostat';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';

const CurrentWeatherWidget = (props) => {

  const { data, timeZone } = props

  const time_dateObject = DateTime.fromSeconds(data.dt, { zone: timeZone.zoneName }).toFormat('h:mm a')
  const sunrise_dateObject = DateTime.fromSeconds(data.sys.sunrise, { zone: timeZone.zoneName }).toFormat('h:mm a')
  const sunset_dateObject = DateTime.fromSeconds(data.sys.sunset, { zone: timeZone.zoneName }).toFormat('h:mm a')


  return (
    <div className="weather">

      <header className="header-current">
        <label>{data.name},{data.sys.country} As of {time_dateObject} ({timeZone.zoneName})</label>
      </header>


      <Grid container rowSpacing={2} columnSpacing={1} className='content-curr'>

        <Grid item xs={7}>
          <Box className='fontCurrent'>
            <p style={{ fontSize: '40px' , fontWeight: 'bold', marginTop: '15px' }}>{data.main.temp}°C</p>
            <p>{data.weather[0].description}</p>
            <p><ThermostatIcon color="action"  fontSize="small"/> {data.main.temp_max}° / {data.main.temp_min}°</p>
            <p><WbSunnyIcon color="action"  fontSize="small"/> {sunrise_dateObject} | <WbTwilightIcon color="action"  fontSize="small"/> {sunset_dateObject}</p>
          </Box>
        </Grid>

        <Grid item xs={5}>
          <img style={{ width: '150px', height: '150px' }} alt="Weather Icon" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
        </Grid>


      </Grid>
    </div>
  );
};

export default CurrentWeatherWidget;
