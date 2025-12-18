
interface Card {
    id: number;
    isFlipped: boolean;
}

/**
 * @param uniqueSet - Jumlah kartu unik yang mau dibuat (misal 8)
 * @param multiplier - Berapa kali kartu itu diduplikasi (misal 2 untuk sepasang)
 */

function generateCardSet(uniqueSet: number, multiplier: number): Card[] {
    const cardSet: Card[] = [];

    for (let i = 1; i <= uniqueSet; i++) {
        for (let j = 0; j < multiplier; j++) {
            cardSet.push({ id: i, isFlipped: false });
        }
    }
    return cardSet.sort(() => Math.random() - 0.5);
}

let deck: Card[] = generateCardSet(8, 2);


function flipCard(index: number): void {
    const selectedCard = deck[index];

    if (!selectedCard.isFlipped) {
        selectedCard.isFlipped = true;
        console.log(`Kartu nomor ${selectedCard.id} berhasil dibalik!`);
    }
}
flipCard(1)