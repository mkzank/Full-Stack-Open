const SearchBar = ({setUserInput}) => {
    const searchBarStyle = {
        fontSize: '15px'
    }

    return (
        <form style={searchBarStyle}>
            <div>
                find countries: <input onChange={(e) => {        
                    setUserInput(e.target.value)
                    console.log(`countries value is: `, e.target.value)
                }}></input> 
            </div> 
        </form>
    )
}

export default SearchBar