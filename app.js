console.log("Hello World!\n==========\n");

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

// a little excercise title logging function
let exercise = (number) => {
  console.log(`EXERCISE ${number}:\n==========\n`);
};

exercise(1);

function plus(num) {
  return function (plusNum) {
    return num + plusNum;
  };
}

let plus15 = plus(15);
console.log(plus15(10));

exercise(2);

users.forEach((user) => console.log(user.name));

exercise(3);

let scoreLog = users.map((user) => {
  return { name: user.name, score: user.score };
});
console.log(scoreLog);

exercise(4);

let onlyActive = users.filter((user) => user.isActive);
console.log(onlyActive);

exercise(5);

users.sort((a, b) => b.score - a.score);
console.log(users);

exercise(6);

let scoreAvg = Math.round(users.reduce((acc, i) => acc + i.score, 0)/users.length);
console.log(`Average Score: ${scoreAvg} points`);
