import React, { useState, useCallback } from "react";
import Timer from "./components/timer";
import Board from "./components/board";
import { useTimer } from "./components/timer/hooks/useTimer";
import { Squares, Player } from "./types";
import * as S from "./styles";

function App() {
  const [squares, setSquares] = useState<Squares>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player>(null);

  const checkWinner = (squares: Squares): Player => {
    const lines = [
      // rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      // columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      // diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleExpire = useCallback(() => {
    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    resetTimer();
  }, []);

  const { timeLeft, reset: resetTimer } = useTimer(10, handleExpire);

  const handleClick = (i: number) => {
    if (squares[i] || winner) return;

    const nextSquares = [...squares];
    nextSquares[i] = currentPlayer;
    setSquares(nextSquares);

    const gameWinner = checkWinner(nextSquares);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      resetTimer();
    }
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer("X");
    resetTimer();
  };

  return (
    <>
      <S.Container>
        <S.GameTitle>Tic Tac Toe</S.GameTitle>
        <Timer timeLeft={timeLeft} />
        <S.PlayerBar>Current Player: {currentPlayer}</S.PlayerBar>
        <Board squares={squares} onClick={handleClick} />
        {winner && <S.WinnerMessage>Winner: {winner}</S.WinnerMessage>}
        <S.RestartButton onClick={handleRestart}>Restart Game</S.RestartButton>
      </S.Container>
    </>
  );
}

export default App;
