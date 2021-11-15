async function getInfoUser(){

    await fetch('http://localhost:3000/user')
        .then(res => console.log(res))
        .then(data => console.log(data))
        .catch(e => console.log(e))

        document.querySelector('.root').innerHTML = `${data.firstname} ${data.lastname}`
}




async function getInfoUserByOne(){
    await fetch('http://localhost:3000/user/',id)
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(e=>console.log(e))
}



