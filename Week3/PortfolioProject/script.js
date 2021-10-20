const icotopNode = document.querySelector('#icotop');
const mainNode = document.querySelector('main');
const imageHomeNode = document.querySelector('#imageHome');
const titleHomeNode = document.querySelector("#titleHome");
mainNode.style.display = "none";
imageHomeNode.classList.add('imageHome1');



icotopNode.addEventListener('click', function(){
    if(getComputedStyle(mainNode).display != 'none'){
        mainNode.style.display = "none";
        imageHomeNode.classList.add('imageHomeDisplay');
        imageHomeNode.classList.remove('imageHomeDisparition');
       
        
    } else {
        mainNode.style.display = "block";
        imageHomeNode.classList.add('imageHomeDisparition');
        imageHomeNode.classList.remove('imageHomeDisplay');
    }
})
