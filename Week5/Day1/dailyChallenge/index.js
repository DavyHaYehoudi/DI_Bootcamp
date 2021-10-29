
let nodeForm = document.querySelector('form');
let nodeName = document.querySelector('#name');
let nodeLastName = document.querySelector('#lastname');
let nodeSubmit = document.querySelector('submit');
let nodeP = document.querySelector('p');
let Post ;

nodeForm.addEventListener('submit',function(e){
    e.preventDefault();

    let valueName = nodeName.value;
    let valueLastName = nodeLastName.value;

    Post = {name : valueName, lastname : valueLastName}
    let convertPost = JSON.stringify(Post,null,2);
    nodeP.innerHTML = convertPost;
})