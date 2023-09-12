import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Widgetstyles/weather-today.css';


import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CompressIcon from '@mui/icons-material/Compress';
import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CloudIcon from '@mui/icons-material/Cloud';


const TodaysWeather = ({ data }) => {
    // console.log('printing value in widget')
    console.log(data)

    return (
        <div className="weather-today">
            <header className="header-today">Weather Today in {data.name}</header>

            <Grid container rowSpacing={2} columnSpacing={1} className='content-today'>
                <Grid item xs={12}>
                    <Box >
                        <p style={{ fontWeight: 'bold' }}>Feels Like:</p>
                        <p style={{ fontSize: '40px' , fontWeight: 'bold', marginTop: '-10px', marginBottom: '-5px'}}>{data.main.feels_like}°C</p>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box>
                        <div class="row-component">
                            <div class="title"><ThermostatIcon color="action" fontSize="small" /> High / Low:</div>
                            <div class="value"><p>{data.main.temp_max}°/{data.main.temp_min}°</p></div>
                        </div>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box>
                        <div class="row-component">
                            <div class="title"><AirIcon color="action" fontSize="small" /> Wind:</div>
                            <div class="value">{data.wind.speed} m.p.h</div>
                        </div>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box>
                        <div class="row-component">
                            <div class="title"><WaterDropIcon color="action" fontSize="small" /> Humidity:</div>
                            <div class="value">{data.main.humidity}%</div>
                        </div>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box ><div class="row-component">
                        <div class="title"><CompressIcon color="action" fontSize="small" /> Pressure:</div>
                        <div class="value">{data.main.pressure} hPa</div>
                    </div>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box>
                        <div class="row-component">
                            <div class="title"><CloudIcon color="action" fontSize="small" /> Cloudiness:</div>
                            <div class="value"><p>{data.clouds.all}%</p></div>
                        </div>
                    </Box>
                </Grid>

            </Grid>
        </div>
    );
};

export default TodaysWeather;
