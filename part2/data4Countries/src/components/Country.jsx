const Country = ({filteredCountries, isGettingData}) => {

    if (isGettingData) return null
    if (filteredCountries.length > 10) {
        return <p> Too many matches, specify another filter</p>
    }
    else if (filteredCountries.length <= 10 && filteredCountries.length !== 1) {
        return (
            <ul> 
                {filteredCountries.map(c => <li key={c.name.common}> {c.name.common} </li>)}
            </ul>
        )
    }
    else if (filteredCountries.length === 1) {
        const languages = filteredCountries[0].languages ? Object.values(filteredCountries[0].languages) : null
        return (
            <>
                <h2> {filteredCountries[0].name.common} </h2>
                <p> Capital {filteredCountries[0].capital} </p>
                <p> Area {filteredCountries[0].area} </p>
                <h3> Languages </h3>
                <ul> 
                    {languages.map( lang => <li key={lang}> {Object.values(lang)} </li>)}
                </ul>
                <img src={filteredCountries[0].flags.png}/> 
            </>

        )
    }

    
    return null
}

export default Country