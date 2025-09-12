import styled from "styled-components";
import { SquareButtonStyledProps } from "./types";

export const SquareButton = styled.button<SquareButtonStyledProps>`
  width: 40px;
  height: 40px;
  font-size: 24px;
  font-weight: bold;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
`;
