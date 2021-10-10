// Exercice 1

let colors = ['blue','white','black','grey','yellow','maroon','orange'];;

for( let i=0; i<colors.length; i++){
    console.log(`My choice ${i+1}  is : `+ colors[i]);
}

const numeral1 = ['st','nd','rd','th','th','th','th','th','th','th'];

for(let i=0; i<colors.length;i++){
    
   
    console.log(`My ${i+1}${numeral1[i]} choice is : ` + colors[i]);
}

//Exercice 2

let people = ["Greg", "Mary", "Devon", "James"];

people.shift();
console.log(people)

people.splice(2,1,"Jason");
console.log(people)

people.push("Davy");
console.log(people)

for(name of people){
    console.log(name);
}
for(name of people){
   if(name==="Jason"){
       break;
   }
    console.log(name);
}

people = people.slice(1,2);
console.log(people);

people = ["Greg", "Mary", "Devon", "James"];
console.log(people.indexOf("Mary"))

console.log(people.indexOf("Foo"));
//"Foo" is not exist

people = ["Greg", "Mary", "Devon", "James"];

let last = people.slice(-1);
console.log(last);



//Exercice 3

let numberEntry = prompt("Enter a number");

while(isNaN(numberEntry)||numberEntry<10){
    numberEntry = prompt("Enter a number please :)") ;
}
 


//Exercice 4

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }

  let questionName = prompt("What's your name ?");

  if(questionName in guestList){
      console.log(`Hi, I'm ${ questionName }, and I'm from ` + guestList[questionName])
  }


//Exercice 5

  let family = {
      lastName : "Smith",
      country : "England",
      language : "English",
      mediumAge : 25,
      number : 6,
      car : true
  }

  for(item in family){

      console.log(item);
      console.log(family[item]);
  }
     
//Exercice 6
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

  let array =[];

  for(item in details){

      array.push(item +" "+ details[item])
    }
  array = array.join(" ")
  console.log(array)


//Exercice 7

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let firstLetter =[];

for(let i=0; i<names.length; i++){

    firstLetter.push(names[i][0]);
}

firstLetter = firstLetter.sort().join("")
console.log(firstLetter)
