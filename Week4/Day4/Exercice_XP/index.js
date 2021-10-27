// Exercice 1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)




//Exercice 2

//Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
let obj = {first: 'Elie', last: 'Schoppik'};

//Destructure the parameter inside the function and return a string as the example seen below:
function displayStudentInfo(studentObject){
    let objVal = Object.values(studentObject);
    let [key,val] = objVal;
    console.log(`Your full name is ${key} ${val}`)
}
displayStudentInfo(obj);




//Exercice 3
const users = { user1: 18273, user2: 92833, user3: 90315 };

//Using methods taught in class, turn the users object into an array:
let arrayUsers = Object.entries(users)

//Modify the outcome of part 1, by multipling the user’s ID by 2.
arrayUsers.forEach(e => e[1]=e[1]*2);



//Exercice 4

//Analyze the code below. What will be the output?
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);//object


  //Exercise 5 : Dog Class
  class Dog {
    constructor(name) {
      this.name = name;
    }
  };

  //Which constructor will successfully extend the Dog class?
     // 2
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };


  //Exercise 6 : Challenges

  //Evaluate these (ie True or False)
//   [2] === [2]//false
   
//   {} === {} //false


//What is the value of property “number” for each object.
const object1 = { number: 5 }; //4
const object2 = object1; //4
const object3 = object2; //4
const object4 = { number: 5}; //4
object1.number = 4;//4

//Create a class Animal with the attributes name, type and color
class Animal {
    constructor(name,type,color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

/*Create a class Mamal that extends from the Animal class. It has a method called sound().
This method takes a parameter: the sound the animal makes, and returns the details of the animal
 (name, type and color) as well as the sound it makes.*/

 class Mamal extends Animal{
     constructor(name,type,color,noise){
         super(name,type,color);
         this.noise = noise;
     }
     sound(noise){
         console.log(`${this.name} is a ${this.type} and is ${this.color}. It says ${noise}`)
     }
 }

 //Create a cow object that accepts a name, a type and a color and calls the sound method that moo’s her name, type and color.
 const cow = new Mamal('Doggy','Royal-dog','black');
 console.log(cow.sound('ouaf !'));