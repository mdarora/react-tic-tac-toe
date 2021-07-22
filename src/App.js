import {useState, useEffect} from 'react'
const initialGameState = ["","","","","","","","",""];

const App = () => {

  const [gameState, setgameState] = useState(initialGameState);
  const [isXTurn, setIsXTurn] = useState(true);

  const squareClicked = (i,e) =>{
    let arr = Array.from(gameState);
    if (!e.target.textContent){
      arr[i] = isXTurn? "X" : "0";
      setgameState(arr);
      setIsXTurn(!isXTurn);
    }
  };

  const findWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    if(!gameState.includes("")){
      return "Draw";
    }

    return null;
  }


  useEffect(() => {
    const result = findWinner(gameState);
    if(result && result !== "Draw"){
      alert(`${result} has won.`);
      setgameState(initialGameState);
    } else if (result) {
      alert('Match Draw');
      setgameState(initialGameState);
    }
  }, [gameState]);

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <div className="square-container">
        <div className="squares" onClick={(e)=> squareClicked(0,e)}>{gameState[0]}</div>
        <div className="squares" onClick={(e)=> squareClicked(1,e)}>{gameState[1]}</div>
        <div className="squares" onClick={(e)=> squareClicked(2,e)}>{gameState[2]}</div>
        <div className="squares" onClick={(e)=> squareClicked(3,e)}>{gameState[3]}</div>
        <div className="squares" onClick={(e)=> squareClicked(4,e)}>{gameState[4]}</div>
        <div className="squares" onClick={(e)=> squareClicked(5,e)}>{gameState[5]}</div>
        <div className="squares" onClick={(e)=> squareClicked(6,e)}>{gameState[6]}</div>
        <div className="squares" onClick={(e)=> squareClicked(7,e)}>{gameState[7]}</div>
        <div className="squares" onClick={(e)=> squareClicked(8,e)}>{gameState[8]}</div>
      </div>
      <div className="clear-btn">
        <button onClick={() => setgameState(initialGameState)}>Clear Game</button>
      </div>
    </div>
  )
}

export default App
