import { useState } from 'react'
import PhoneBook from './Components/PhoneBook'

const App = () => {


  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567',
      id: 1
    },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
    { name: 'Dan Abramov', number: '12-43-234345', id: 3},
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const handleNewName = (event) => setNewName(event.target.value)
  const handleNewNumber = (event) => setNewNumber(event.target.value)
  const handleFilterName = (event) => setFilterName(event.target.value)

  const updatePersons = (event) => {
    event.preventDefault()
    if (persons.some(p => p.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      const newPersonObject = {name: newName, number: newNumber, id: persons.length + 1}
      setPersons(persons.concat(newPersonObject))
      console.log("Person added: ", newName)
    }
  } 

  const filterPersonsList = (filterName.trim() === "")
  ? persons 
  : persons.filter(p => p.name.toLowerCase().includes(filterName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <form> 
        <div> 
          filter shown with <input onChange={handleFilterName}/> 
        </div>
      </form>
      <h2> add a new </h2>
      <form onSubmit={updatePersons}>
        <div>
          name: <input onChange={handleNewName}/>
        </div>
        <div>
          number: <input onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <PhoneBook persons={filterPersonsList}></PhoneBook>
      </ul>
      <div>debug: filteredname: {filterName} </div>
    </div>
  )
}

export default App