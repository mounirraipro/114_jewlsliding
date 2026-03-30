export interface GameSet {
  index: number;
  label: string;
  puzzleStart: number;
  puzzleCount: number;
  playHref: string;
}

export interface GameCollection {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  badge: string;
  color: string;
  gridLabel: string;
  gridCols: number;
  gridRows: number;
  puzzleCount: number;
  difficulty: 'Warm-Up' | 'Classic' | 'Rush';
  description: string;
  longDescription: string;
  sets: GameSet[];
}

function createSets(collectionId: number, puzzleCount: number): GameSet[] {
  const setSize = 4;
  const sets: GameSet[] = [];

  for (let puzzleStart = 0; puzzleStart < puzzleCount; puzzleStart += setSize) {
    const index = sets.length + 1;
    const currentSetSize = Math.min(setSize, puzzleCount - puzzleStart);
    sets.push({
      index,
      label: `Wave ${index}`,
      puzzleStart,
      puzzleCount: currentSetSize,
      playHref: `/play?collection=${collectionId}&puzzle=${puzzleStart}`,
    });
  }

  return sets;
}

function buildCollection(id: number, gridCols: number, gridRows: number, puzzleCount: number): GameCollection {
  const isWarmUp = id <= 7;
  const isClassic = id >= 8 && id <= 13;
  const difficulty: GameCollection['difficulty'] = isWarmUp ? 'Warm-Up' : isClassic ? 'Classic' : 'Rush';
  const badge = `Track ${String(id).padStart(2, '0')}`;
  const gridLabel = `${gridCols}x${gridRows}`;

  const descriptions = {
    'Warm-Up': `A compact ${gridLabel} track that teaches you how to slide single gems into clean openings before the lower rows speed up.`,
    Classic: `A steadier ${gridLabel} track with more crowded arrivals, longer clears, and better chances to set up full horizontal bands.`,
    Rush: `A pressure-heavy ${gridLabel} track built for players who can read the board quickly and rescue tight stacks under faster waves.`,
  } as const;

  const longDescriptions = {
    'Warm-Up': `Track ${String(id).padStart(2, '0')} is a good place to settle into JewelSliding. The incoming shapes stay readable, the empty gaps are easier to spot, and you have enough breathing room to learn how moving one block down can finish an entire row. It rewards patience more than panic, which makes it ideal for short sessions or a first visit to the game.`,
    Classic: `Track ${String(id).padStart(2, '0')} gives JewelSliding its signature rhythm. Rows build up faster, larger gem groups start competing for the same openings, and each move matters more because the board has less recovery space. These tracks feel best when you are reading two or three moves ahead and preserving clean lanes for the next arrival.`,
    Rush: `Track ${String(id).padStart(2, '0')} is the closest thing this site has to endurance play. You still clear solid horizontal stripes the same way, but the pressure rises earlier and mistakes linger longer. If you enjoy survival scoring, fast scans, and late saves, this track is where JewelSliding feels most intense.`,
  } as const;

  const color = isWarmUp ? '#0f766e' : isClassic ? '#d946ef' : '#e11d48';

  return {
    id,
    slug: `track-${String(id).padStart(2, '0')}`,
    name: badge,
    shortName: `T${String(id).padStart(2, '0')}`,
    badge,
    color,
    gridLabel,
    gridCols,
    gridRows,
    puzzleCount,
    difficulty,
    description: descriptions[difficulty],
    longDescription: longDescriptions[difficulty],
    sets: createSets(id, puzzleCount),
  };
}

export const gameCollections: GameCollection[] = [
  ...Array.from({ length: 7 }, (_, index) => buildCollection(index + 1, 3, 3, 20)),
  ...Array.from({ length: 6 }, (_, index) => buildCollection(index + 8, 6, 6, 20)),
  ...Array.from({ length: 5 }, (_, index) => buildCollection(index + 14, 9, 9, 20)),
  buildCollection(19, 9, 9, 7),
];

export const totalPuzzleCount = gameCollections.reduce((sum, collection) => sum + collection.puzzleCount, 0);

export const categories = gameCollections;

export function getCollectionBySlug(slug: string): GameCollection | undefined {
  return gameCollections.find((collection) => collection.slug === slug);
}

export function getCollectionById(id: number): GameCollection | undefined {
  return gameCollections.find((collection) => collection.id === id);
}

export function getPlayHref(collectionId: number, puzzle = 0): string {
  return `/play?collection=${collectionId}&puzzle=${puzzle}`;
}
