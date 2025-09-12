import { Player } from "../../types";

export interface SquareButtonProps {
    value: Player;
    onClick: () => void;
}

/*
export type SquareButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren <{
    value: Player;
    onClick: () => void;
}>;
*/
export  interface SquareButtonStyledProps {
    $value?: Player;
    $onClick?: () => void;
}
