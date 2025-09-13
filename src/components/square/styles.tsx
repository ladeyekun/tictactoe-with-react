import styled from "styled-components";
import { SquareButtonStyledProps } from "./types";

export const SquareButton = styled.button<SquareButtonStyledProps>`
  width: 100px;
  height: 100px;
  font-size: 40px;
  font-weight: 700;
  background-color: #313131;
  border: 1px solid #000;
  cursor: pointer;
  font-family: "Pacifico", sans-serif;
  color: ${(props) => (props.$isWinning ? "#22c55e" : "#fff")};
  transition: background-color 0.3s ease;
`;
