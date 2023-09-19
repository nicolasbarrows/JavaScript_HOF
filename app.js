console.log("Hello World!\n==========\n");

// a little excercise title logging function
let exercise = (number) => {
  console.log(`EXERCISE ${number}:\n==========\n`);
};

exercise(1);

let plus = function (number) {
  return function (plusNumber) {
    return plusNumber + number;
  };
};

let plus15 = plus(15);
console.log(plus15(10));

exercise(2);

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

users.forEach((user) => console.log(user.name));

exercise(3);

let scoreLog = users.map((user) => {
  return { name: user.name, score: user.score };
});
console.log(scoreLog);

exercise(4);

let onlyActive = users.filter((user) => user.isActive == true);
console.log(onlyActive);

exercise(5);

let usersDescending = users.sort(compareScores);
function compareScores(a, b) {
  if (a.score > b.score) {
    return -1;
  } else if (a.score < b.score) {
    return 1;
  } else {
    return 0;
  }
}
console.log(usersDescending);

exercise(6);

let scoreTotal = users.reduce((acc,i) => acc + i.score, 0);

console.log(`Total Combined Score: ${scoreTotal}` points);