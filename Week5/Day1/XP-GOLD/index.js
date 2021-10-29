console.log(window.location.search);

let searchParams = new URLSearchParams(window.location.search);
console.log(searchParams.get('name'));
console.log(searchParams.get('lastname'));

let name = searchParams.get('name');
let lastname = searchParams.get('lastname');

let nodeP = document.getElementsByTagName('p');
nodeP[0].innerHTML = `The name is ${name} and the lastname is ${lastname}`