// Мат. операторы

let counter = 0;

// counter = counter + 1;

// counter += 1;

// Инкремент

// Если сразу же хотим использовать обновленный результат, то используем префиксную форму
let a = ++counter;
console.log(a);

// Если переменную нужно увеличить и при этом получить значение до увеличения - используем постфиксную форму
let b = counter++;
console.log(b);

// Декремент

a = --a;

b = b--;

// Конкатенация - сложение двух строк

let sumString = "string" + 42;

console.log(sumString);

let stringSum = 42 + "3";

console.log(stringSum);

console.log(2 + 6 + "1");

console.log(2 + 6 + +"1");

console.log(6 - "3"); // 3

console.log(6 - "2r"); // NaN - not a number;

console.log(2 / 0); // Infinity

console.log(isNaN(6 - "3"));

console.log(isNaN(6 - "2r"));

console.log(isFinite(2 / 0));

// Приведение к числу, унарный +

console.log(+true); // 1
console.log(+""); // 0

let x = "4";
console.log(+x); // 4
console.log(Number(x)); // 4

let y = -2;

console.log(+y); // -2

// умножение
let multiply = 4 * 2;
console.log(multiply);

let tripleHello = "Hello" * 3; // NaN
// .repeat()

console.log(tripleHello);

// целочисленное деление
let dem = "4" / 2; // 2

console.log(dem);

// Взятие остатка от деления
console.log(5 % 3);

// Возведение в степерь **

console.log(2 ** 3); // 8 (2 * 2 * 2 * 2)

// взятие корня
console.log(8 ** (1 / 3)); // 2

// возведение в степень 1/2 = взятие квадратного корня
console.log(64 ** (1 / 2)); // 8

// возведение в степерь 1/3 = взятие кубического корня

console.log(64 ** (1 / 3)); // 4

// String

const single = '"temp" \' \\';
console.log(single);

const double = "Sock's";

// узнать длину
console.log(double.length);

console.log(double + "\t\u{1F38B}");

const backticks = `backticks
    может занимать
    больше
    одной
    строки
    и вычисля происвольное выражение
    sum: ${counter}
`;

console.log(backticks);

// const unexpectedToken = "Users
// Vlad" // Error: Unexted token ILLEGAL

// \n - перенос строки
// \t - табуляция
// ...

// Доступ к символам

const string = "Hello user!";

// Первый символ
console.log(string[0]);

// Последний символ
console.log(string.charAt(string.length - 1));

let excMarkCounter = 0;

for (let char of string) {
  console.log(char);
  if (char === "!") {
    console.log(++excMarkCounter);
  }
}

let str = "User";

str[3] = "d"; // ошибк

str = str.slice(0, 3) + "d";

str = str.toUpperCase();
console.log(str); // USED

str = str.slice(0, 3) + "r";

str = str.toLowerCase();
console.log(str); // user

// Вернуть индекс начала подстроки
console.log(string.indexOf(str)); // 6

// Второй аргумент, говорит с какой позиции начинать поиск
console.log(string.indexOf(str, 4));

// Как indexOf, только поиск идет с конца строки
console.log(string.lastIndexOf(str));

// Проверка на наличие подстроки (возвращает Boolean)
// Второй аргумент будет так же обозначать с какого индекса начинать поиск
if (string.includes("Hello") && excMarkCounter >= 1) {
  console.log(string);
} else {
  сonsole.log("Не хватает восклицательных знаков");
}

// Подобные методы, дл проверки начинается ли "с" или заканчивается "на"

const year = "2022";
const year2 = "1999";

// year - true
// year2 - false
console.log(year.startsWith("2"));

// year - true
// year2 - false
console.log(year.endsWith("22"));

const splitYear = year.split("");

console.log(splitYear);

const splitedString = string.split(" ");

console.log(splitedString);

// сравнение строк
console.log("a" > "A"); // true
console.log("a".codePointAt(0)); // 97 - код буквы "a"
console.log(String.fromCodePoint(97)); // a -  получили символ по коду.

// Повторение строки n раз
console.log("a".repeat(3));

// Убрать лишние пробелы вначале и в конце строки
console.log("  Москва ".trim());
