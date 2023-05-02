import './App.css';
// import Board from "./components/Board";
import { useEffect, useState, useContext, createContext, useRef } from 'react';

// why can't I pass turn as useRef and make it work?
// why won't my useEffect calculate winner?

const GameContext = createContext()

function App() {

  const [board, setBoard] = useState([["", "", ""], ["", "", ""], ["", "", ""]])
  const turn = useRef(true)
  // const result = useRef("Player X's turn")

  function resetGame() {
    setBoard([["", "", ""], ["", "", ""], ["", "", ""]])
    turn.current = true
  }    

  return (
    <GameContext.Provider value={{boardContext: [board, setBoard], turnContext: turn}}>
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

function Board(props) {
  const rows = []
  for (var i = 0; i < 3; i++) {
      rows.push(
      <div key={i} className="boardRow">
          <Box row={i} col={0}></Box>
          <Box row={i} col={1}></Box>
          <Box row={i} col={2}></Box>
      </div>
      )
  }
  return (
      <>
      {rows}
      </>
  )
}

function Box(props) {

  const { boardContext, turnContext } = useContext(GameContext);
  const turn = turnContext;
  const [board, setBoard] = boardContext;

  function handleButtonClick() {    
    setBoard((board) => {
      const newBoard = [...board];
      newBoard[props.row][props.col] = turn.current ? "X" : "O"      
      return newBoard
    })     
       
  }

  useEffect(() => {
    turn.current = !turn.current;
    console.log("updateing board")
    const checkWinner = () => {
      console.log("checking")
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
    // console.log(result.current)
    return () => {
      console.log("Closing")
    }
  }, [board])

  return (
      <>
      <button onClick={handleButtonClick} className="box">{board[props.row][props.col]}</button>
      </>
  )
}

export default App;
