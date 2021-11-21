import React from 'react';

const animals = ['Horse','Turtle','Elephant','Monkey'];

const animalMap = animals.map((e,i)=>{
  return <li key={i}>{e}</li>
})

console.log(animalMap);


const Animals = () => {
    return (
        <div>
            <p> { animalMap } </p>
        </div>
    );
};

export default Animals;

