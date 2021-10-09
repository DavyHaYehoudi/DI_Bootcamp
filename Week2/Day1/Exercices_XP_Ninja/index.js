// Exercice 1

let home = prompt('Write a sentence which includes the word "Nemo"');
let homeArray = home.split(' ');
let homeSearch = home.includes("Nemo");
let positionNemo = homeArray.indexOf("Nemo");


if(homeSearch){
    alert(`I found Nemo at ${positionNemo +1} position of the sentence`);
} else {
    alert(`You didn't write the word "Nemo"`)
}

// Exercice 2

let eval1 = 5 >= 1;
console.log(eval1);

let eval2 = 0 === 1;
console.log(eval2);

let eval3 = 4 <= 1;
console.log(eval3);

let eval4 = 1 != 1;
console.log(eval4);

let eval5 = "A" > "B";
console.log(eval5);

let eval6 = "B" < "C";
console.log(eval6);

let eval7 = "a" > "A";
console.log(eval7);

let eval8 = "b" < "A";
console.log(eval8);

let eval9 = true === false;
console.log(eval9);

let eval10 = true != true;
console.log(eval10);

// Exercice 3
let c;
let a = 34;
let b = 21;
a = 2;
let sum = a + b;

console.log(sum);
console.log(c);
console.log(3 + 4 + '5');

// Exercice 3

let questionUser = prompt('Please, write a list of numbers separated by commas');
let listArray = questionUser.split(',');
console.log(listArray);

let total = 0;
for(let i = 0; i<listArray.length; i++){
    total += Number(listArray[i]);
}

alert(`The total of all your numbers is :   ${total}`);


// Exercice 4
let entryNumber = prompt("Please, entry a number");
let word = "Boom";

if(entryNumber < 2){
    alert("boom");
}
 else if (entryNumber >=2 ){

    let numberO = "";
    for(let i=0; i<entryNumber-2; i++){
        numberO+="o";
    }

    let arrayWord = word.split("");
    arrayWord.splice(1,0,numberO).join();
    arrayWord = arrayWord.join('');
    let strWord = arrayWord;

    if( !(entryNumber%2===0) && !(entryNumber%5===0) ){
        alert(strWord);
    }

    if(entryNumber%2===0){
        alert(`${strWord} + !`)
    }

    if(entryNumber%5===0)[
        alert(strWord.toUpperCase()) 
    ]

    if(entryNumber%2===0 && entryNumber%5===0){
        alert(strWord.toUpperCase() + "!") 
    }
}
