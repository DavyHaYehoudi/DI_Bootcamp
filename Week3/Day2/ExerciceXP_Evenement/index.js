//Exercice 1

//Using DOM methods, remove the last paragraph in the <article> tag from the DOM
let nodeArticle = document.querySelector('article');
nodeArticle.lastElementChild.remove();

//Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.
let nodeH2 = document.querySelector('h2');
nodeH2.addEventListener('click', function(){
    nodeH2.setAttribute('style','backgroundColor = blue')
})

//Set the font size of the h1 tag to a random pixel size between 0 to 100
let nodeH1 = document.querySelector('h1');
let fontSize = Math.floor(Math.random() * 100);
nodeH1.setAttribute('style',`font-Size:${fontSize}px`);


//Add an event listener which will hide the h3 when it’s clicked on (use the display property).
let nodeH3 = document.querySelector('h3');
nodeH3.addEventListener('click', function(){
nodeH3.setAttribute('style','display:none')
})

//Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let nodeBtn = document.querySelector('button');
let nodeP = document.querySelectorAll('p');
nodeBtn.addEventListener('click',function(){
    for(let i=0; i<nodeP.length; i++){

        nodeP[i].setAttribute('style','font-Weight:bold');
    }
})
//When the “Submit” button of the form is clicked:
// get the values of the input tags
let nodeForm = document.querySelector('form');
let nodeInput1 = document.querySelector('#fname');
let nodeInput2 = document.querySelector('#lname');
let nodeResults = document.querySelector('#results');

nodeForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert(nodeInput1.value +" "+ nodeInput2.value)
    // make sure that they are not empty,
    //----------------------I've the attribute required in balise input HTML--------------------------------------
    
    // then append them to a HTML table, in the div, below the form.
    let dataUser = document.querySelector('.usersAnswer');
   dataUser.innerHTML = `

   <table>
    <tr>
        <td>First name : </td>
        <td>${nodeInput1.value}</td>
    </tr>
    <tr>
        <td>Last name : </td>
        <td>${nodeInput2.value}</td>
    </tr>
   </table>
   `  
})

//When you hoover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
let node2ndP = document.querySelector('article p:nth-child(5)');

node2ndP.addEventListener('mouseover',function(){
    node2ndP.setAttribute('style','display:none');
})