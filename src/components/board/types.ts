import { Squares, WinningLine } from "../../types";

export interface BoardProps {
    squares: Squares;
    onClick: (i: number) => void;
    winningLine?: WinningLine;
}