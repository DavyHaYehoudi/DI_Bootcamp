
// //Exercice 1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// } //a=3


// // //#2
// var a = 0;
// function q2() {
//     a = 5;
// }//a=5

// function q22() {
//     alert(a);
// }//a=0



// // //#3
// function q3() {
//     window.a = "hello";
// }//nothing will happen



// function q32() {
//     alert(a);
// }//a=0

// // //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }//a='test'

// // //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);
// //a=5 a=5







//exercice 2
//You need to modify the function called experiencePoints()
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator (ie. change the conditional block into a ternary operator).

function winBattle(){
    return true;
}

let experiencePoints = winBattle ? 10:1;
// console.log(experiencePoints);







//Exercice 3

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

//Check if this array includes the color “Violet”.
// console.log(colors.includes('Violet'));

//Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// colors.forEach((color,i)=>{
//     console.log(`${i+1}# choice is ${color}`);
// })



//Exercice 4
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];
//Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// color.forEach((item,i) => {

//     if(i===0){
//         console.log(`${i+1}${ordinal[1]} choice is ${item}`);
//     }
//     else if(i===1){
//         console.log(`${i+1}${ordinal[2]} choice is ${item}`);
//     }
//     else if(i===2){
//         console.log(`${i+1}${ordinal[3]} choice is ${item}`);
//     }
//     else {
//         console.log(`${i+1}${ordinal[0]} choice is ${item}`);
//     }
// })


//Exercice 5
//Write a JavaScript function that checks whether the value of an input is a string or not.

function isString(input){
    if(typeof input === 'string'){
        return true;
    }else{
        return false;
    }
}



//Exercice 6
//Create a global variable called bankAmount which value is the amount of money currently in your account.

let bankAmount;

//Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
let vatTva = 0.17;

//Create an array with all your monthly expenses - both positive and negative (money made and money spent).
let details = ["+200", "-100", "+146", "+167", "-2900"];

//Create a program that modifies the expenses (ie. the expenditures, ie. the negative expenses) so that they will include taxes (multiply each expense by the VAT).
details.forEach((detail,i,det) => det[i] = Number(det[i]));

let detailsVAT = [];
bankAmount=0;

for(item of details){
    
    if(item > 0){
        item = item - (item*vatTva)
    }
    else{
        item = item + (item*vatTva)
    }
    detailsVAT.push(item);
    console.log(detailsVAT);
    
    //Display your current bankAccount standing at the end of the month.
    bankAmount+=item;
    console.log(bankAmount);
}


  
  