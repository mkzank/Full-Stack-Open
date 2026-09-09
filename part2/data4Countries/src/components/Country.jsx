import { useEffect, useState } from "react"
import ShowCountry from "./ShowCountry"

const Country = ({filteredCountries, isGettingData}) => {

    const [isShowClicked, setIsShowClicked] = useState(null)

    useEffect(() => {
        setIsShowClicked(null)
    }, [filteredCountries])

    if (isShowClicked) {
        return <ShowCountry country={isShowClicked} />
    }

    if (isGettingData) return null
    if (filteredCountries.length > 10) {
        return <p> Too many matches, specify another filter</p>
    }
    else if (filteredCountries.length > 1) {
        return (
            <ul> 
                {filteredCountries.map(c =>  {
                    return (
                        <li key={c.name.common}> {c.name.common} 
                            <button onClick={() => setIsShowClicked(c)}> show</button>
                        </li>
                    )
                })}
            </ul>
        )
    }
    else if (filteredCountries.length === 1) {
        return <ShowCountry country={filteredCountries[0]} />
    }

    return null
}

export default Country