sequenceDiagram
    autonumber

    participant App as Game App
    participant Game as gameStart()
    participant Generator as secretNumber()
    participant UI as User Interface
    participant Listener as Input Event Listener
    participant Checker as guessChecker()

    %% Game initialization
    App->>Game: Application starts
    Game->>Generator: generate secret number
    Generator-->>Game: secretNumber (4 unique digits, no zero)
    Game->>Game: set playerAttempts = 11

    %% User interaction loop
    UI->>Listener: user submits input
    Listener->>Checker: send userInput

    %% Guess evaluation
    Checker->>Checker: compare userInput vs secretNumber
    Checker-->>Listener: return result string\n(e.g. "2 BULL 1 COW")
    Checker->>Game: decrement playerAttempts by 1

    %% Win condition
    alt 4 BULL and 4 COW
        Checker-->>UI: Win message
        Game->>UI: disable further input
    else attempts > 0
        UI->>Listener: allow next input
    else attempts == 0
        alt last guess is 4 BULL and 4 COW
            Checker-->>UI: Win message
        else
            Checker-->>UI: Lose message
        end
        Game->>UI: disable further input
    end