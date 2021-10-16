//Exercice 2

// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph.

let itemBold = document.querySelectorAll('strong');
let collectItemBold =[];

function  getBold_items() {
    for(let i=0; i<itemBold.length; i++){

        collectItemBold.push(itemBold[i].innerText);
    }
    console.log(collectItemBold);
}
getBold_items();

//Create a function called highlight() that changes the color of all the bold text to blue.

function highlight(){
    for(let i=0; i<itemBold.length; i++){

        itemBold[i].setAttribute('style','color:blue');
    }
}
//highlight();

//Create a function called return_normal() that changes the color of all the bold text back to black.

function return_normal(){
    for(let i=0; i<itemBold.length; i++){

        itemBold[i].removeAttribute('style','color:blue');
    }
}
//return_normal();


//Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). 

let nodeP = document.querySelector('p')
console.log(nodeP);