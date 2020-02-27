import boardTile from 'boardTile';

const GameState = (randomInteger: (_: number) => number) =>  {
  const gameState: { board: boardTile[] } = {
    board: [],
  };

  for (let i = 0; i < 100; i++) {
    gameState.board.push({ soilFertilized: true, entity: null })
  }

  return gameState
};

export default GameState;
