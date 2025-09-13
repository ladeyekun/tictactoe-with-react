import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 40px;

  height: 100svh;
  background: #fff url(https://ladeyekun.github.io/tictactoe/assets/img/bg.jpg)
    center center / cover no-repeat;

  font-family: "Lilita One", "Yatra One", "Pacifico", sans-serif;
  background-color: #222;
  color: #f4f5f7;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: "ROND" 0;
`;

export const GameTitle = styled.h1`
  font-size: 48px;
  font-weight: 500;
`;

export const PlayerBar = styled.div`
  font-size: 20px;
`;

export const WinnerMessage = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const RestartButton = styled.button`
  padding: 0 20px;
  height: 46px;
  background-color: #6f41cf;
  color: #f4f5f7;
  cursor: pointer;
  border: 1px solid #6f41cf;
  font-size: 20px;
  font-weight: 400;
  border-radius: 5px;
`;
