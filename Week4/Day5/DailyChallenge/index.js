

function isAnagram (str1, str2) {

    // Supprimer les espaces d'affilés en trop et passer tout en minuscules
    str1 = str1.replace(/ {1,}/g, "").toLowerCase();
    str2 = str2.replace(/ {1,}/g, "").toLowerCase();
   

    //Vérifier si les deux chaînes ont des longueurs différentes
    if (str1.length !== str2.length) {
        return false;
    }
    
    //Triez les deux chaînes.
    let s1 = str1.split('').sort().join('');
    let s2 = str2.split('').sort().join('');
    //Comparez les deux chaînes triées.
    return (s1 === s2);
}


console.log(isAnagram("Astronomer","Moon starer"));//true
console.log(isAnagram("School master","The classroom"));//true
console.log(isAnagram("The Morse Code","Here come dots"));//true
console.log(isAnagram('aristochats','écureuils'));//false
