
const Header = (props) => {

return (
 
  <h1> {props.courseName}</h1>
 
)
}

const Content = (props) => {
  return (
    <div>
     <Part part = {props.part1} numberOfExercises = {props.numberOfExercises1}/>
     <Part part = {props.part2} numberOfExercises = {props.numberOfExercises2}/>
     <Part part = {props.part3} numberOfExercises = {props.numberOfExercises3}/>
    </div>
  )
}

const Part = (props) => {
return (
  <p>
  {props.part} {props.numberOfExercises}
</p>
)
}

const Total = (props) => {
  return(
  <p> Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const App = () => {

  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
    <Header courseName = {course.name}/>
    <Content part1 = {course.parts[0].name} numberOfExercises1 = {course.parts[0].exercises} part2 = {course.parts[1].name} numberOfExercises2 = {course.parts[1].exercises} part3 = {course.parts[2].name} numberOfExercises3 = {course.parts[2].exercises}/>
    <Total exercises1 = {course.parts[0].exercises}  exercises2 = {course.parts[1].exercises}  exercises3 = {course.parts[2].exercises}/>
    </div>
  )
}

export default App
