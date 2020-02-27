interface entity {
  name: string,
  tick: () => void
}

interface boardTile {
  soilFertilized: boolean;
  entity: { name: string } | null;
}

export default boardTile;
