let gameLevel: number = 1;
let playerLives: number = 10;

interface Card {
    id: number;
    isFlipped: boolean;
}

function generateCardSet(gameLevel: number, multiplier: number): Card[] {
    const cardSet: Card[] = [];

    for (let i = 1; i <= gameLevel; i++) {
        for (let j = 0; j < multiplier; j++) {
            cardSet.push({ id: i, isFlipped: false });
        }
    }
    return cardSet.sort(() => Math.random() - 0.5);
}

let deck: Card[] = generateCardSet(gameLevel, 2);

let firstCard: Card | null = null;
let secondCard: Card | null = null;

function flipFirstCard(index: number): void {
    const selectedCard = deck[index];

    if (selectedCard.isFlipped === false) {
        selectedCard.isFlipped = true;
        firstCard = selectedCard;
    }
}

function winGame(): void {
    const isAllFlipped = deck.every(card => card.isFlipped === true);
    if (isAllFlipped) {
        console.log("🏆 SELAMAT! Kamu menang! Semua pasangan ditemukan.");
    }
}

function checkMatch(): void {
    if (firstCard !== null && secondCard !== null) {
        if (firstCard.id === secondCard.id) {
            console.log("Match!");
            firstCard.isFlipped = true;
            secondCard.isFlipped = true;
            winGame();
        } else {
            console.log("Not a match.");
            firstCard.isFlipped = false;
            secondCard.isFlipped = false;
        }
        firstCard = null;
        secondCard = null;
    }
}

function flipSecondCard(index: number): void {
    const selectedCard = deck[index];

    if (selectedCard.isFlipped === false) {
        selectedCard.isFlipped = true;
        secondCard = selectedCard;
        checkMatch();
    }
}

function nextLevel(): void {
    gameLevel++;
    deck = generateCardSet(gameLevel, 2);
    firstCard = null;
    secondCard = null;
}
