// Exercice 1

const infoAboutMe = ()=> {
    console.log("My name is Davy, I'm 43 and I'm enjoy coding");
}
infoAboutMe();


let infoAboutPerson =(personName, personAge, personFavoriteColor)=>{
    console.log(`The name is ${personName}`);
    console.log(`The age is ${personAge}`);
    console.log(`The favorite color is ${personFavoriteColor}`);
}
infoAboutPerson('Davy',43,'blue');
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

infoAboutPerson = (personName, personAge, personFavoriteColor,personHobbies)=>{
    console.log(`The name is ${personName}`);
    console.log(`The age is ${personAge}`);
    console.log(`The favorite color is ${personFavoriteColor}`);
    console.log(`The hobbies are : ${personHobbies}`);
}
infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])



// Exercice 2 
//Part1

// let age = prompt("How old are you ?");

// const checkDriverAge = ()=>{

//    if( age<18 ){
//        alert("Sorry, you are too young to drive this car. Powering off")
//       }

//     if( age == 18 ){
//         alert("Congratulations on your first year of driving. Enjoy the ride!")
//     }
    
//     if( age >18 ){
//         alert("You are old enough to drive, Powering On. Enjoy the ride!")
//     }
// }
// checkDriverAge();

//Part2

// const checkDriverAge2 = (age2)=>{

//     if( age2<18 ){
//         alert("Sorry, you are too young to drive this car. Powering off")
//        }
 
//      if( age2 == 18 ){
//          alert("Congratulations on your first year of driving. Enjoy the ride!")
//         }
        
//         if( age2 >18 ){
//         alert("You are old enough to drive, Powering On. Enjoy the ride!")
//      }
//  }
//  checkDriverAge2(24);

// Exercice 3

const checkNumber = ()=> {
    for( let i=0; i<101; i++){
        if( i%2 === 0 ){
            console.log(`the number ${ i } is even`);
        }else{
            console.log(`the number ${ i } is odd`);
        }
    }
}
checkNumber();



// Exercice 4

const isDivisible = ()=>{
    let total = 0;

    for(let i=0; i<501; i++){
        if( i % 23 === 0){
            console.log(i);
            total+=i;
        }
    }
    console.log(total);
}
isDivisible();

//Bonus
const isDivisible2 = (divisor)=>{
    let total = 0;

    for(let i=0; i<501; i++){
        if( i % divisor === 0){
            console.log(i);
            total+=i;
        }
    }
    console.log(total);
}
isDivisible2(13);

// Exercice 5
let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

// const checkBasket = ()=>{
//     let article = prompt("Is this article in the basket ?");
//     if ( article in amazonBasket){
//         alert("This article is already in the basket");
//     }else{
//         alert("This article is not in the basket")
//     }
// }

// checkBasket();

//Exercice 6
let Quarters  = 0.25;
let Dimes = 0.10;
let Nickels = 0.05;
let Pennies = 0.01;

let valueMonnaie = ["q","d","n","p"]

const changeEnough = (valueMonnaie,price)=>{

    let myMonnaie =    valueMonnaie[0]*Quarters
                     + valueMonnaie[1]*Dimes
                     + valueMonnaie[2]*Nickels
                     + valueMonnaie[3]*Pennies ;

    if (myMonnaie >=price){
        console.log("Yes, you can!");
    }else{
        console.log("Sorry, you don't have enough");
    }
}

changeEnough(["2","3","4","3"],1);

//Exercice 7

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana","orange","apple","blueberry"];
let price =0;

const myBill = () =>{

    for(article of shoppingList){

        if(article in stock && stock[article]>0){
            price+= prices[article];
            //Bonus
            stock[article]--;
        }
    }
    console.log("The total price is : " + price);
    console.log(stock);
}
myBill();

// Exercice 8




