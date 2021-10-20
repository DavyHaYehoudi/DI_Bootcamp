let ligne = "";
let ligneEmpty = " ";
let star = "*";

//Head
for(let i=0; i<3; i++){
    ligne+=star
}
console.log(" " + ligne);
ligne="";

//Lateral
  
for(let i=0; i<3; i++){
    ligne+=ligneEmpty;
}

console.log("*"+ ligne+ "*");
console.log("*"+ ligne+ "*");
ligne="";

//Central
for(let i=0; i<5; i++){
    ligne+=star;
}
console.log(ligne);
ligne="";

//Footer
for(let i=0; i<3; i++){
    ligne+=ligneEmpty;
}

console.log("*"+ ligne+ "*");
console.log("*"+ ligne+ "*");
console.log("*"+ ligne+ "*");