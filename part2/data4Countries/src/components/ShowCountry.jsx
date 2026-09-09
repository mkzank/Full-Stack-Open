const ShowCountry = ({country}) => {
    const languages = country.languages ? Object.values(country.languages) : []
    return (
        <>
            <h2> {country.name.common} </h2>
            <p> Capital {country.capital} </p>
            <p> Area {country.area} </p>
            <h3> Languages </h3>
            <ul> 
                {languages.map(lang => <li key={lang}> {lang} </li>)}
            </ul>
            <img src={country.flags.png}/> 
        </>
    )
}

export default ShowCountry