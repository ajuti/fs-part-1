import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
} 

const Button = (props) => {
  return (
    <button onClick={props.handler}>{props.text}</button>
  )
}

const Data = (props) => {
  const [good, neutral, bad] = props.stats
  return (
    <p>
      good {good} <br/>
      neutral {neutral} <br/>
      bad {bad} <br/>
    </p>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title="give feedback" />
      <Button handler={() => setGood(good + 1)} text="good" />
      <Button handler={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handler={() => setBad(bad + 1)} text="bad" />
      <Header title="statistics" />
      <Data stats={[good, neutral, bad]} />
    </div>
  )
}

export default App