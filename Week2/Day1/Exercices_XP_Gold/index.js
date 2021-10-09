// Exercice 1

let me = ["my","favorite","color","is","blue"];
let newMe = me.join(' ');
console.log('exercice 1 : ' + newMe);

// Exercice 2

let str1 = "champion" ;
let str2 = "swimmer" ;

let arr1 = str1.split('');
let arr2 = str2.split('');

let lastLetterStr1 = str1.slice(-1);
let lastLetterStr2 = str2.slice(-1);

arr1.splice(-1,1,lastLetterStr2);
arr2.splice(-1,1,lastLetterStr1);

arr1 = arr1.join('');
arr2 = arr2.join('');

console.log(arr2,arr1);

// Exercice 3

let num1;
let num2;

const firstAsk = () => {

    let firstMessage = prompt("Please enter a first number");
    const VerifyNumber1 = () => {
        if(isNaN(firstMessage)){
            alert("Please, a number :)");
           firstAsk();
        } else{
            num1 = Number(firstMessage);
        }
    }
    VerifyNumber1();
}
firstAsk();



const secondAsk = () => {

    let secondMessage = prompt("Now, a second number");
    const VerifyNumber2 = () => {
        if(isNaN(secondMessage)){
            alert("Please, a number :)");
            secondAsk();
        } else{
            num2 = Number(secondMessage);
        }
    }
    VerifyNumber2();
}
secondAsk();

let total = num1 + num2;
let divide = num1/num2;
let multiply = num1*num2
let substract = num1 - num2;

alert( 'Total of your numbers is : '+ total + '\nRate of your numbers : ' + divide + '\nMultiply of your numbers : ' + multiply + '\nSubstract of your numbers : ' + substract);




