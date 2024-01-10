const Header = ({course}) => (<h1>{course}</h1>)

const Content = ({parts}) => {
  console.log(parts)
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

const Total = ({ex1, ex2, ex3}) => <p>Number of exercises {ex1 + ex2 + ex3}</p>

const App = () => {
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  }
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  }
  const part3 = {
    name: "State of a component",
    exercises: 14,
  }
  const course = 'Half Stack application development'

  const props = [part1, part2, part3]

  return (
    <div>
      <Header course={course}/>
      <Content parts={props} />
      <Total props={props} />
    </div>
  )
}

export default App