import * as Logic from "./flip-card-logic";
import * as DOM from "./flip-card-dom-utils";

function initGame(): void {
  const deck = Logic.resetGameState(Logic.gameLevel);
  DOM.updateLevelDisplay(Logic.gameLevel);
  DOM.renderBoard(deck, handleCardClick);
}

function handleCardClick(index: number): void {
  const didFlip = Logic.flipCard(index);
  if (!didFlip) return;

  // Re-render immediately to show the flipped card
  DOM.renderBoard(Logic.deck, handleCardClick);

  if (Logic.secondCardIndex !== null) {
    Logic.checkMatch(
      // On Match
      () => {
        setTimeout(() => {
          DOM.renderBoard(Logic.deck, handleCardClick);
          if (Logic.isWin()) {
            setTimeout(() => {
              alert(`Level ${Logic.gameLevel} Complete! Next Level >>`);
              nextLevel();
            }, 500);
          }
        }, 500);
      },
      // On No Match
      () => {
        setTimeout(() => {
          DOM.renderBoard(Logic.deck, handleCardClick);
        }, 1000);
      }
    );
  }
}

function nextLevel(): void {
  Logic.setGameLevel(Logic.gameLevel + 1);
  initGame();
}

// Start the game when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGame);
} else {
  initGame();
}
