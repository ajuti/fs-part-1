const Header = ({course}) => (<h1>{course.name}</h1>)

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

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  const amount = course.parts.reduce((acc, part) => acc + part.exercises, 0)

  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts} />
      <Total total={amount} />
    </div>
  )
}

export default App