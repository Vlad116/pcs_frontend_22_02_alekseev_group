// min = 0

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

let numbers = [];

for (let i = 0; i <= 7; i++) {
  //   numbers[i] = getRandomInt(100);
  numbers.push(getRandomInt(100));
}

console.log(numbers);

console.log(numbers.pop());
console.log(numbers.shift());
console.log(numbers.unshift(324));

// Как удалить элемент?
console.log(numbers.length);
delete numbers[1];
// удаляет само значение, но ключ остается
console.log(numbers[1]); // undefined
console.log(numbers.length);

numbers.splice(1, 1);

console.log(numbers);

// Как заменить значение?

numbers.splice(1, 1, "32");

numbers.splice(1, 0, "44", "56");

const sliceExample = numbers.slice(0, 3);
console.log(sliceExample);

// Объединить два массива
const concatExample = numbers.concat(sliceExample, "6554");
console.log(concatExample);

// Перебирающие методы

numbers.forEach((item, index, arr) => {
  console.log(index + ": " + item + " (массив:" + arr + ")");
});

const isOddNumber = (number) => +number % 2 === 0;

const filterOddNumbers = (arr) => {
  return arr.filter((value) => +value % 4 === 0 || +value % 2 === 0);
};

console.log(filterOddNumbers(numbers));

const stringNumbers = [
  "2024",
  "324",
  "432",
  "504",
  "4543",
  "545",
  "545",
  "965",
  "504",
];

console.log(stringNumbers);

// Set
// Фильтрация уникальных элементов
function getUniueValues(arr) {
  return Array.from(new Set(arr));
}

console.log(getUniueValues(stringNumbers));

stringNumbers.forEach((item) => console.log(item[0]));

numbers = stringNumbers.map((value) => +value);

console.log(numbers.every(isOddNumber)); // false; - Проверка для всех элементов
console.log(numbers.some(isOddNumber)); // true; - Если хотя бы один элемент проходит проверку

const users = [
  {
    name: "Andrew",
    lastName: "Gulin",
    age: 34,
  },
  {
    name: "Boris",
    lastName: "Ivanov",
    age: 18,
  },
  {
    name: "Alexey",
    lastName: "Petrov",
    age: 40,
  },
];

console.log(users.length);

const averageAge = users.reduce((acc, item, index, arr) => {
  if (index === arr.length - 1) {
    acc = (acc + item.age) / arr.length;
  } else {
    acc = acc + item.age;
  }

  return acc;
}, 0);

console.log(averageAge);

// new Array()

let map = new Map();

map.set("1", "str1"); // строка в качестве ключа
map.set(1, "num1"); // цифра как ключ
map.set(true, "bool1"); // булево значение как ключ

map.set("2", "str2").set(2, "num1").set(false, "bool0");

console.log(map.size);
console.log(map.get(true));

// map.keys() – возвращает итерируемый объект по ключам,
// map.values() – возвращает итерируемый объект по значениям,
// map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.

const usersMap = new Map(Object.entries(users));

const mapExample = new Map([
  ["1", "str1"],
  [1, "num1"],
  [true, "bool1"],
]);
