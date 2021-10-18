
//Exercice 1

let nodeAnimate = document.querySelector('#animate');
let nodeBtn = document.querySelector('button');

function myMove(){
    let start = Date.now();
let timer = setInterval(function(){
    let timePassed = Date.now() - start;
    nodeAnimate.style.left = timePassed/5 +'px';
    if(timePassed > 1750){
        clearInterval(timer);
    }
});
}

//Exercice 2

let squareLittle = document.querySelector('.squareLittle');
let squareLarger = document.querySelector('.squareLarger');

function handleDragStart(){
    this.style.opacity = '0.4';
}
function handleDragEnd(){
    this.style.opacity = '1';
}
function handleDragEnter(e){
    this.classList.add('over');
    e.preventDefault();
}
function handleDragLeave(){
    this.classList.remove('over');
}
function handleDragOver(e){
    e.preventDefault();
}
function handleDragDrop(e){
    e.preventDefault();
    this.append(squareLittle);
}

squareLittle.addEventListener('dragstart',handleDragStart);
squareLittle.addEventListener('dragend',handleDragEnd);
squareLarger.addEventListener('dragenter',handleDragEnter);
squareLarger.addEventListener('dragleave',handleDragLeave);
squareLarger.addEventListener('dragover',handleDragOver);
squareLarger.addEventListener('drop',handleDragDrop);




