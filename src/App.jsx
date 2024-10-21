import './App.css'
import Count from './Counter';
import Friends from './Friends';
import Team from './Team';
import User from './Users';
function App() {
  function handleClick(){ // 1. First Way!
    alert('handle Clicked!');
  }

  const handleClick2 = () => { // 2. Second Way!
    alert('handle 2 Clicked!');
  }

  const sum =(num1 , num2) =>{
    alert(num1+num2)
  }

  return (
    <>
      <h2>React Core Concept 2</h2>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Count></Count>

      <button onClick={handleClick}>Handle</button><br></br>
      <button onClick={handleClick2}>Handle 2</button>

      <button onClick={ () =>{  // 3. Third Way!
        alert('handle 3 Clicked!')
      }}>Handle 3</button> 

      <button onClick={() =>{ // 3. Forth Way!****
        sum(8,8)
      }} >Sum</button>




    </>
  )
}

export default App
