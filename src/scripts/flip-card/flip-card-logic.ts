export interface Card {
  id: number;
  imagePath: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export let gameLevel: number = 1;
export const maxLevel: number = 12;
export let deck: Card[] = [];
export let firstCardIndex: number | null = null;
export let secondCardIndex: number | null = null;
export let isProcessing: boolean = false;

export function setGameLevel(level: number) {
  gameLevel = level;
}

export function resetGameState(level: number): Card[] {
  gameLevel = level;
  isProcessing = false;
  firstCardIndex = null;
  secondCardIndex = null;
  const pairsCount = gameLevel + 1;
  deck = generateCardSet(pairsCount);
  return deck;
}

function generateCardSet(pairsCount: number): Card[] {
  const cards: Card[] = [];

  for (let i = 1; i <= pairsCount; i++) {
    const assetIndex = ((i - 1) % 12) + 1;
    const imageId = assetIndex.toString().padStart(2, "0");
    const imagePath = `/assets/card-game/card_${imageId}.png`;

    // Add two cards for each pair
    for (let j = 0; j < 2; j++) {
      cards.push({
        id: i,
        imagePath: imagePath,
        isFlipped: false,
        isMatched: false,
      });
    }
  }

  // Shuffle the deck
  return cards.sort(() => Math.random() - 0.5);
}

export function flipCard(index: number): boolean {
  if (isProcessing) return false;
  if (deck[index].isFlipped || deck[index].isMatched) return false;
  if (index === firstCardIndex) return false;

  deck[index].isFlipped = true;

  if (firstCardIndex === null) {
    firstCardIndex = index;
    return true;
  } else {
    secondCardIndex = index;
    isProcessing = true;
    return true;
  }
}

export function checkMatch(onMatch: () => void, onNoMatch: () => void): void {
  if (firstCardIndex === null || secondCardIndex === null) return;

  const card1 = deck[firstCardIndex];
  const card2 = deck[secondCardIndex];

  if (card1.id === card2.id) {
    // Match!
    card1.isMatched = true;
    card2.isMatched = true;
    firstCardIndex = null;
    secondCardIndex = null;
    isProcessing = false;
    onMatch();
  } else {
    // Not a match
    card1.isFlipped = false;
    card2.isFlipped = false;
    firstCardIndex = null;
    secondCardIndex = null;
    isProcessing = false;
    onNoMatch();
  }
}

export function isWin(): boolean {
  return deck.every((card) => card.isMatched);
}
