import {useState} from 'react'
const initialGameState = ["","","","","","","","",""];

const App = () => {

  const [gameState, setgameState] = useState(initialGameState);

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <div className="square-container">
        <div className="squares">{gameState[0]}</div>
        <div className="squares">{gameState[1]}</div>
        <div className="squares">{gameState[2]}</div>
        <div className="squares">{gameState[3]}</div>
        <div className="squares">{gameState[4]}</div>
        <div className="squares">{gameState[5]}</div>
        <div className="squares">{gameState[6]}</div>
        <div className="squares">{gameState[7]}</div>
        <div className="squares">{gameState[8]}</div>
      </div>
      <div className="clear-btn">
        <button onClick={() => setgameState(initialGameState)}>Clear Game</button>
      </div>
    </div>
  )
}

export default App
