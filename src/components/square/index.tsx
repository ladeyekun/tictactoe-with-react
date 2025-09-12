import { SquareButtonProps } from "./types";
import * as S from "./styles";

const Square = ({ value, onClick }: SquareButtonProps) => {
  return (
    <S.SquareButton onClick={onClick} disabled={!!value}>
      {value}
    </S.SquareButton>
  );
};

export default Square;
