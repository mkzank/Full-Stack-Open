const express = require('express')
const app = express()
app.use(express.json())

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


app.get('/api/persons', (req, resp) => {
    resp.json(persons)
})

app.get('/api/persons/:id', (req, resp) => {
    const id = req.params.id
    const person = persons.find(p => p.id === id)
    if (person) {
        resp.json(person)
        console.log(`Found person id: ${id}`)
    }
    else {
        resp.status(404).end()
        console.log(`Cannot find person.`)
    }
})

app.get('/info', (req, resp) => {
    let numPeople = persons.length
    resp.write(`PhoneBook has info for ${numPeople} people \n`)
    resp.write(Date().toString())
    resp.end()
    console.log('Fetched persons.')
})

app.delete('/api/persons/:id', (req, resp) => {
    const id = req.params.id
    persons = persons.filter(p => p.id !== id)
    resp.status(204).end()
})

app.post('/api/persons', (req, resp) => {
    const randomInt = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
    console.log(`DEBUG largest int: ${Number.MAX_SAFE_INTEGER}`)
    console.log(`DEBUG randomInt: ${randomInt}`)
    const body = req.body
    const newPerson = {
        "name": String(body.name),
        "number": String(body.number)
    }
    newPerson.id = String(randomInt)
    persons = persons.concat(newPerson)
    resp.json(newPerson)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})