"use strict";
// number
let num = 122;

// +/- (2^53 - 1)

console.log(num);

console.log(typeof num);

// bigint
let bigint = 103523534635745745745747523799933423435n;

console.log(bigint);

console.log(typeof bigint);

//boolean

function isEven(x) {
  let isNum = false;

  if (typeof x === "number") {
    isNum = true;
    // isNum = !isNum;
  }

  if (isNum) {
    return x % 2 === 0;
  }

  return "Error: is not a number!";
}

console.log(typeof isEven);

let result = isEven(num);

console.log(result);

result = isEven(number);

console.log(result);

// null
let age = 17;

if (age < 18) {
  console.log("error");
  age = null;
  age = age + Number(prompt("Please enter your age: "));
  console.log(age);
}

// age = null;

// alert(age);

let name;

// alert(name);

const city = "Kazan";

let obj = new Object();

const person = {
  nickname: "User",
  age,
  city,
  attempt: 2,
  passport: {
    id: "125325 23523",
    from: "Saint-Peterburg",
  },
};

console.log(person);

console.log(typeof person);

console.log(person.age);

person.nickname = "Vlad116";

delete person.city;

console.log(person);

person.attempt += 1;

if (person.attempt > 2) {
  person.attempt = null;
}

person = {};
