import { useState } from 'react'


const Header = () => {
  return(<h1> Give Feedback</h1>)
}

const Statistics = (props) => {
if(props.goodCount===0 && props.neutralCount===0 && props.badCount===0) {
  return(
    <div>
      <h1> Statistics </h1>
      <p>No feedback given</p>
    </div>
    
  )
}

  return (
  <div>
  <h1> Statistics </h1>
  <table>
      <tbody>
 <StatisticLine text="Good" count={props.goodCount}/>
 <StatisticLine text="Neutral" count={props.neutralCount}/>
 <StatisticLine text="Bad" count={props.badCount}/>
 <StatisticLine text="All" count={props.goodCount + props.neutralCount + props.badCount}/>
 <StatisticLine text="Average" count={(props.goodCount + props.neutralCount + props.badCount)/3}/>
 <StatisticLine text="Positive" count={100*(props.goodCount)/(props.goodCount + props.neutralCount + props.badCount)} symbol="%"/>
</tbody>
    </table>
  

  
  </div>
 
  )
}

const StatisticLine = (props) => {
return(
<p>{props.text}: {props.count} {props.symbol}</p>
)
}


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)



const App = () => {
  // save clicks of each button to its own state
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }

  const handleBadClick = () => {
    setBad(bad+1)
  }

  return (
    
    <div>
      <Header/>
      <Button handleClick = {handleGoodClick} text ="Good"/>
      <Button handleClick = {handleNeutralClick} text ="Neutral"/>
      <Button handleClick = {handleBadClick} text ="Bad"/>
      <Statistics goodCount={good} neutralCount ={neutral} badCount = {bad}/>

    </div>
  )
}

export default App