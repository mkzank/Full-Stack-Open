import { useState } from 'react'

const Header = ({headerText}) => (<h1> {headerText} </h1>)
const Button = ({onClick, text}) => (
  <button onClick={onClick}> 
    {text}
  </button>
)
const ShowStatistics = ({text, number}) => <p> {text} {number}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <Header headerText="give feedback"></Header>
      <Button onClick={() => setGood(good + 1)} text="good"> </Button>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"> </Button>
      <Button onClick={() => setBad(bad + 1)} text="bad"> </Button>
      <Header headerText="statistics"> </Header>
      <ShowStatistics text="good" number={good}></ShowStatistics>
      <ShowStatistics text="neutral" number={neutral}></ShowStatistics>
      <ShowStatistics text="bad" number={bad}></ShowStatistics>
    </div>
  )
}

export default App