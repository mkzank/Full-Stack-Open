import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import countrySvc from './service/countrySvc'
import Country from './components/Country'

const App = () => {
  
  const [userInput, setUserInput] = useState('')
  const [gettingData, setGettingData] = useState(true)
  const [foundCountries, setFoundCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {
    countrySvc
    .getAll()
    .then(data => {
      setAllCountries(data)
      setGettingData(false)
    })
    .catch(err => console.log("Get all countries failed: ", err))
  }, [])

  useEffect(() => {
    if (!gettingData) {
      setFoundCountries(
      allCountries.filter(c => 
          c.name.common.toLowerCase().includes(userInput.toLowerCase())
        )
      )
    }
  }, [userInput])

  return (
    <>  
      <SearchBar setUserInput={setUserInput}/> 
      <Country filteredCountries={foundCountries} isGettingData={gettingData}/>
    </>
  )
}

export default App
