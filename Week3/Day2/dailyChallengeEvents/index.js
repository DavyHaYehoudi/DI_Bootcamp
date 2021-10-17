//Get the value of each of the inputs in the HTML file when the button is clicked.
let nodeInputNoun = document.querySelector('#noun');
let nodeInputAdjective = document.querySelector('#adjective');
let nodeinputPerson = document.querySelector('#person');
let nodeinputVerb = document.querySelector('#verb');
let nodeInputPlace = document.querySelector('#place');
let nodeBtn = document.querySelector('#lib-button');
let arrayCollectWords =[];
let nodeStory = document.querySelector('#story');

nodeBtn.addEventListener('click',function(){

    arrayCollectWords.push(nodeInputNoun.value, nodeInputAdjective.value,nodeinputPerson.value,nodeinputVerb.value,nodeInputPlace.value)
    
    //Make sure the values are not empty
    //-------------I've add required in input HTML------------------------------


    //Write a story that uses each of the values
    nodeStory.innerText = `Once upon the story of ${arrayCollectWords[0]} who was very ${arrayCollectWords[1]} and whose name was ${arrayCollectWords[2]} and who often ${arrayCollectWords[3]} in ${arrayCollectWords[4]}}`


    let nodeShuffle = document.querySelector('#shuffle');
    nodeShuffle.addEventListener('click',function(e){

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
          getRandomInt(3);

          if(getRandomInt(3)==0){

              nodeStory.innerText = `Do you know who ${arrayCollectWords[0]} is ? Very interesting, and very ${arrayCollectWords[1]}. A mark of clothes has the same name : ${arrayCollectWords[2]}. We want to  ${arrayCollectWords[3]} when we talk about her/him almost if you're in ${arrayCollectWords[4]}`
              e.stopPropagation();
          }
    
          if(getRandomInt(3)==1){

              nodeStory.innerText = `Connais-tu ${arrayCollectWords[0]}  ? C'est très intéressant et vraiment ${arrayCollectWords[1]}. Une marque de vêtements porte son nom : ${arrayCollectWords[2]}. On a envie de  ${arrayCollectWords[3]} quand on parle de lui surtout si l'on se trouve à  ${arrayCollectWords[4]}`
              e.stopPropagation();
          }

          if(getRandomInt(3)==2){
              nodeStory.innerText = `Lorem ipsum ${arrayCollectWords[0]} dolor sit amet ${arrayCollectWords[1]} consectetur adipisicing elit ${arrayCollectWords[2]}. Nisi aut culpa ${arrayCollectWords[3]} harum deserunt enim ${arrayCollectWords[4]} dolorum!`
              e.stopPropagation();
          }
    })
})






//Make sure you check the console for errors when playing the game.

//Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly




















// <ul>
//       <li>Noun: <input type="text" id="noun"></li>
//       <li>Adjective: <input type="text" id="adjective"></li>
//       <li>Someone's Name: <input type="text" id="person"></li>
//       <li>Verb: <input type="text" id="verb"></li>
//       <li>A place: <input type="text" id="place"></li>
//     </ul>

//     <button id="lib-button">Lib it!</button>

//     <p>Generated story: 
//     <span id="story"></span>
//     </p>
