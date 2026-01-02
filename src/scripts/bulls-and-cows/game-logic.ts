export interface GuessResult {
  bulls: number;
  cows: number;
  message: string;
  isWin: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  error: string;
  digits: number[];
}

export const secretNumber = (): number[] => {
  const digits: number[] = [];
  while (digits.length < 4) {
    const randomDigit = Math.floor(Math.random() * 9) + 1;
    if (!digits.includes(randomDigit)) {
      digits.push(randomDigit);
    }
  }
  return digits;
};

export const guessChecker = (
  userInput: number[],
  secretNumber: number[]
): GuessResult => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === secretNumber[i]) {
      bulls++;
    } else if (secretNumber.includes(userInput[i])) {
      cows++;
    }
  }

  const isWin = bulls === 4;
  const message = `${bulls} BULL${bulls !== 1 ? "S" : ""} ${cows} COW${cows !== 1 ? "S" : ""}`;
  return { bulls, cows, message, isWin };
};

export const validateInput = (input: string): ValidationResult => {
  const cleanupInput = input.trim();
  const digits = cleanupInput.split("").map(Number);

  if (digits.includes(0)) {
    return {
      isValid: false,
      error: "Zero is not allowed. Use digits 1-9 only",
      digits: [],
    };
  }

  const uniqueDigits = new Set(digits);
  if (uniqueDigits.size !== 4) {
    return { isValid: false, error: "All 4 digits must be unique", digits: [] };
  }

  return { isValid: true, error: "", digits };
};
