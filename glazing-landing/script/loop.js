/* 
  Цикл - блок команд, который может повторно выполняться 
  пока определенное условие не будет выполнено. 
*/

let counter = 0;

while (counter < 10) {
  ++counter;
  console.log(counter);
}

let i = 9;

do {
  console.log("i: ", i);
  i--;
} while (i > 3);

const categories = "Бакалея, концтовары, бытовая химия, транспорт";

const splitedString = categories.split(", ");

console.log(splitedString);

// Выход из таких ситуаций, как раз таки операторы цикла...
// console.log(splitedString[0]);
// console.log(splitedString[1]);
// console.log(splitedString[2]);
// console.log(splitedString[3]);

let index = 0;

/* 
  пока индекс текущего элемента меньше длины массива splitedString 
  выводим в консоль элемент с текущим индексом 
*/
// while (index <= splitedString.length - 1) {
//   console.log(splitedString[index]);
//   index++;
// }

// for

// for (let i = 0; i < splitedString.length; i++) {
//   console.log(splitedString[i]);
// }

// for (; index < splitedString.length; ) {
//   console.log(`Current value: ${splitedString[index]}`);
//   console.log(`Current index: ${index++}`);
// }

// for (;;) {

// }

for (let i = 0; i < splitedString.length; i++) {
  console.log(splitedString[i]);
  if (splitedString[i] === "концтовары") break;
}

console.log("\n");
for (let i = 0; i < splitedString.length; i++) {
  if (splitedString[i] === "концтовары") continue;
  console.log(splitedString[i]);
}

// for..in;

let colors = {
  orange: "#a14b00",
  // white: "#ffffff",
  darkBlue: "#3b3a63",
  backgroundColor: "#f2f2f2",
  baseText: "#2f2f51",
};

let isHaveWhite = false;

// Проходимся по всем ключам объекта colors

console.log("\n");
for (let color in colors) {
  console.log(`${color}=${colors[color]}`);
}

console.log("\n");
for (let color in colors) {
  if (color === "white") {
    console.log(`${color}=${colors[color]}`);
    break;
  } else {
    console.log("Белый цвет не добавлен в объект цветов!");
  }
}

// for..of - работает с итерируемыми объектами

// Object.entries(colors) = [[key, value], [], ...]
console.log("\n");
for ([key, value] of Object.entries(colors)) {
  console.log(`${key}=${value}`);
}

// Пройтись по всем буквам в слове
console.log("\n");
for (let char of splitedString[0]) {
  console.log(char);
}

// Вернет только индексы всех букв (0, 1, 2, ...)
console.log("\n");
for (let char in splitedString[0]) {
  console.log(char);
}

// -1 - 0, 0 - поле пустое, 1 - X

// let map = [
//   [0, 1, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ];

let map = [];

rowsLoop: for (let row = 0; row < 3; row++) {
  map[row] = [];
  for (let column = 0; column < 3; column++) {
    let input = prompt(`Значение для координаты (${row},${column})`, "");

    if (!input) {
      alert("Нужно ввести значение из перечисленных: -1, 0, 1");
      break rowsLoop;
    }

    map[row][column] = input;
  }
}

for (row of map) {
  console.log(row);
}

// for (let row = 0; row < map.length; row++) {
//   for (let column = 0; column < map.length; column++) {}
// }
