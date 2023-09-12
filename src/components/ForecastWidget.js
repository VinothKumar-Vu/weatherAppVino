import React from 'react';
import Grid from '@mui/material/Grid';
import './Widgetstyles/forecast.css';
import { DateTime,IANAZone  } from 'luxon';
import { useState,useEffect } from 'react';
import ThermostatIcon from '@mui/icons-material/Thermostat';



const ForecastWidget = (props) => {

  const {data,timeZone} = props 


  console.log(data)
  console.log(data.list)
  console.log(timeZone)
 


  const [hr_city_data,setHourly] = useState(data.list)

  useEffect(() => {
    if (data && data.list) {
      setHourly(data.list);
    }
  }, [data]);

  
  return (
        <div className="forecast">
      {/* <Grid container spacing={1}> */}
      <Grid  container rowSpacing={2} columnSpacing={1}>

        <Grid item xs = {12}>
        <header className="header">
          Hourly Forecast for {data.city.name}, {data.city.country}
        </header>
        </Grid>

        { hr_city_data.slice(0,4).map((listElement, index) => {

        const dateObject = DateTime.fromSeconds(listElement.dt, { zone: timeZone.zoneName })
        const time = dateObject.toFormat('h:mm a');
        const dayOfWeek = dateObject.toFormat('EEEE')
        const date = dateObject.toFormat('LLL d')
        
          return (

          <Grid item xs = {3} className="grid-item" key={index}>
          {/* <Box > */}
            <p>{time}</p>
            <p>{date} | {dayOfWeek}</p>
            <p>{<img src={`http://openweathermap.org/img/wn/${listElement.weather[0].icon}@2x.png`}/>}</p>
            <p>{listElement.weather[0].description}</p>
            <p><ThermostatIcon color="action"  fontSize="small"/> {listElement.main.temp_max}° / {listElement.main.temp_min}°</p> 
            {/* </Box> */}
        </Grid>
        )})
        }

      </Grid>
    </div>
    )
}

export default ForecastWidget