var evens = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var fives = [];
// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

console.log("Odds", odds);
console.log("nums", nums);
console.log("Fives", fives);

// Lexical this
var malik = {
  _name: "Malik",
  _friends: ["Douglas"],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
}

malik.printFriends();
