const PersonForm = ({updatePersons, handleNewName, handleNewNumber}) => {
    return (
        <form onSubmit={(e) => updatePersons(e)}>
            <div>
            name: <input onChange={(e) => handleNewName(e)}/>
            </div>
            <div>
            number: <input onChange={(e) => handleNewNumber(e)}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm