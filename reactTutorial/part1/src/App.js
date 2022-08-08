// import logo from './logo.svg';
// import './App.css';

const Hello = (props) => {
  return (
    <div>
      <p> Hello {props.name}, you are {props.age} years of age, and your favorite animal are {props.favoriteAnimal}</p>

    </div>
  )
}
const App = () => {
const name ='David'
const age = 28
const favoriteAnimal = "cats"
  return (
  <div>
  <h1> Greetings</h1>
  
  <Hello name = "Louise" age={15+5+3} favoriteAnimal="cats"/>
  <Hello name = {name} age={age} favoriteAnimal={favoriteAnimal}/>
  </div>
  )
  }
export default App;

