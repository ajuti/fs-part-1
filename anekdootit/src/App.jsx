import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handler}>{props.text}</button>
  )
}

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Anecdote = (props) => {
  return (
    <p>
      {props.anecdote}<br/>
      has {props.votes} votes
    </p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, updateVotes] = useState(Array(8).fill(0))

  const handleNextAnecdote = () => {
    const index = Math.floor(Math.random() * 7)
    setSelected(index)
  }

  const handleVote = () => {
    const copyOfVotes = [...votes]
    copyOfVotes[selected] += 1
    updateVotes(copyOfVotes)
  }

  const mostVotes = () => {
    return Math.max(...votes)
  }

  return (
    <div>
      <Header text={"Anecdote of the day"} />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handler={handleVote} text="vote" />
      <Button handler={handleNextAnecdote} text="next anecdote" />
      <Header text={"Anecdote with most votes"} />
      <Anecdote anecdote={anecdotes[votes.indexOf(mostVotes())]} votes={mostVotes()} />
    </div>
  )
}

export default App