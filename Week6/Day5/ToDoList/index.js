let nodeButton = document.querySelector('.see-all-tasks');
nodeButton.addEventListener('click',function(){
    let newUrl = 'page.html';
    document.location.href = newUrl;
})

let nodeForm = document.querySelector('form');
let nodeDiv = document.querySelector('.listingTasks');


let basket = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')):[];

nodeForm.addEventListener('submit',function(e){
    e.preventDefault();
    let nameValue = document.querySelector('#name').value;
    let descriptionValue = document.querySelector('#description').value;
    let startDate = document.querySelector('#stardate').value;
    let endDate = document.querySelector('#enddate').value;

    let data = {name:nameValue ,description:descriptionValue,starDate:startDate,endDate:endDate};

   nodeDiv.innerHTML+=`
   <ul>
        <li> Name : ${nameValue}</li>
        <li> Description : ${descriptionValue}</li>
        <li> StarDate : ${startDate}</li>
        <li> EndDate : ${endDate}</li>
   </ul>
   `

    basket.push(data);
    localStorage.setItem('task',JSON.stringify(basket));


    document.querySelector('#name').value ="";
    document.querySelector('#description').value ="";
    document.querySelector('#stardate').value ="";
    document.querySelector('#enddate').value ="";
})

