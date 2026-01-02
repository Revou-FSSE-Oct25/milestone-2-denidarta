import { Card } from "./flip-card-logic";

export const CARD_BACK = "/assets/card-game/card_back.png";
export const cardGrid = document.querySelector(".card-grid") as HTMLElement;
export const levelValue = document.getElementById("game-level") as HTMLElement;

export function updateLevelDisplay(level: number): void {
  if (levelValue) {
    levelValue.textContent = level.toString();
  }
}

export function renderBoard(
  deck: Card[],
  onCardClick: (index: number) => void
): void {
  if (!cardGrid) return;

  cardGrid.innerHTML = "";

  deck.forEach((card, index) => {
    const li = document.createElement("li");
    li.className = "card";

    // If flipped or matched, show front content
    // If not, show back
    const imageSrc =
      card.isFlipped || card.isMatched ? card.imagePath : CARD_BACK;

    // Add visual style for matched cards
    if (card.isMatched) {
      li.style.opacity = "0.5";
      li.style.cursor = "default";
    }

    li.innerHTML = `<img src="${imageSrc}" alt="Card">`;

    // Only add click listener if not matched
    if (!card.isMatched) {
      li.addEventListener("click", () => onCardClick(index));
    }

    cardGrid.appendChild(li);
  });
}
