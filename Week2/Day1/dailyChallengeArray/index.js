// Exercice 1

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.splice(0,1);
console.log(fruits);

let alphab = fruits.sort();
console.log(alphab);

fruits.push("kiwi");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.reverse();
console.log(fruits);


// Exercice 2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits[1][1]);