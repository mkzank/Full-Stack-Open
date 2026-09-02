const Record = ({person, deletePerson}) => {
    return (
        <>
            <li key={person.id}> {person.name} {person.number} </li>
            <button onClick={() => deletePerson(person.id)}> delete </button>
        </>
    )
}

const PhoneBook = ({persons, deleteFun}) => persons.map(p => <Record person={p} deletePerson={deleteFun} key={p.id}></Record>)

export default PhoneBook