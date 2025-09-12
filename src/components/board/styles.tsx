import styled from "styled-components";

export const BoardContainer = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;
