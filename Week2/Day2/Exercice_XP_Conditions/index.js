// Exercice 1

let x=6;
let y =7;

if(x===y){
   console.log('x and y are equals');
}
else if(x>y && x!==y){
    console.log('x is the biggest number');
}else{
        console.log('y is the biggest number');
}

// Exercice 2

let newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLocaleLowerCase());

if(newDog==="Chihuahua"){
    console.log( "I love Chihuahuas, it’s my favorite dog breed");
}else{
    console.log("I dont care, I prefer cats");
}

// Exercice 3

let numberUser = prompt("Entry a number");
if(numberUser%2===0){
    alert(`${numberUser} is a even number`)
}else {
    alert(`${numberUser} is an odd number`)
}

// Exercice 4
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
let usersLength = users.length;

switch(usersLength){
    case 0 :
        console.log("No one is online");
        break;

    case 1 :
        console.log(users[0] + "is online");
        break;
    
    case 2 :
        console.log(users[0] + "and " + users[1] + " are online");

    default :
    console.log(users[0] + " and " + users[1] + " and "+`${(usersLength-2)}` +" more are online");
}
