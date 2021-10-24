//Exercice 1
const myFunc = (x, y) => {
    return x + y;
  }
  myFunc();

//Exercice 2
const addTo = x => y => x + y;
var addToTen = addTo(10);
addToTen(3); //13


 //Exercice 3
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) //31


 //Exercice 4
 const sum2 = (a, b) => a + b
 const curriedSum2 = (a) => (b) => a + b
 const add5 = curriedSum2(5)
 add5(12) //17
 

 //Exercice 5
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add50 = (num) => num + 5;
compose(add1, add50)(10)  //16
