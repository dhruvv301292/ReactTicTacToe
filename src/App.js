import './App.css';
import Board from "./components/Board";
import { useEffect, useState, createContext, useRef } from 'react';

// why can't I pass turn as useRef and make it work?
// why won't my useEffect calculate winner?

export const GameContext = createContext()

function App() {
  const [board, setBoard] = useState([["", "", ""], ["", "", ""], ["", "", ""]])
  const turn = useRef(true)
  // const result = useRef("Player X's turn")

  function resetGame() {
    setBoard([["", "", ""], ["", "", ""], ["", "", ""]])
  }    

  useEffect(() => {
    turn.current = !turn.current;
    const checkWinner = () => {
      return checkCols() || checkRows() || checkDiagonals()
    }
  
    function checkCols() {
      for (var i = 0; i<3; i++) {
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
          if (board[0][i] === "X" || board[0][0] === "O") {
            return true
          }
        }
      }
      return false
    }
  
    function checkRows() {
      for (var i = 0; i<3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
          if (board[i][0] === "X" || board[0][0] === "O") {
            return true
          }
        }
      }
      return false
    }
  
    function checkDiagonals() {
  
      if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        if (board[1][1] === "X" || board[1][1] === "O") {
          return true
        }
      }
      if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        if (board[1][1] === "X" || board[1][1] === "O") {
          return true
        }
      }
      return false;
    }

    if(checkWinner()) {      
      console.log("WINNER")
    }
  }, [board])

  return (
    <GameContext.Provider value={{boardContext: [board, setBoard], turn: turn}}>
    <>
    <div className='board'>
      <Board turn={turn} setBoard={setBoard} board={board}></Board>      
    </div>
    <div>
      <button className='clearBoard' onClick={resetGame}>Clear Board</button>
    </div>
    </>
    </GameContext.Provider>
  );
}

export default App;
