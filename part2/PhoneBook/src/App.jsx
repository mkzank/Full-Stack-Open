import { useEffect, useState } from 'react'
import PhoneBook from './Components/PhoneBook'
import FilterSearch from './Components/FilterSearch'
import PersonForm from './Components/PersonForm'
import phoneBookService from './service/phoneBookService'

const App = () => {


  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  
  useEffect(() => {
    phoneBookService
    .getAll()
    .then(data => setPersons(data))
  }, [])

  const handleNewName = (event) => setNewName(event.target.value)
  const handleNewNumber = (event) => setNewNumber(event.target.value)

  const updatePersons = (event) => {
    event.preventDefault()
    if (persons.some(p => p.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      const newPersonObject = {name: newName, number: newNumber, id: persons.length + 1}
      phoneBookService.create(newPersonObject)
      setPersons(persons.concat(newPersonObject))
      console.log("Person added: ", newPersonObject)
    }
  } 

  let filterPersonsList = (filterName.trim() === "")
  ? persons 
  : persons.filter(p => p.name.toLowerCase().includes(filterName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterSearch setter={setFilterName}></FilterSearch>
      <h2> Add a new </h2>
        <PersonForm updatePersons={updatePersons} handleNewName={handleNewName} handleNewNumber={handleNewNumber}></PersonForm>
      <h2>Numbers</h2>
      <ul>
        <PhoneBook persons={filterPersonsList}></PhoneBook>
      </ul>
    </div>
  )
}

export default App