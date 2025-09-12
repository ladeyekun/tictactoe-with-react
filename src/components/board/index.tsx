import { BoardProps } from "./types";
import Square from "../square";
import * as S from "./styles";

const Board = ({ squares, onClick }: BoardProps) => {
  return (
    <S.BoardContainer>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </S.BoardContainer>
  );
};

export default Board;
