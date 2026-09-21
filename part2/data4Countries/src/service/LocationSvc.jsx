import axios from 'axios'


const locationURL = `http://api.openweathermap.org/geo/1.0/direct?`

const getLocation = (city) => {
    const weatherAPIKey = import.meta.env.VITE_WEATHER_API_KEY
    return (
        axios
        .get(locationURL, {
            params: {
                q: city,
                appid: weatherAPIKey
            }
        })
        .then(resp => {
            console.log(`fetched location data: `, resp.data)
            return resp.data
        })
        .catch(err => console.log(`Fetch city location error: ${err}`))
    )
}

export default {getLocation}