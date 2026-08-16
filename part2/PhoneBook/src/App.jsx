import { useState } from 'react'
import PhoneBook from './Components/PhoneBook'

const App = () => {


  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNewName = (event) => setNewName(event.target.value)
  const handleNewNumber = (event) => setNewNumber(event.target.value)
  
  const updatePersons = (event) => {
    event.preventDefault()
    if (persons.some(p => p.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      const newPersonObject = {name: newName, number: newNumber}
      setPersons(persons.concat(newPersonObject))
      console.log("Person added: ", newName)
    }
  } 


  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map((p, i) => <PhoneBook person={p} key={i}></PhoneBook>)}
      </ul>
      <div>debug: New name: {newName} New Number: {newNumber}</div>
    </div>
  )
}

export default App