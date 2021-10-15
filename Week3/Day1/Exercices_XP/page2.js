
//Exercice 2

//In the HTML above change the name “Pete” to “Richard”.
let nodeUl = document.querySelector('.list');
nodeUl.lastElementChild.innerText = 'Richard';

//Change each first name of the two <ul>'s to your name.
nodeUl = document.querySelectorAll('.list');
nodeUl[0].firstElementChild.innerText = 'Davy';
nodeUl[1].firstElementChild.innerText = 'Davy';

//At the end of each <ul> add a <li> that says “Hey students”.
let newLi = document.createElement('li');
newLi.textContent = 'Hey students';
nodeUl[0].append(newLi);
newLi = document.createElement('li');
newLi.textContent = 'Hey students';
nodeUl[1].append(newLi);

//Delete the name Sarah from the second <ul>.
let nodeContainer = document.querySelector('#container');
let nodeSarah = nodeContainer.querySelector('ul:nth-child(2) li:nth-child(2)');
nodeSarah.remove();

//Add a class called student_list to both of the <ul>'s.
nodeUl[0].classList.add('student_list');
nodeUl[1].classList.add('student_list');

//Add the classes university and attendance to the first <ul>.
let firstUl = nodeContainer.querySelector('ul:nth-child(1)');
firstUl.classList.add('university', 'attendance');