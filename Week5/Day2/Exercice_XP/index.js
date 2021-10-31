
// fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
// .then(res => {return res.json()})
// .then(data =>{console.log(data);})


//Exercise 1 : Giphy API
//Create a program to retrieve the data from the API URL provided above
let xhr =new XMLHttpRequest();
xhr.open('GET','https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
xhr.responseType = 'json'
xhr.send()
xhr.onload = function(){
    console.log(xhr.response);
}


//Exercise 2 : Giphy API
//Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
let xhr2 =new XMLHttpRequest();
xhr2.open('GET','https://api.giphy.com/v1/gifs/search?q=hilarious@<sun>&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
xhr2.responseType = 'json'
xhr2.send()
xhr2.onload = function(){
    console.log(xhr2.response);
}