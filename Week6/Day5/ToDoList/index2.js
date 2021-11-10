let nodeBtnBack = document.querySelector('.back-home');
nodeBtnBack.addEventListener('click',function(){
    let newUrl = 'index.html';
    document.location.href = newUrl;
})

let nodeDiv = document.querySelector('.tasks')
let nodeArticle = document.querySelector('.task');

const data = localStorage.getItem('task');
let listTasks = [];
let newUl;
let newLi;

if(data!==null){
    listTasks = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')):[];
    displayListTasks();
    addDescription();
    validity();
}



function displayListTasks() {

    listTasks.forEach(e => {
        
        newUl = document.createElement('ul');            
        newLi = document.createElement('li');
        newLi.innerHTML = `
            <input type='checkbox' name='valid' class='valid'>
            <li> Name : ${e.name}</li>
            <li> Start Date : ${e.starDate}</li>
            <li> How many days left to complete the task : </li>       
            `;
    
        newUl.append(newLi);
        nodeArticle.append(newUl);
        nodeDiv.append(nodeArticle)
    
    });
}

function addDescription(){
    nodeArticle.addEventListener('click',function(evenement){
        evenement.target.innerHTML+=`<li> Description :${listTasks.description}</li>`
    },{once:true})
}

function validity(){
    nodeArticle.addEventListener('click', function(e){
        if(e.target.checked){
            nodeArticle.classList.add('validity')
        } else {
            nodeArticle.classList.add('notValidity')
        }
    })
}









