import axios from 'axios' 

// https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}


const getWeather = (lat, lon) => {
        
    const weatherAPIKey = import.meta.env.VITE_WEATHER_API_KEY
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?`
    console.log("Loaded API Key:", weatherAPIKey)
    return (
        axios
        .get(weatherURL, {
            params: {
                lat: lat,
                lon: lon,
                appid: weatherAPIKey,
                units: "metric"
            }
        })
        .then(resp => {
            console.log(`fetched weather data: `, resp.data)
            return resp.data
        })
        .catch(err => {
            console.log(`fetch weather data error: `, err)
        })
    )
}


export default {getWeather}