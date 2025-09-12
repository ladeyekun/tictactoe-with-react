import styled from "styled-components";
import { SquareButtonStyledProps } from "./types";

export const SquareButton = styled.button<SquareButtonStyledProps>`
  width: 100px;
  height: 100px;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
`;
