import Plant from "entities/Plant";
import boardTile from "boardTile";
import GameState from "GameState";

const randomInteger = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max + 1));
};

const gameState = GameState(randomInteger);

const p = Plant();

gameState.board[0][0].entity = p;

const symbolForTile = (tile: boardTile) => {
  if (tile.entity === null && !tile.soilFertilized) return "■";
  if (tile.entity === null) return "~";
  if (tile.entity.name === "Plant") return "Ï";

  return "x";
};

setInterval(() => {
  console.log("\x1Bc");
  let finalOutput = "";
  for (let x = 0; x < gameState.boardHeight; x++) {
    for (let y = 0; y < gameState.boardWidth; y++) {
      finalOutput += symbolForTile(gameState.board[x][y]);
    }
    finalOutput += "\n";
  }

  console.log(finalOutput);
}, 1000);
