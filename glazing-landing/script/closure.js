const number = 2;
let someText;

// hoisting
// if (number === 2) {
//   var someText = "right number";
// }

if (number === 2) {
  someText = "right number";
}

console.log(someText);

// function pow(x, n) {
//   let result = 1;
//   console.log(result);
// }

const mathOperations = {
  lastResult: 0,
  pow(x, n) {
    console.log(this.lastResult);
  },
};

// const pow = (x, n) => {
//   let result = 1;
//   console.log(x, n);
// };

// pow(1, 1);
// console.log(this);
// console.log(globalThis);

function sum(a, b, ...args) {
  console.log(args);
  return a + b;
}

console.log(sum(1, 2, 3, 4, 5));

const userData = ["User123", 23, "admin", "manager"];

function showUserData(userName, age, ...roles) {
  console.log(arguments);
  console.log(`${userName} - ${age} лет`);
  console.log(roles);
}

showUserData(...userData);

const anotherShowUserData = (userName, age, ...roles) => {
  //   console.log(arguments);
  console.log(`${userName} - ${age} лет`);
  console.log(roles);
};

anotherShowUserData("User123", 23, "admin", "manager");

const incomes = [20000, 32000, 500, 600, 2322];

const sumAll = (...args) => {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
};

console.log(incomes);
console.log(sumAll(...incomes));

// IIFE - immediately invoked function expression (немедленно вызываемое выражение функции)
// console.log(count);

// const counterCreater = function () {
//   let count = 0;
//   return () => {
//     count += 1;
//     console.log(count);
//     return count;
//   };
// };

// const counter = counterCreater();

const counter = (function () {
  let count = 0;

  return () => {
    count += 1;
    console.log(count);
    return count;
  };
})();

counter();
counter();
counter();

const createBtnCounter = (selector) => {
  let count = 0;
  const clickHandler = () => {
    count += 1;
    alert(`${selector}, кликнули ${count} раз`);
    return count;
  };

  if (!selector) {
    return;
  }

  const button = document.querySelector(selector);

  if (!button) return;

  button.addEventListener("click", clickHandler);

  return {
    click: clickHandler,
    getCount: () => count.toLocaleString(),
  };
};

// const orangeBtnCounter = createBtnCounter();

//
// const button = document.querySelector("button.btn_orange");
// button.addEventListener("click", orangeBtnCounter.click);

const orangeBtnCounter = createBtnCounter("button.btn_orange");
const blackBtnCounter = createBtnCounter("button.btn_black");

console.log(orangeBtnCounter.getCount());

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

// случайное целое число от 0 до 10
getRandomInt(11);

//счётчик (количество попыток)
function minusStep(attemptCounter = 5) {
  let counter = attemptCounter;
  return function () {
    // alert(`Осталось попыток: ${counter} `);
    if (counter > 0) {
      counter--;
    }
    return counter;
  };
}

function createNewGame() {
  const createNewGame = confirm("Новую игру?");

  if (createNewGame) {
    const attempt = prompt("Кол-во попыток");
    createPredictNumberBot(attempt)();
  }
}

function createPredictNumberBot(attemptCounter = 5) {
  const a = getRandomInt(11);
  const attempt = minusStep(attemptCounter);

  const predictNumberBot = () => {
    let b = +prompt("Угадай число от 1 до 10");

    if (b === null) {
      return;
    } else if (isNaN(b)) {
      alert("Введите число!!!");
      predictNumberBot();
    } else if (a === +b) {
      alert("Вы угадали, Поздравляю!!!");
      createNewGame();
    } else if (a > +b) {
      const attemptCounter = attempt();
      alert(
        `Загаданное число,больше! У вас осталось ${attemptCounter} попыток.`
      );
      if (attemptCounter === 0) createNewGame();
    } else if (a < +b) {
      const attemptCounter = attempt();
      alert(
        `Загаданное число, меньше! У вас осталось ${attemptCounter} попыток.`
      );
      if (attemptCounter === 0) createNewGame();
    } else if (+b !== typeof "number") {
      alert("Введите число!!!");
      predictNumberBot();
    }
  };

  return predictNumberBot;
}

createPredictNumberBot()();
