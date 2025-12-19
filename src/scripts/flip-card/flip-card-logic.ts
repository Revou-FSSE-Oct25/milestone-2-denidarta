// Game State
let gameLevel: number = 1;
const maxLevel: number = 12;

interface Card {
    id: number;
    imagePath: string;
    isFlipped: boolean;
    isMatched: boolean;
}

const CARD_BACK = '/assets/card-game/card_back.png';
let deck: Card[] = [];
let firstCardIndex: number | null = null;
let secondCardIndex: number | null = null;
let isProcessing: boolean = false;

// DOM Elements
const cardGrid = document.querySelector('.card-grid') as HTMLElement;
const levelValue = document.getElementById('game-level') as HTMLElement;


// Initializes a new game level
function initGame(): void {
    isProcessing = false;
    firstCardIndex = null;
    secondCardIndex = null;
    if (levelValue) levelValue.textContent = gameLevel.toString();

    const pairsCount = gameLevel + 1;
    deck = generateCardSet(pairsCount);
    renderBoard();
}


// Generates and shuffles a set of cards
function generateCardSet(pairsCount: number): Card[] {
    const cards: Card[] = [];

    for (let i = 1; i <= pairsCount; i++) {
        const assetIndex = ((i - 1) % 12) + 1;
        const imageId = assetIndex.toString().padStart(2, '0');
        const imagePath = `/assets/card-game/card_${imageId}.png`;

        // Add two cards for each pair
        for (let j = 0; j < 2; j++) {
            cards.push({
                id: i,
                imagePath: imagePath,
                isFlipped: false,
                isMatched: false
            });
        }
    }

    // Shuffle the deck
    return cards.sort(() => Math.random() - 0.5);
}

// Renders the cards to the game board
function renderBoard(): void {
    if (!cardGrid) return;

    cardGrid.innerHTML = '';

    deck.forEach((card, index) => {
        const li = document.createElement('li');
        li.className = 'card';

        // If flipped or matched, show front content
        // If not, show back
        const imageSrc = (card.isFlipped || card.isMatched) ? card.imagePath : CARD_BACK;

        // Add visual style for matched cards
        if (card.isMatched) {
            li.style.opacity = '0.5';
            li.style.cursor = 'default';
        }

        li.innerHTML = `<img src="${imageSrc}" alt="Card">`;

        // Only add click listener if not matched
        if (!card.isMatched) {
            li.addEventListener('click', () => handleCardClick(index));
        }

        cardGrid.appendChild(li);
    });
}

/**
 * Handles card clicking logic
 */
function handleCardClick(index: number): void {
    if (isProcessing) return;
    if (deck[index].isFlipped || deck[index].isMatched) return;
    if (index === firstCardIndex) return;

    // Flip the card
    deck[index].isFlipped = true;
    renderBoard();

    if (firstCardIndex === null) {
        firstCardIndex = index;
    } else {
        secondCardIndex = index;
        isProcessing = true;
        checkMatch();
    }
}

/**
 * Checks if the two flipped cards match
 */
function checkMatch(): void {
    if (firstCardIndex === null || secondCardIndex === null) return;

    const card1 = deck[firstCardIndex];
    const card2 = deck[secondCardIndex];

    if (card1.id === card2.id) {
        // Match!
        setTimeout(() => {
            card1.isMatched = true;
            card2.isMatched = true;
            firstCardIndex = null;
            secondCardIndex = null;
            isProcessing = false;
            renderBoard();
            checkWin();
        }, 500);
    } else {
        // Not a match
        setTimeout(() => {
            card1.isFlipped = false;
            card2.isFlipped = false;
            firstCardIndex = null;
            secondCardIndex = null;
            isProcessing = false;
            renderBoard();
        }, 1000);
    }
}

/**
 * Checks if all pairs have been matched
 */
function checkWin(): void {
    const allMatched = deck.every(card => card.isMatched);
    if (allMatched) {
        setTimeout(() => {
            alert(`Level ${gameLevel} Complete! Next Level >>`);
            nextLevel();
        }, 500);
    }
}

function nextLevel(): void {
    gameLevel++;
    initGame();
}

// Start the game
initGame();
