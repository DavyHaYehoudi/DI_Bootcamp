// Exercice 1



let nodeNav = document.querySelector('#navBar');
nodeNav.setAttribute('navBar','socialNetworkNavigation');

// 2 methods

//1
let nodeUl = document.getElementsByTagName('ul');
let newLi = document.createElement('li');
let newTextNode = document.createTextNode('Logout');
newLi.appendChild(newTextNode);
nodeUl[0].appendChild(newLi);

//2 and I prefer
// let nodeUl = document.getElementsByTagName('ul');
// let newLi = document.createElement('li');
// newLi.innerText = 'Logout';
// nodeUl[0].append(newLi);

let firstElement = nodeUl[0].firstElementChild;
console.log(firstElement.textContent);
let lastElement = nodeUl[0].lastElementChild;
console.log(lastElement.textContent);




