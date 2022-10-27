// IMPORTS
import './App.css';
import { useState } from 'react'
import MoleContainer from './components/MoleContainer'

// MAIN FUNCTION
function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for(let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />)
    }
    return (
      <div>
        { hills }
      </div>
    )
  }
  
  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  );
}
// line 8 utilizies "useState" to start the score.  It is set to zero to begin.
// line 10 declares "createMoleHill"
// line 11 delcares "hills" as an empty array
// line 12 "for" statement doing array iterates over an array
// line 13 "hills.push"-- the "push()" method is used to add to the "hills" array
// 


// EXPORT
export default App;
