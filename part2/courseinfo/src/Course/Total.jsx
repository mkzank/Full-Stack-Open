const Total = ({parts}) => {
    const total = parts.reduce((s, p) => {
        console.log("s is: ", s, "p is: ", p.exercises)
        return s + p.exercises
      }, 0) 

    return (
        <h3>Total of {total} exercises</h3>
    )
}

export default Total