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

while (index <= splitedString.length - 1) {
  console.log(splitedString[index]);
}
