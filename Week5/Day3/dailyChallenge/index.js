//1rst Daily Challenge
//Create two functions that use promises which can be chained.

let arrayOfWords =['chat','haricot','grenouille','avant'];


function  makeAllCaps(arrayOfWords){

    return new Promise((resolve,reject)=>{

        arrayOfWords.forEach(e => {
            if(typeof e === 'string'){
                resolve(arrayOfWords = arrayOfWords.join().toUpperCase().split(','))
            } else {
                reject(console.log('erreur'))
            }   
        });
    })
}


//The second function called sortWords(), should sort the words in alphabetical order.
function sortWords(){

    arrayOfWords.sort()
    return new Promise((resolve,reject)=>{
        if(arrayOfWords.length>0){
            console.log(arrayOfWords);
        } else {
            reject(console.log('erreur'))
        }
    })   
}



makeAllCaps(arrayOfWords)
      .then(sortWords)
      .then((result) => console.log(result))
      .catch(error => console.log(error))




//2nd Daily Challenge
let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;


function toJs(array){
    return new Promise((resolve,reject) => {

        if( array.length == 0 ){
            reject(console.log('error of convert Json'))
        } else {
            resolve(JSON.parse(array))
        }
    })
}
toJs(morse)
.then(res => toMorse(res))
.catch(err => console.log(err))



function toMorse(obj){
    let promptValue = prompt('Enter a word or a sentence');
        promptValue = promptValue.trim().toLowerCase();
        promptValue = promptValue.replace(/ {1,}/g, "");
        promptValue = promptValue.split('');

    return new Promise((resolve,reject) => {

        promptValue.forEach(e => {

            if(! (e in obj) ){
                reject(console.log('It is not a word or a sentence'))
            } else {
                resolve(console.log(obj[e]))
            }
        })
    })
}






