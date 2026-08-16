import Header from './Header'
import Content from './Content'
import Total from './Total'


const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

const Courses = () => {
    return (
      courses.map(
      (c, i) => 
        <li key={i}>
          <Header courses={c.name}></Header>
          <Content parts={c.parts}></Content>
          <Total parts={c.parts}></Total>
        </li>        
    )
  )
}

export default Courses