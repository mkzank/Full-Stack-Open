import { useState } from 'react'

const Header = ({headerText}) => (<h1> {headerText} </h1>)
const Button = ({onClick, text}) => (
  <button onClick={onClick}> 
    {text}
  </button>
)
const Statistics = ({text, number}) => {
  if (text == "positive") {
    return <p> {text} {number} %</p>
  }
  else return <p> {text} {number}</p>
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleStatistics = (typeOfStat) => {
    return () => {
      if (typeOfStat == "good") {
        const updatedGood = good + 1
        const updatedAll = updatedGood + neutral + bad
        setGood(updatedGood)
        setAll(updatedAll)
        setAverage((updatedGood - bad) / updatedAll)
        setPositive((updatedGood / updatedAll) * 100)
      }
      else if (typeOfStat == "neutral") {
        const updatedNeutral = neutral + 1
        const updatedAll = good + updatedNeutral + bad
        setNeutral(updatedNeutral)
        setAll(updatedAll) 
        setAverage((good - bad) / updatedAll)
        setPositive((good / updatedAll) * 100)
      }
      else {
        const updatedBad = bad + 1
        const updatedAll = good + neutral + updatedBad
        setBad(updatedBad)
        setAll(updatedAll)
        setAverage((good - updatedBad) / updatedAll)
        setPositive((good / updatedAll) * 100)
      }
    }
  }


  return (
    <div>
      <Header headerText="give feedback"></Header>
      <Button onClick={handleStatistics("good")} text="good"> </Button>
      <Button onClick={handleStatistics("neutral")} text="neutral"> </Button>
      <Button onClick={handleStatistics("bad")} text="bad"> </Button>
      <Header headerText="statistics"> </Header>
      <Statistics text="good" number={good}></Statistics>
      <Statistics text="neutral" number={neutral}></Statistics>
      <Statistics text="bad" number={bad}></Statistics>
      <Statistics text="all" number={all}></Statistics>
      <Statistics text="average" number={average}></Statistics>
      <Statistics text="positive" number={positive}></Statistics>
    </div>
  )
}

export default App