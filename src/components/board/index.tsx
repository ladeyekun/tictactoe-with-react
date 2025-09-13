import { BoardProps } from "./types";
import Square from "../square";
import * as S from "./styles";

const Board = ({ squares, onClick, winningLine }: BoardProps) => {
  const isWinningSquare = (index: number): boolean => {
    return winningLine ? winningLine.includes(index) : false;
  };

  return (
    <S.BoardContainer>
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          onClick={() => onClick(i)}
          isWinning={isWinningSquare(i)}
        />
      ))}
    </S.BoardContainer>
  );
};

export default Board;
