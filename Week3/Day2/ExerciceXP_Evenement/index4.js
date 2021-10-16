let nodeMain = document.querySelector('.listEvent');
let nodeH1 = document.querySelector('h1');
let nodeP1 = document.querySelector('p:nth-child(2)')
let nodeP2 = document.querySelector('p:nth-child(3)')
console.log(nodeP1);
console.log(nodeP2);



nodeMain.addEventListener('click', function(){
    nodeP1.setAttribute('style','color:blue');
})
nodeMain.addEventListener('mouseover', function(){
    nodeP2.setAttribute('style','color:red');
})
nodeMain.addEventListener('mouseout', function(){
    nodeH1.setAttribute('style','color:yellow');
})
