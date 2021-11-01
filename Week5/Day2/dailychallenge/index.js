//Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
let URLadress = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

//Create a program to fetch gifs
let xhr = new XMLHttpRequest();
xhr.open('GET',URLadress);
xhr.responseType = 'json';
xhr.send();
xhr.onload = function(){
    console.log(xhr.response);
}

//Allow the user to search for as many GIFs as they want and append them to the page. The gif should be appended with a DELETE button next to it.
let nodeForm = document.querySelector('form');
let nodeSearch = document.querySelector('#search');
let nodeCollection = document.querySelector('.collection');
let gifId;

nodeForm.addEventListener('submit', function(e){

    let valueSearch = Number(nodeSearch.value);

    if(isNaN(valueSearch) || valueSearch > 50 || valueSearch < 0){
       e.preventDefault();
        alert('We said a number beetween 0 and 50 !');
        nodeSearch.value="";
    }
    else {
        e.preventDefault();
        gifAdress = xhr.response.data[valueSearch].embed_url;
        gifId = xhr.response.data[valueSearch].id;

        let arrayCollector = [];
        arrayCollector.push(gifAdress);        

        for (let i=0; i<arrayCollector.length; i++){

            nodeCollection.innerHTML+=`
             <div id=${gifId}>
                <iframe src="${arrayCollector[i]}" width="480" height="277" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> 
                <input type="button" value="DELETE" class="btn">
            </div>
            `
        }

        //Allow the user to delete a specific gif by clicking the DELETE button.
        let nodeBtnDelete = document.querySelector('.btn');
        
        nodeBtnDelete.addEventListener('click',function(e){
            e.target.parentElement.remove();     
        })

        nodeSearch.value=""
    }
})





//Allow the user to remove all of the GIFs by clicking a DELETE ALL button.
let nodeButton = document.querySelector('button');

nodeButton.addEventListener('click', function(){
    nodeCollection.innerHTML='';
})