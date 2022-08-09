import { useState } from 'react'



const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}


const App = () => {


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]


  const [selected, setSelected] = useState(0)
  const [voteCount, setVoteCount] = useState(new Array(anecdotes.length).fill(0));


  const handleRandomClick = () => {
    setSelected((selected + getRandomInt(7))%7)
  }

  const handleVoteClick = () => {
    const pointsCopy = [...voteCount];
    pointsCopy[selected] +=1
    setVoteCount(pointsCopy)
  }


  const bestAnecdoteIndex = voteCount.indexOf(Math.max(...voteCount));

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}
      <div>has {voteCount[selected]} points</div>
      <p>
      <Button text = "Vote" handleClick = {handleVoteClick}/>
      <Button text = "Next Anecdote" handleClick = {handleRandomClick}/>
      </p>
      <h1>Anecdote With the Most Votes</h1>
      <p>{anecdotes[bestAnecdoteIndex]}</p>
      <p>Has {voteCount[bestAnecdoteIndex]} votes</p>

    </div>
  )
}

export default App