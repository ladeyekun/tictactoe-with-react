import { TimerProps } from "./types";
import * as S from "./styles";

const Timer = ({ timeLeft }: TimerProps) => {
  return <S.TimerContainer>Time left: {timeLeft}s</S.TimerContainer>;
};

export default Timer;
