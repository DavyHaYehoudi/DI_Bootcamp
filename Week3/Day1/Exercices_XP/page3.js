
//Add a “light blue” background color and some padding to the <div>.
let nodeDiv = document.querySelector('div');
nodeDiv.style.backgroundColor = 'lightBlue';
nodeDiv.style.padding = '20px';


//Do not display the first name (John) in the list.
let nodeJohn = document.querySelector('ul li:nth-child(1)');
nodeJohn.style.display = 'none';

//Add a border to the second name (Pete).
let nodePete = document.querySelector('ul li:nth-child(2)');
nodePete.style.border = '1px red solid';

//Change the font size of the whole body.
let nodeBody = document.querySelector('body');
nodeBody.style.fontSize = '3rem';

//Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
let nameJohn = nodeJohn.innerText;
let namePete = nodePete.innerText;
let style = nodeDiv.style.backgroundColor = 'lightBlue';

if(style === 'lightBlue'){
    alert(`Hello ${nameJohn} and ${namePete} !`)
}else{
    alert('try again')
}