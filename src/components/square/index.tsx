import { SquareButtonProps } from "./types";

const Square = ({ value, onClick }: SquareButtonProps) => {
  return (
    <button onClick={onClick} disabled={!!value}>
      {value}
    </button>
  );
};

export default Square;
