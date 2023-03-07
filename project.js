// 1. Внести сумму денег
// 2. Количество линий в игровом автомате для ставки 
// 3. Сумма ставки
// 4. Крутить игровой автомат
// 5. Проверить выиграл ли деньги пользователь
// 6. Отдать выигрыш или забрать ставку
// 7. Поиграть снова? (или остался без денег)


const prompt = require('prompt-sync')();

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

const getBet = (balance) => {
    while (true) {
        const bet = prompt('Какую ставку ставите? ')
        const numberBet = parseFloat(bet);

        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance) {
            console.log('Вы ввели неправильную ставку')
        } else {
            return numberBet;
        }
    }
}

let balance = deposit();
const numberOfLines = getNumbersOfLines();
const bet = getBet(balance);

