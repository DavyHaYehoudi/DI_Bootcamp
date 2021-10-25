//Exercice 1
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);//['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
const country = "USA";
console.log([...country]); //['U', 'S', 'A']

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray); //[undefined, undefined]






//Exercice 2
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

//Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)             
let helloMap = users.map(e => {
    let hello = 'Hello ' + e.firstName;
    return hello;
})
console.log(helloMap)


//Using the filter() method, congratulate only the Full Stack Residents.
let congratulate = users.filter(e => {
    return e.role === 'Full Stack Resident';
})

for(let i=0; i<congratulate.length; i++){
    console.log('Congratulations ', congratulate[i].firstName)
}




//Exercice 3
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.
let str = epic.reduce((previous, current) => {
    return previous +' '+ current
  
})
console.log(str);



//Exercice 4
let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
               
 //Use the filter() method to congratulate the students that passed the course.

 let congratulattte = student.filter(e => {
    return e.isPassed === true;
})

for(let i=0; i<congratulattte.length; i++){
    console.log('Congratulations ', congratulattte[i].name)
}
