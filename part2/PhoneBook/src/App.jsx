import { useEffect, useState } from 'react'
import PhoneBook from './Components/PhoneBook'
import FilterSearch from './Components/FilterSearch'
import PersonForm from './Components/PersonForm'
import phoneBookService from './service/phoneBookService'
import Notification from './Components/Notification'

const App = () => {


  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [notiMessage, setNotiMessage] = useState('')
  
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
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with the new one?`)) {
        const existingPerson = persons.find(p => p.name === newName)
        const updatePersonObject = {...existingPerson, number: newNumber}
        const existingPersonId = existingPerson.id
        phoneBookService
        .updatePerson(existingPersonId, updatePersonObject)
        .then(data => {
          setPersons(persons.map(p => p.id === existingPersonId? updatePersonObject : p))
          setNotiMessage(`${data.name} has been updated, with number: ${data.number}`)
          console.log(`${data.name} has been updated, with number: ${data.number}`)
          setTimeout(() => {
            setNotiMessage(null)
          }, 5000)
        })
        .catch(err => console.log(`error updating person: ${err}`))
      }
    }
    else {
      const newPersonObject = {name: newName, number: newNumber, id: persons.length + 1}
      phoneBookService
      .create(newPersonObject)
      .then(data => {
        setNotiMessage(`Added ${data.name}`)
        setPersons(persons.concat(data))
        console.log("Person added: ", data)
        setTimeout(() => {
          setNotiMessage(null)
        }, 5000)
      })
    }
  } 

  const handleDelete = (id) => {
    if (window.confirm(`Delete ${persons.find(p => p.id === id).name}? `)) {
      phoneBookService
      .deletePerson(id)
      .then(data => {
        setPersons(persons.filter(p => p.id !== id))
        console.log(`Person ${data.name} has been deleted.`)
      })
      .catch(err => console.log("Person deleted is not found."))
    }
  }

  let filterPersonsList = (filterName.trim() === "")
  ? persons 
  : persons.filter(p => p.name.toLowerCase().includes(filterName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notiMessage}/>
      <FilterSearch setter={setFilterName}></FilterSearch>
      <h2> Add a new </h2>
        <PersonForm updatePersons={updatePersons} handleNewName={handleNewName} handleNewNumber={handleNewNumber}></PersonForm>
      <h2>Numbers</h2>
      <ul>
        <PhoneBook persons={filterPersonsList} deleteFun={handleDelete}></PhoneBook>
      </ul>
    </div>
  )
}

export default App