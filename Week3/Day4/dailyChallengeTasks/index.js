let nodeForm = document.querySelector('form');
let nodeText = document.querySelector('#text');
let nodeUl = document.querySelector('ul');
let nodeClear = document.querySelector('#btn');
let listTasks = [];

nodeForm.addEventListener('submit',function(e){
    e.preventDefault();

    function addTask(){

        if(nodeText.value ==""){
            alert("Please write something and enter")
        }else{

            listTasks.push(nodeText.value);
    
            for(task of listTasks){
    
                nodeUl.innerHTML += `
                <li>
                    <i class="far fa-times-circle"></i>
                    <input type="checkbox" id="checkTask" name="checkTask">
                    <label for="checkTask" id="label">${task}</label>
                </li>
                `
                
                nodeText.value ="";
                listTasks = [];
            }
        }
    }
    addTask();

})

nodeClear.addEventListener('click',function(){
    nodeUl.innerHTML ="";
})


