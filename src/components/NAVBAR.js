import { AppBar,Toolbar } from "@mui/material"
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp'
import './navbarstyles/navbar.css';
import Search from "./Search";
import { WEATHER_API_URL, WEATHER_API_KEY,TIMEZONE_API } from "./api"
import { useEffect,useState } from "react";

const NAVBAR = ({onValueChange}) => {

    
  const [weatherResponse,setCurrentWeather] = useState(null)
  const [forecastResponse,setForcest] = useState(null)

  const [timezone,setTimeZone] = useState(null)

  const HandleOnSearchChange = (f) =>{

    const [lat, lon] = f.value.split(" ")

  
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)
  
    const forecastWeatherfetch = fetch(`${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)

    const timeeZonefetch = fetch(`${TIMEZONE_API}position&lat=${lat}&lng=${lon}`)


    Promise.all([currentWeatherFetch, forecastWeatherfetch,timeeZonefetch])
    .then(async(response)=> {
      const weatherData  = await response[0].json()
      const forecastData  = await response[1].json()
      const timeZoneData = await response[2].json()
      
      setCurrentWeather({city: f.label, ...weatherData})
      setForcest({city: f.label, ...forecastData})
      setTimeZone({city: f.label, ...timeZoneData})

      // console.log(weatherResponse.city)  if i run this here, it throws error at first, but inside useEffect it works fine.
      // onValueChange(weatherResponse,forecastResponse)

    })
    .catch((err) => console.log(err))
  }
  
  useEffect(() => {

    if (weatherResponse !== null && forecastResponse !== null) {
      console.log(weatherResponse.city)
      console.log(timezone.zoneName)

      onValueChange(weatherResponse, forecastResponse,timezone);
    }
  }, [weatherResponse, forecastResponse]);


  return (
      <AppBar>
        <Toolbar className="custom-navbar1">
        <AcUnitSharpIcon fontSize="large" />
        <div className="search-navbar1"><Search color='red' onSearchChange={HandleOnSearchChange}/></div>
        </Toolbar>
      </AppBar>
  )
}

export default NAVBAR
