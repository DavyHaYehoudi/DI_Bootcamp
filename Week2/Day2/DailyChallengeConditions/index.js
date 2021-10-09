let sentence = 'This dinner is not that bad ! You cook well';

let arraySentence = sentence.split(" ");
let wordNot = arraySentence.indexOf("not");
let wordBad = arraySentence.indexOf("bad");


if(wordBad>wordNot && wordNot!==-1){
    
   arraySentence.splice(wordNot,(wordBad - wordNot +1),"good");
   arraySentence = arraySentence.join(" ")
   console.log(arraySentence);
}
else if(wordBad<wordNot || wordNot===-1 || wordBad===-1){
    console.log(sentence);
}


