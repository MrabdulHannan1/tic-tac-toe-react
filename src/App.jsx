import { useState } from "react";
import "./App.css";
import Square from "./Square";

function board() {
  const [xisnext, setxisnext] = useState();

  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextsquare = squares.slice();
    if (xisnext) {
      nextsquare[i] = "X";
    } else {
      nextsquare[i] = "O";
    }
    setSquares(nextsquare);
    setxisnext(!xisnext);
  }

  function calculateWinner(squares) {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xisnext ? "X" : "O");
  }
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div>{status}</div>
      <div className="board-row">
        <Square
          num={squares[0]}
          onsquareClick={() => {
            handleClick(0);
          }}
        />
        <Square
          num={squares[1]}
          onsquareClick={() => {
            handleClick(1);
          }}
        />
        <Square
          num={squares[2]}
          onsquareClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          num={squares[3]}
          onsquareClick={() => {
            handleClick(3);
          }}
        />
        <Square
          num={squares[4]}
          onsquareClick={() => {
            handleClick(4);
          }}
        />
        <Square
          num={squares[5]}
          onsquareClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          num={squares[6]}
          onsquareClick={() => {
            handleClick(6);
          }}
        />
        <Square
          num={squares[7]}
          onsquareClick={() => {
            handleClick(7);
          }}
        />
        <Square
          num={squares[8]}
          onsquareClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </>
  );
}

export default board;
