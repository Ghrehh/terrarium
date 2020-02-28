interface entity {
  name: string;
  tick: () => void;
}

interface BoardTile {
  soilFertilized: boolean;
  entity: { name: string } | null;
}

export default BoardTile;
