const PhoneBook = ({person, i}) => <li key={i}> {person.name} {person.number} </li>

export default PhoneBook