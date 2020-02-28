import boardTile from "boardTile";

interface GameStateInterface {
  board: boardTile[][];
  log: string[];
  tick: () => void;
  boardWidth: number;
  boardHeight: number;
}

const GameState = (
  randomInteger: (_: number) => number
): GameStateInterface => {
  const gameState: GameStateInterface = {
    board: [],
    log: [],
    boardWidth: 30,
    boardHeight: 30,
    tick() {}
  };

  for (let x = 0; x < gameState.boardHeight; x++) {
    gameState.board[x] = [];
    for (let y = 0; y < gameState.boardWidth; y++) {
      gameState.board[x][y] = { soilFertilized: true, entity: null };
    }
  }

  return gameState;
};

export default GameState;
