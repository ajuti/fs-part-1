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
  const all = good + bad + neutral
  let avg = (good - bad) / all
  let pos = (good / all) * 100
  if (all === 0) {
    avg = "can't calculate yet"
    pos = "can't calculate yet"
  }
  return (
    <p>
      good {good} <br/>
      neutral {neutral} <br/>
      bad {bad} <br/>
      all {all} <br/>
      average {avg} <br/>
      positive {pos} %
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