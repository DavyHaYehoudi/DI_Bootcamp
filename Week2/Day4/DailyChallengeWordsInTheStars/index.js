let sentenceUser = prompt("Enter some words separated by commas");
let array = sentenceUser.split(',');


let star = "*";
let ligne = "";

for(let i=0; i<array.length+4; i++){
    ligne+=star;
}
console.log(ligne);


for(let i=0; i<array.length;i++){

    let spaceLength = (array.length+1) - array[i].length;
    let spaceSymbol = " ";
    let space = "";

        for(let j=0; j<spaceLength; j++){
            space+=spaceSymbol;
        }

    ligne = star +" " + array[i]+ space + star;

    console.log(ligne);
}

ligne = "";
for(let i=0; i<array.length+4; i++){
    ligne+=star;
}
console.log(ligne);