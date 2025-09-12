import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import Square from "../square";
import { Squares } from "../../types";

export type BoardProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren <{
    squares: Squares;
    onClick: (i: number) => void;
}>;

export  interface BoardStyledProps {
    $squares?: Squares;
    $onClick?: (i: number) => void;
}