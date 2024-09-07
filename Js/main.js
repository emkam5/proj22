'use strict';

// №1

let name = 'Джон';

let admin = name;

alert(admin)

// №2

let ci = prompt('Ваш город?');

let ye = prompt('В каком году основан?')

let na = prompt('Население города')

let x = 2024-ye;

alert (`Городу ${ci} уже целых ${x} лет. Население ${na} человек`)

// №3

let pi = 3.14;

let r = prompt('Введите радиус окружности');

let vich = pi*(r*r);

alert(`Площадь окружности равна ${vich}`)

// №4 

let first = prompt('Введите первое число')
// let firstint = parseInt(first, 10);
let second = prompt('Введите второе число')
// let secondint = parseInt(first, 10);

let firstint = Number(first);
let secondint = Number(second);

let one = firstint+secondint;
let two = first-second;
let three = first*second;
let four = first/second;

alert(`Сумма = ${one} , разность = ${two}, частное = ${four}, произведение = ${three}`);
