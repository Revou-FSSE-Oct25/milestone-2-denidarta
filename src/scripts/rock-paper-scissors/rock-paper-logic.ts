export type Choice = 'rock' | 'paper' | 'scissors';
export type Result = 'win' | 'lose' | 'draw';

export const CHOICES: Choice[] = ['rock', 'paper', 'scissors'];

export function getComputerChoice(): Choice {
    const randomIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomIndex];
}

export function determineWinner(playerChoice: Choice, computerChoice: Choice): Result {
    if (playerChoice === computerChoice) return 'draw';

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    }

    return 'lose';
}
