import React from 'react';

const animals2 = [{label: 'Horse'},{label: 'Turtle'},{label: 'Elephant'},{label: 'Monkey'}];

const animalMap2 = animals2.map((e,i)=>{
    return <li key={i}>{e.label}</li>
})

const Animals2 = () => {
    return (
        <div>
            <p> { animalMap2 } </p>
        </div>
    );
};

export default Animals2;