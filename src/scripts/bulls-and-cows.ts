import { secretNumber, guessChecker, validateInput } from './game-logic';
import {
    limitInputLength,
    updateAttemptsDisplay,
    addResultToHistory,
    clearResultHistory,
    showGameMessage,
    hideGameMessage,
    enableInput,
    disableInput,
    showError,
    hideError,
    getPlayerInput,
    getSubmitButton,
    getRestartButton
} from './dom-utils';

let secretNum: number[] = [];
let playerAttempts: number = 11;
let gameActive: boolean = true;

const gameStart = (): void => {
    secretNum = secretNumber();
    playerAttempts = 11;
    const playerInput = getPlayerInput();
    if (playerInput) {
        limitInputLength(playerInput, 4);
    }
    gameActive = true;

    updateAttemptsDisplay(playerAttempts);
    clearResultHistory();
    hideGameMessage();
    enableInput();
    console.log('🎯 Secret Number:', secretNum.join(''));
};

const handleGuessSubmit = (): void => {
    if (!gameActive) return;

    const playerInput = getPlayerInput();
    if (!playerInput) return;

    const userInput = playerInput.value;

    const validation = validateInput(userInput);
    if (!validation.isValid) {
        showError(validation.error);
        return;
    }

    hideError();

    const result = guessChecker(validation.digits, secretNum);

    playerAttempts--;
    updateAttemptsDisplay(playerAttempts);

    addResultToHistory(userInput, result.message);

    playerInput.value = '';
    playerInput.focus();

    if (result.isWin) {
        gameActive = false;
        showGameMessage(`🎉 Congratulations! You guessed ${secretNum.join('')} correctly!`, true);
        disableInput();
    } else if (playerAttempts === 0) {
        gameActive = false;
        showGameMessage(`😢 Game Over! The secret number was ${secretNum.join('')}`, false);
        disableInput();
    }
};

const initGame = (): void => {
    const submitBtn = getSubmitButton();
    const restartBtn = getRestartButton();
    const playerInput = getPlayerInput();

    if (submitBtn) {
        submitBtn.addEventListener('click', handleGuessSubmit);
    }

    if (restartBtn) {
        restartBtn.addEventListener('click', gameStart);
    }

    if (playerInput) {
        playerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleGuessSubmit();
            }
        });

        playerInput.addEventListener('input', hideError);
    }

    gameStart();
};

document.addEventListener('DOMContentLoaded', initGame);

export { secretNumber, guessChecker, validateInput, gameStart };
