import React, { useState, useCallback, useEffect } from "react";
import Timer from "./components/timer";
import Board from "./components/board";
import { useTimer } from "./components/timer/hooks/useTimer";
import { Squares, Player, GameWinner, WinningLine } from "./types";
import * as S from "./styles";

function App() {
  const [squares, setSquares] = useState<Squares>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player>(null);
  const [winningLine, setWinningLine] = useState<WinningLine>(null);
  const [isDraw, setIsDraw] = useState(false);

  const checkWinner = (squares: Squares): GameWinner => {
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
    ] as const;

    for (const [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], winningLine: [a, b, c] };
      }
    }
    return { winner: null, winningLine: null };
  };

  const checkDraw = (squares: Squares): boolean => {
    return squares.every((square) => square !== null);
  };

  const handleExpire = useCallback(() => {
    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    resetTimer();
  }, []);

  const {
    timeLeft,
    reset: resetTimer,
    stop: stopTimer,
  } = useTimer(10, handleExpire);

  // Stop timer when game ends
  useEffect(() => {
    if (winner || isDraw) {
      stopTimer();
    }
  }, [winner, isDraw, stopTimer]);

  const handleClick = (i: number) => {
    if (squares[i] || winner || isDraw) return;

    const nextSquares = [...squares];
    nextSquares[i] = currentPlayer;
    setSquares(nextSquares);

    const gameResult = checkWinner(nextSquares);
    if (gameResult.winner) {
      setWinner(gameResult.winner);
      setWinningLine(gameResult.winningLine);
    } else if (checkDraw(nextSquares)) {
      setIsDraw(true);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      resetTimer();
    }
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setWinningLine(null);
    setIsDraw(false);
    setCurrentPlayer("X");
    resetTimer();
  };

  return (
    <>
      <S.Container>
        <S.GameTitle>Tic Tac Toe</S.GameTitle>
        <Timer timeLeft={timeLeft} />
        {!winner && !isDraw && (
          <S.PlayerBar>Current Player: {currentPlayer}</S.PlayerBar>
        )}
        {winner && (
          <S.WinnerMessage>Game over! Player {winner} wins</S.WinnerMessage>
        )}
        {isDraw && !winner && (
          <S.WinnerMessage>Game over! It's a draw!</S.WinnerMessage>
        )}
        <Board
          squares={squares}
          onClick={handleClick}
          winningLine={winningLine}
        />
        <S.RestartButton onClick={handleRestart}>Restart Game</S.RestartButton>
      </S.Container>
    </>
  );
}

export default App;
