
//Create an array which value is the planets of the solar system.
let planets =['Terre','Mars','Venus','Jupiter','Saturne','Neptune','Mercure','Uranus'];

//For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
//Finally append each div to the <section> in the HTML (presented below).
let nodeListPlanets = document.querySelector('.listPlanets');
planets.forEach(planet => {   

    let newDiv = document.createElement('div');
    newDiv.classList.add('planet');
    nodeListPlanets.append(newDiv);
});

//Each planet should have a different background color. (Hint: add a new class to each planet).
let backgroundColor = ['white','orange','blue','pink','yellow','green','maroon','red'];

for(let i=0; i<backgroundColor.length; i++){
  
    nodeListPlanets.querySelector(`div:nth-child(${i+1})`).style.backgroundColor = backgroundColor[i]
}

//Bonus: Do the same process to create the moons


let planetsMoons = [
    {
         name: 'Terre',
         number: 1,
    },
    {
         name: 'Mars',
         number: 2,
    },
    {
         name: 'Venus',
         number: 4,
    },
    {
         name: 'Jupiter',
         number: 2,
    },
    {
         name: 'Saturne',
         number: 5,
    },
    {
         name: 'Neptune',
         number: 1,
    },
    {
         name: 'Mercure',
         number: 3,
    },
    {
         name: 'Uranus',
         number: 2,
    },


]

for (let i=0; i<planetsMoons.length; i++){

    let nodeDiv = nodeListPlanets.querySelector(`div:nth-child(${i+1})`);

    for(let j=0; j<planetsMoons[j].number; j++){

        nodeDiv.innerHTML += `
        <p class="moon" style = top:${j*20}px></p>
        `
    }
 
}


console.log(planetsMoons[6].number);