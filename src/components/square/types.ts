import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { Player } from "../../types";

export type SquareButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren <{
    value: Player;
    onClick: () => void;
}>;

export  interface SquareButtonStyledProps {
    $value?: Player;
    $onClick?: () => void;
}