export const limitInputLength = (input: HTMLInputElement, maxLength: number): void => {
    input.addEventListener('input', () => {
        if (input.value.length > maxLength) {
            input.value = input.value.slice(0, maxLength);
        }
    });
};

export const updateAttemptsDisplay = (attempts: number): void => {
    const attemptsEl = document.getElementById('attempts-count');
    if (attemptsEl) {
        attemptsEl.textContent = String(attempts);
    }
};

export const addResultToHistory = (guess: string, result: string): void => {
    const historyEl = document.getElementById('result-history');
    if (historyEl) {
        const entry = document.createElement('div');
        entry.className = 'history-entry';
        entry.innerHTML = `<span class="guess">${guess}</span> → <span class="result">${result}</span>`;
        historyEl.insertBefore(entry, historyEl.firstChild);
    }
};

export const clearResultHistory = (): void => {
    const historyEl = document.getElementById('result-history');
    if (historyEl) {
        historyEl.innerHTML = '';
    }
};

export const showGameMessage = (message: string, isWin: boolean): void => {
    const messageEl = document.getElementById('game-message');
    if (messageEl) {
        messageEl.textContent = message;
        messageEl.className = `game-message ${isWin ? 'win' : 'lose'}`;
        messageEl.style.display = 'block';
    }
};

export const hideGameMessage = (): void => {
    const messageEl = document.getElementById('game-message');
    if (messageEl) {
        messageEl.style.display = 'none';
    }
};

export const enableInput = (): void => {
    const playerInput = document.getElementById('guess-input') as HTMLInputElement;
    const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;
    if (playerInput) {
        playerInput.disabled = false;
        playerInput.value = '';
        playerInput.focus();
    }
    if (submitBtn) {
        submitBtn.disabled = false;
    }
};

export const disableInput = (): void => {
    const playerInput = document.getElementById('guess-input') as HTMLInputElement;
    const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;
    if (playerInput) {
        playerInput.disabled = true;
    }
    if (submitBtn) {
        submitBtn.disabled = true;
    }
};

export const showError = (message: string): void => {
    const errorEl = document.getElementById('input-error');
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.style.display = 'block';
    }
};

export const hideError = (): void => {
    const errorEl = document.getElementById('input-error');
    if (errorEl) {
        errorEl.style.display = 'none';
    }
};

export const getPlayerInput = (): HTMLInputElement | null => {
    return document.getElementById('guess-input') as HTMLInputElement;
};

export const getSubmitButton = (): HTMLButtonElement | null => {
    return document.getElementById('submit-btn') as HTMLButtonElement;
};

export const getRestartButton = (): HTMLButtonElement | null => {
    return document.getElementById('restart-btn') as HTMLButtonElement;
};
