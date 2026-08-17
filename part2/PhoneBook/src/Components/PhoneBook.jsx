const Record = ({person}) => <li key={person.id}> {person.name} {person.number} </li>

const PhoneBook = ({persons}) => persons.map(p => <Record person={p} key={p.id}></Record>)

export default PhoneBook