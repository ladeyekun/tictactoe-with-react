import { Squares } from "../../types";

export interface BoardProps {
    squares: Squares;
    onClick: (i: number) => void;
}