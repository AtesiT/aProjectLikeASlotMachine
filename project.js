// 1. Внести сумму денег
// 2. Количество линий в игровом автомате для ставки 
// 3. Сумма ставки
// 4. Крутить игровой автомат
// 5. Проверить выиграл ли деньги пользователь
// 6. Отдать выигрыш или забрать ставку
// 7. Поиграть снова? (или остался без денег)


const prompt = require('prompt-sync')();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8,
}

const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
}

const deposit = () => {
    while (true) {
        const depositAmount = prompt('Сколько вы возьмёте денег в игру? ')
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log('Вы ввели неправильную сумму денег или ошиблись в написании')
        } else {
            return numberDepositAmount;
        }
    }
};

const getNumbersOfLines = () => {
    while (true) {
        const lines = prompt('На сколько линий ставите (1-3)? ')
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log('Вы ввели неправильное число линий')
        } else {
            return numberOfLines;
        }
    }
}

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt('Какую ставку ставите на одну из линий? ')
        const numberBet = parseFloat(bet);

        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log('Вы ввели неправильную ставку')
        } else {
            return numberBet;
        }
    }
}

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [[],[],[]];
    for (let i = 0; i < COLS; i++) {
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
}


const reels = spin();
let balance = deposit();
const numberOfLines = getNumbersOfLines();
const bet = getBet(balance, numberOfLines);

