export type Player = 'X' | 'O' | null;

export type Squares = Player[];

export type WinningLine = [number, number, number] | null;

export interface GameWinner {
  winner: Player;
  winningLine: WinningLine;
}