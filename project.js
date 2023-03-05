// 1. Внести сумму денег
// 2. Количество линий в игровом автомате для ставки 
// 3. Сумма ставки
// 4. Крутить игровой автомат
// 5. Проверить выиграл ли деньги пользователь
// 6. Отдать выигрыш или забрать ставку
// 7. Поиграть снова? (или остался без денег)


const prompt = require('prompt-sync')();

const deposit = () => {
    const deposit = prompt('Сколько вы возьмёте денег в игру? ')
    const numberDepositAmount = parseFloat(depositAmount);

    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log('Вы ввели неправильную сумму денег или ошиблись в написании')
    }
};


deposit();