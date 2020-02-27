import boardTile from 'boardTile';

const GameState = (randomInteger: (_: number) => number) =>  {

  const gameState: {
    board: boardTile[][],
    log: string[],
    tick: () => void,
    boardWidth: number,
    boardHeight: number
  } = {
    board: [],
    log: [],
    boardWidth: 30,
    boardHeight: 30,
    tick() {
      this.board.map(({ soilFertilized, entity }: boardTile) => {
      });
    }
  };

  for (let x = 0; x < gameState.boardHeight; x++) {
    gameState.board[x] = [];
    for (let y = 0; y < gameState.boardWidth; y++) {
      gameState.board[x][y] = { soilFertilized: true, entity: null }
    }
  }

  return gameState
};

export default GameState;
