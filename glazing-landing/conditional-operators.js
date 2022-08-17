// prompt/confirm/alert

let age = prompt("Сколько вам лет?", 0);

// Пример тернарного оператора (Условный оператор)
age = isNaN(Number(age)) ? -1 : Number(age);

// Тернарный оператор таким образом НЕ ИСПОЛЬЗУЕМ!
isNaN(Number(age))
  ? console.log("Is not a number")
  : console.log("Is number: ", +age);

const isCorectOld = confirm(`Вы подтверждаете, что вам ${age} лет?`);

alert(typeof isCorectOld);

let isSeller = false;

// Тернарный оператор
const welcomeMessage =
  isCorectOld && age >= 18
    ? "Добро пожаловать в личный кабинет продавца!"
    : isCorectOld
    ? `Придется подождать ${18 - age} лет, что бы вести комерч. деятельность`
    : "Вы не можете зарегистрироваться как продавец";

// console.log(welcomeMessage);

// Условные операторы
if (isCorectOld && age >= 18) {
  console.log("Добро пожаловать в личный кабинет продавца!");
  isSeller = !isSeller;
} else if (isCorectOld) {
  console.log(
    `Придется подождать ${18 - age} лет, что бы вести комерч. деятельность`
  );
} else {
  console.log("Вы не можете зарегистрироваться как продавец");
}

const currentMobileOS = "Android";

// switch case, break, default

switch (currentMobileOS) {
  case "Android":
    alert("You mobile OS support this app!");
    break;
  case "iOS":
    alert("You mobile OS support this app!");
    break;
  case "Nokia":
    alert("You mobile OS don't support this app!");
    break;
  default:
    alert("Did'nt know this OS");
}

// Тоже самое но через "if/else"
// if (currentMobileOS === "Android") {
//   alert("You mobile OS support this app!");
// } else if (currentMobileOS === "Nokia") {
//   alert("You mobile OS don't support this app!");
// } else {
//   alert("Did'nt know this OS");
// }

// Операторы сравнения

// Проверка на равенство, с приведением типов и без

console.log(0 == false); // true
console.log(0 == ""); // true

console.log(0 === false); // false
console.log(0 === ""); // false

// > / <, >=, <=

console.log(0 !== +age);

console.log(null == undefined); // true
console.log(Boolean(null) === Boolean(undefined)); // true

console.log(null === undefined); // false

console.log(null == 0); // false

// Логические операторы
console.log(currentMobileOS === "iOS" || age >= 10); // true
console.log(currentMobileOS === "iOS" && age >= 10); // false
console.log(age <= 18 === !(age >= 18)); // true

// Получение первого истинного значения из списка переменных или выражений

alert(null || 1); // 1 (первое истинное значение)
alert(null || 0 || 1); // 1 (первое истинное значение)
alert(undefined || null || 0); // 0 (поскольку все ложно, возвращается последнее значение)

let userCity = "Kazan";
let defaultCity = "Moskow";

userCity = null;

let city = prompt("Введите город: ") || userCity || defaultCity;
