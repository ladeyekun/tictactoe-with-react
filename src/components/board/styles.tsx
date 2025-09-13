import styled from "styled-components";

export const BoardContainer = styled.div`
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border: 1px solid rgb(0 0 0 /15%);
`;
