const FilterSearch = ({setter}) => {
    return (
        <form> 
            <div> 
            filter shown with <input onChange={(event) => setter(event.target.value)}/> 
            </div>
        </form>
    )
}

export default FilterSearch