// Калькулятор любви
const maleName = prompt("Введите мужское имя");
const femaleName = prompt("Введите женское имя");
const result = Math.floor(Math.random() * 100);

alert(`${maleName} подходит к ${femaleName} на ${result} процентов!`);


// BMI Калькулятор
const growth = prompt("Введите рост: ");
const weight = prompt("Введите вес: ");
const IBM = weight / ((growth / 100) ** 2);
if (IBM <= 18.5) {
    alert("Недостаточный вес");
} else if (IBM <= 25) {
    alert("Нормально");
} else if (IBM <= 30) {
    alert("У вас излишек веса");
} else if (IBM > 30) {
    alert("Ожирение");
}


// Является ли год високосным?
const leapYear = 2400;
const usuallyYear = 1989;

// Взял другой алгоритм 
// 1. Если год делится на 4 без остатка, перейдите на шаг 2. В противном случае перейдите к выполнению действия 5.
// 2. Если год делится на 100 без остатка, перейдите на шаг 3. В противном случае перейдите к выполнению действия 4.
// 3. Если год делится на 400 без остатка, перейдите на шаг 4. В противном случае перейдите к выполнению действия 5.
// 4. Год високосный (366 дней).
// 5. Год не високосный год (365 дней).
function checkLeapYear(year) {
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    return false;
}

function print(year) {
    if (checkLeapYear(year)) {
        console.log("Високосный год");
    } else {
        console.log("Не является високосным");
    }
}

print(leapYear);
print(usuallyYear);

// Кто оплачивает ужин?
const names = ['Дима', 'Катя', 'Петр', 'Лена'];
const numberPerson = Math.floor(Math.random() * (names.length));
console.log(numberPerson)
console.log(`Оплачивать будет ${names[numberPerson]}`);