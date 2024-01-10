const Header = ({course}) => (<h1>{course}</h1>)

const Content = ({parts}) => {
  const [part1, part2, part3] = parts
  return (
    <>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </>
  )
}

const Part = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Total = ({total}) => <p>Number of exercises {total}</p>

const App = () => {
  const parts = [
  {
    name: "Fundamentals of React",
    exercises: 10,
  },
  {
    name: "Using props to pass data",
    exercises: 7,
  },
  {
    name: "State of a component",
    exercises: 14,
  }
]
  const course = 'Half Stack application development'
  const amount = parts.reduce((acc, part) => acc + part.exercises, 0)

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total total={amount} />
    </div>
  )
}

export default App