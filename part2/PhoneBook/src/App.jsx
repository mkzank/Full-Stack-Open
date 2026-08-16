import { useState } from 'react'
import PhoneBook from './Components/PhoneBook'

const App = () => {


  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  
  const updatePersons = (event) => {
    event.preventDefault()
    if (persons.some(p => p.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      const newPersonObject = {name: newName}
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((p, i) => <PhoneBook person={p} key={i}></PhoneBook>)}
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App