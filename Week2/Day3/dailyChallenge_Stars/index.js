
//Stars

let star = "*";
let ligne = "";

for(let i=0; i<6; i++){
    ligne += star;
    console.log(ligne);
}

console.log('deuxieme');

for(let i=0; i<1; i++){
    ligne="";

    for(let j=0; j<6; j++){
        ligne+=star;
        console.log(ligne);
    }
    ligne="";
}

//Bubble Sort

let numbers = [5,0,9,1,7,4,2,6,3,8];

console.log(numbers.toString());

numbers = numbers.join("");
console.log(numbers);

// numbers = numbers.join("+");
// console.log(numbers);

// numbers = numbers.join("-");
// console.log(numbers);
numbers = [5,0,9,1,7,4,2,6,3,8];

for (let i = 0; i < numbers.length; i++) { 
        for (let j = 0; j < numbers.length; j++) { 
            if (numbers[j] > numbers[j + 1]) { 
                let tmp = numbers[j] ; 
                numbers[j] = numbers[j + 1] ; 
                numbers[j + 1] = tmp; 
            } 
        } 
    } 

    numbers = numbers.reverse();
    console.log(numbers);
