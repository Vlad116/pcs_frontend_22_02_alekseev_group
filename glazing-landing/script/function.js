/* 
    Функция JavaScript — блок кода, предназначенный для выполнения определенной задачи.
*/

let colors = {
  orange: "#a14b00",
  white: "#ffffff",
  darkBlue: "#3b3a63",
  backgroundColor: "#f2f2f2",
  baseText: "#2f2f51",
};

function checkColorByColorName(color) {
  if (color && colors.hasOwnProperty(color)) {
    console.log(`Цвет ${color} имеет значение ${colors[color]}`);
    return true;
  }

  console.log(`Цвет ${color} не найден`);
  return false;
}

const addOrChangeColorHex = (color, hex) => {
  /* тело функции */
  let isFind = checkColorByColorName(color);
  console.log(arguments);
  if (!color && !hex) {
    return;
  } else if (hex) {
    console.log(`${isFind ? "Заменили" : "Добавили"} цвет ${color}=${hex}`);
    colors[color] = hex;
  } else {
    console.log("Нужно передать HEX код цвета");
  }

  return colors;
};

// findByColorName
// findByHEX

// console.log(addOrChangeColorHex());
console.log(addOrChangeColorHex("backgroundColor", "f4f4f4"));

// let newColor = addOrChangeColorHex("red", "#a10003");
// console.log(newColor);

// function greetingMessage(userName, role = "user") {
//   /*
//     В ранних версиях JS не было возможность передать значение по-умолчанию параметру
//     снизу два варианта каким образом это обходили:
// */

//   // if (role === undefined) {
//   //     role = 'user';
//   // }

//   // role = role || 'user'

//   return `Привет ${userName}[${role}]!`;
// }

const greetingMessage = (userName, role = user) =>
  `Привет ${userName}[${role}]!`;

// console.log(greetingMessage("Vlad"));
// console.log(greetingMessage("Vlad", "admin"));

const sum = (a, b) => a + b;

function sum(a, b) {
  return a + b;
}

const logMessage = (message) => console.log(message);
