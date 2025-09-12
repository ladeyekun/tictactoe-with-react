import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
`;

export const GameTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const PlayerBar = styled.div`
  font-size: 18px;
`;

export const WinnerMessage = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const RestartButton = styled.button`
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
`;
