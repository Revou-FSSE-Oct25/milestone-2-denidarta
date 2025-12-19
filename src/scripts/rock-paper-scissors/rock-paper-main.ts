import { getComputerChoice, determineWinner, Choice } from './rock-paper-logic';
import { updateResult, updateHistory } from './rock-paper-dom';

const buttons = document.querySelectorAll('.rps-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.getAttribute('data-choice') as Choice;
        if (!playerChoice) return;

        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);

        updateResult(result, playerChoice, computerChoice);
        updateHistory(result, playerChoice, computerChoice);
    });
});
