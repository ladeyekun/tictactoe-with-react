import { SquareButtonProps } from "./types";
import * as S from "./styles";

const Square = ({ value, onClick, isWinning = false }: SquareButtonProps) => {
  return (
    // <button onClick={onClick} disabled={!!value}>
    //   {value}
    // </button>
    <S.SquareButton onClick={onClick} disabled={!!value} $isWinning={isWinning}>
      {value}
    </S.SquareButton>
  );
};

export default Square;
