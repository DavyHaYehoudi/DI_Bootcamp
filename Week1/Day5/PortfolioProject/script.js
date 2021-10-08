const icotopNode = document.querySelector('#icotop');
const mainNode = document.querySelector('main');
const imageHomeNode = document.querySelector('#imageHome');
mainNode.style.display = "none";
imageHomeNode.classList.add('imageHome1');




icotopNode.addEventListener('click', function(){

       if(getComputedStyle(mainNode).display != 'none'){
           mainNode.style.display = "none";
           imageHomeNode.classList.remove('imageHome2');
           imageHomeNode.classList.add('imageHome1');
       } else {
           mainNode.style.display = "block";
           imageHomeNode.classList.remove('imageHome1');
           imageHomeNode.classList.add('imageHome2');
       }
})