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

const Statistics = (props) => {
  const [good, neutral, bad] = props.stats
  const all = good + bad + neutral
  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  const avg = (good - bad) / all
  const pos = `${(good / all) * 100} %`
  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good} /> 
        <StatisticsLine text="neutral" value={neutral} /> 
        <StatisticsLine text="bad" value={bad} /> 
        <StatisticsLine text="all" value={all} />
        <StatisticsLine text="average" value={avg} />
        <StatisticsLine text="positive" value={pos} />
      </tbody>
    </table>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
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
      <Statistics stats={[good, neutral, bad]} />
    </div>
  )
}

export default App