import { useEffect, useState } from "react";
import WeatherSvc from "../service/WeatherSvc";
import LocationSvc from '../service/LocationSvc'

const ShowWeather = ({cityName}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [weatherInfo, setWeatherInfo] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            const locationData = await LocationSvc.getLocation(cityName.trim())
            const lat = locationData? locationData[0].lat : 0
            const lon = locationData? locationData[0].lon : 0
            
            if (lat === 0 || lon === 0) {
                console.log('Unable to find city location, assume lat and lon to be 0.')
            }
            const weatherData = await WeatherSvc.getWeather(lat, lon)
            // const weatherIcon = await WeatherSvc.getWeatherIcon(weatherData.weather[0].icon)
            const weatherIcon = `https://openweathermap.org/payload/api/media/file/${weatherData.weather[0].icon}.png`
            setWeatherInfo({
                temp: weatherData?.main?.temp ?? 0,
                wind: weatherData?.wind?.speed ?? 0,
                icon: weatherIcon 
            })
            
            setIsLoading(false)
        }
        fetchData()
    }, [cityName]);

    if (!isLoading) {
        return (
            <>
                <h3> Weather in {cityName}</h3>
                <p> Temperature {weatherInfo.temp} Celesius</p>
                <img src={weatherInfo.icon} />
                <p> wind {weatherInfo.wind} m/s</p>
            </>
        )   
    } 
    return null
}

export default ShowWeather