import { Choice, Result } from './rock-paper-logic';

const resultTitle = document.getElementById('result-title');
const resultMessage = document.getElementById('result-message');
const historyList = document.getElementById('history-list');

export function updateResult(result: Result, playerChoice: Choice, computerChoice: Choice) {
    if (!resultTitle || !resultMessage) return;

    let titleText = '';
    let messageText = `You chose ${playerChoice.toUpperCase()}, Computer chose ${computerChoice.toUpperCase()}`;
    let titleColor = '';

    switch (result) {
        case 'win':
            titleText = 'YOU WIN! 🎉';
            titleColor = '#4ADE80'; // Green
            break;
        case 'lose':
            titleText = 'YOU LOSE 😢';
            titleColor = '#F87171'; // Red
            break;
        case 'draw':
            titleText = 'IT\'S A DRAW 🤝';
            titleColor = '#FBBF24'; // Yellow
            break;
    }

    resultTitle.textContent = titleText;
    resultTitle.style.color = titleColor;
    resultMessage.textContent = messageText;
}

export function updateHistory(result: Result, playerChoice: Choice, computerChoice: Choice) {
    if (!historyList) return;

    const li = document.createElement('li');
    li.className = 'history-item';

    const iconMap = { rock: '👊', paper: '🤚', scissors: '✌️' };
    const resultIcon = result === 'win' ? '🏆' : result === 'lose' ? '❌' : '🤝';

    li.innerHTML = `
        <div class="flex items-center gap-2">
            <span class="text-xl">${resultIcon}</span>
            <span class="font-bold text-${result === 'win' ? 'green' : result === 'lose' ? 'red' : 'yellow'}-600">${result.toUpperCase()}</span>
        </div>
        <div class="text-sm text-gray-600 font-medium">
            ${iconMap[playerChoice]} vs ${iconMap[computerChoice]}
        </div>
    `;

    historyList.prepend(li); // Newest first

    // Limit history to 10 items
    if (historyList.children.length > 10) {
        historyList.lastElementChild?.remove();
    }
}
