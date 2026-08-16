import Header from './Course/Header'
import Content from './Course/Content'


const Total = ({total}) => <h3>Total of {total} exercises</h3>
let total = 0

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  course.parts.forEach(p => total += p.exercises)

  return (
    <>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total total={total}></Total>
    </>
  )
}

export default App