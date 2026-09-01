// Задание 1
let number1 = Number(prompt("Задание 1: Введите число:"));

if (number1 > 10) {
    console.log("Число больше 10");
} else {
    console.log("Число меньше или равно 10");
}


// Задание 2
let answer = confirm("Задание 2: Вы хотите удалить файл?");

if (answer) {
    console.log("Файл удален");
} else {
    console.log("Удаление отменено");
}


// Задание 3
let age = Number(prompt("Задание 3: Введите ваш возраст:"));

if (age < 18) {
    console.log("Вы еще подросток");
} else if (age <= 30) {
    console.log("Вы молодой взрослый");
} else {
    console.log("Вы взрослый");
}


// Задание 4
let number2 = Number(prompt("Задание 4: Введите число:"));

let evenOrOdd = number2 % 2 === 0
    ? "Четное число"
    : "Нечетное число";

console.log(evenOrOdd);


// Задание 5
let day = Number(prompt("Задание 5: Введите число от 1 до 7:"));

switch (day) {
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
        break;
    case 7:
        console.log("Воскресенье");
        break;
    default:
        console.log("Некорректное значение");
}


// Задание 6
let first = Number(prompt("Задание 6: Введите первое число:"));
let second = Number(prompt("Введите второе число:"));

if (first === second) {
    console.log("Числа равны");
} else {
    let result = first > second
        ? "Первое число больше"
        : "Второе число больше";

    console.log(result);
}