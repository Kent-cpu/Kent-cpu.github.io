const { v4: uuidv4 } = require('uuid');

const chalk = require("chalk");
const log = console.log;

log(
    chalk.red("Строка красного цвета\n") +
    chalk.green("Строка зеленого цвета\n") +
    chalk.blue("Строка синего цвета")
);


console.log(uuidv4());

console.log("Запуск программы");

setTimeout(() => {
    console.log("Функция вызовется через 1 секунду");
}, 1000);

setInterval(() => {
    console.log("Функция будет вызываться через каждуые 2 секунду");
}, 2000);